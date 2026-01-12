import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { toast } from "sonner";
import { ArrowLeft, Volume2, VolumeX, Coins } from "lucide-react";
import { soundManager } from "@/lib/sounds";

const SYMBOLS = ["🍒", "🍋", "🍊", "🍇", "💎", "7️⃣", "⭐"];
const SPIN_COST = 50;

export default function SlotsGame() {
  const { isAuthenticated } = useAuth();
  const { data: credits, refetch: refetchCredits } = trpc.credits.get.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const recordPlay = trpc.games.recordPlay.useMutation();

  const [reels, setReels] = useState([SYMBOLS[0], SYMBOLS[0], SYMBOLS[0]]);
  const [spinning, setSpinning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [lastWin, setLastWin] = useState(0);

  const calculateWin = (result: string[]) => {
    if (result[0] === result[1] && result[1] === result[2]) {
      const symbol = result[0];
      if (symbol === "7️⃣") return SPIN_COST * 20;
      if (symbol === "💎") return SPIN_COST * 10;
      if (symbol === "⭐") return SPIN_COST * 8;
      return SPIN_COST * 5;
    }
    if (result[0] === result[1] || result[1] === result[2] || result[0] === result[2]) {
      return SPIN_COST * 2;
    }
    return 0;
  };

  const handleSpin = async () => {
    if (!isAuthenticated) {
      toast.error("Please sign in to play");
      return;
    }

    if (!credits || credits.credits < SPIN_COST) {
      toast.error("Not enough credits!");
      return;
    }

    if (spinning) return;

    setSpinning(true);
    setLastWin(0);

    if (soundEnabled) {
      soundManager.playSpin();
    }

    const spinDuration = 2000;
    const spinInterval = 100;
    const spinSteps = spinDuration / spinInterval;
    let step = 0;

    const spinAnimation = setInterval(() => {
      setReels([
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      ]);
      step++;

      if (step >= spinSteps) {
        clearInterval(spinAnimation);
        finalizeSpin();
      }
    }, spinInterval);
  };

  const finalizeSpin = async () => {
    const finalReels = [
      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    ];
    setReels(finalReels);

    const winAmount = calculateWin(finalReels);
    setLastWin(winAmount);

    try {
      await recordPlay.mutateAsync({
        gameType: "slots",
        creditsWagered: SPIN_COST,
        creditsWon: winAmount,
        result: winAmount > 0 ? "win" : "loss",
      });

      await refetchCredits();

      if (winAmount > 0) {
        if (soundEnabled) {
          soundManager.playWin();
        }
        toast.success(`You won ${winAmount} credits!`);
      } else {
        if (soundEnabled) {
          soundManager.playLose();
        }
        toast.info("Try again!");
      }
    } catch (error) {
      toast.error("Failed to record game");
    }

    setSpinning(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container max-w-4xl">
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
              <CardTitle className="text-center text-3xl">🎰 Classic Slots</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 border-2 border-primary/30">
                <div className="flex justify-center gap-4 mb-6">
                  {reels.map((symbol, index) => (
                    <div key={index} className={`w-24 h-24 md:w-32 md:h-32 bg-card rounded-lg flex items-center justify-center text-5xl md:text-6xl border-4 border-primary/50 ${spinning ? "animate-pulse" : ""}`}>
                      {symbol}
                    </div>
                  ))}
                </div>

                {lastWin > 0 && !spinning && (
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-primary animate-pulse">🎉 WIN: {lastWin} Credits!</p>
                  </div>
                )}

                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Coins className="w-5 h-5" />
                    <span>Cost: {SPIN_COST} credits</span>
                  </div>
                  <Button size="lg" className="w-full md:w-auto px-12" onClick={handleSpin} disabled={spinning || !isAuthenticated || !credits || credits.credits < SPIN_COST}>
                    {spinning ? "Spinning..." : "SPIN"}
                  </Button>
                </div>
              </div>

              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h3 className="text-xl font-bold mb-4 text-center">Paytable</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>7️⃣ 7️⃣ 7️⃣</span>
                    <span className="font-bold text-primary">{SPIN_COST * 20}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>💎 💎 💎</span>
                    <span className="font-bold text-primary">{SPIN_COST * 10}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>⭐ ⭐ ⭐</span>
                    <span className="font-bold text-primary">{SPIN_COST * 8}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>Any 3 Match</span>
                    <span className="font-bold text-primary">{SPIN_COST * 5}</span>
                  </div>
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
