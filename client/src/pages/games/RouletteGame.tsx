import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { toast } from "sonner";
import { ArrowLeft, Volume2, VolumeX } from "lucide-react";
import { soundManager } from "@/lib/sounds";

const NUMBERS = Array.from({ length: 37 }, (_, i) => i);
const RED_NUMBERS = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const BLACK_NUMBERS = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

export default function RouletteGame() {
  const { isAuthenticated } = useAuth();
  const { data: credits, refetch: refetchCredits } = trpc.credits.get.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const recordPlay = trpc.games.recordPlay.useMutation();

  const [bets, setBets] = useState<Record<string, number>>({});
  const [spinning, setSpinning] = useState(false);
  const [winningNumber, setWinningNumber] = useState<number | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const getTotalBet = () => Object.values(bets).reduce((sum, bet) => sum + bet, 0);

  const placeBet = (type: string, amount: number) => {
    if (!credits || credits.credits < amount) {
      toast.error("Not enough credits!");
      return;
    }

    setBets((prev) => ({
      ...prev,
      [type]: (prev[type] || 0) + amount,
    }));
  };

  const clearBets = () => setBets({});

  const calculateWinnings = (number: number) => {
    let totalWin = 0;

    Object.entries(bets).forEach(([betType, betAmount]) => {
      if (betType === `number-${number}`) {
        totalWin += betAmount * 35;
      } else if (betType === "red" && RED_NUMBERS.includes(number)) {
        totalWin += betAmount * 2;
      } else if (betType === "black" && BLACK_NUMBERS.includes(number)) {
        totalWin += betAmount * 2;
      } else if (betType === "even" && number % 2 === 0 && number !== 0) {
        totalWin += betAmount * 2;
      } else if (betType === "odd" && number % 2 === 1) {
        totalWin += betAmount * 2;
      } else if (betType === "1-18" && number >= 1 && number <= 18) {
        totalWin += betAmount * 2;
      } else if (betType === "19-36" && number >= 19 && number <= 36) {
        totalWin += betAmount * 2;
      }
    });

    return totalWin;
  };

  const handleSpin = async () => {
    const totalBet = getTotalBet();
    if (totalBet === 0) {
      toast.error("Place your bets first!");
      return;
    }

    if (!credits || credits.credits < totalBet) {
      toast.error("Not enough credits!");
      return;
    }

    setSpinning(true);
    setWinningNumber(null);

    if (soundEnabled) {
      soundManager.playRouletteSpin();
    }

    setTimeout(async () => {
      const result = Math.floor(Math.random() * 37);
      setWinningNumber(result);

      const winnings = calculateWinnings(result);

      try {
        await recordPlay.mutateAsync({
          gameType: "roulette",
          creditsWagered: totalBet,
          creditsWon: winnings,
          result: winnings > 0 ? "win" : "loss",
        });

        await refetchCredits();

        if (winnings > 0) {
          if (soundEnabled) {
            soundManager.playWin();
          }
          toast.success(`Number ${result}! You won ${winnings} credits!`);
        } else {
          if (soundEnabled) {
            soundManager.playLose();
          }
          toast.info(`Number ${result}. Better luck next time!`);
        }
      } catch (error) {
        toast.error("Failed to record game");
      }

      setSpinning(false);
      setBets({});
    }, 3000);
  };

  const getNumberColor = (num: number) => {
    if (num === 0) return "bg-green-600";
    if (RED_NUMBERS.includes(num)) return "bg-red-600";
    return "bg-black";
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <Button asChild variant="outline">
              <Link href="/games" className="flex items-center"><ArrowLeft className="w-4 h-4 mr-2" />Back</Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setSoundEnabled(!soundEnabled)}>
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-3xl">🎡 Roulette</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 border-2 border-primary/30">
                <div className="flex justify-center mb-6">
                  <div className={`w-32 h-32 rounded-full border-8 border-primary flex items-center justify-center text-4xl font-bold ${spinning ? "animate-spin-slow" : ""}`}>
                    {winningNumber !== null ? winningNumber : "?"}
                  </div>
                </div>

                {winningNumber !== null && !spinning && (
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-primary">Winning Number: {winningNumber}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button onClick={() => placeBet("red", 50)} disabled={spinning} variant="destructive">
                  Red (2x)
                </Button>
                <Button onClick={() => placeBet("black", 50)} disabled={spinning} className="bg-black hover:bg-black/80">
                  Black (2x)
                </Button>
                <Button onClick={() => placeBet("even", 50)} disabled={spinning} variant="secondary">
                  Even (2x)
                </Button>
                <Button onClick={() => placeBet("odd", 50)} disabled={spinning} variant="secondary">
                  Odd (2x)
                </Button>
                <Button onClick={() => placeBet("1-18", 50)} disabled={spinning} variant="outline">
                  1-18 (2x)
                </Button>
                <Button onClick={() => placeBet("19-36", 50)} disabled={spinning} variant="outline">
                  19-36 (2x)
                </Button>
              </div>

              <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
                {NUMBERS.slice(1).map((num) => (
                  <Button key={num} onClick={() => placeBet(`number-${num}`, 25)} disabled={spinning} size="sm" className={`${getNumberColor(num)} hover:opacity-80 text-white`}>
                    {num}
                  </Button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-lg font-bold">Total Bet: {getTotalBet()} credits</div>
                <div className="flex gap-2">
                  <Button onClick={clearBets} disabled={spinning} variant="outline">Clear Bets</Button>
                  <Button onClick={handleSpin} disabled={spinning || getTotalBet() === 0} size="lg">
                    {spinning ? "Spinning..." : "SPIN"}
                  </Button>
                </div>
              </div>

              <p className="text-center text-sm text-destructive font-semibold">For Entertainment Only | No Real Value</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
