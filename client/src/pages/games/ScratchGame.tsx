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

const SYMBOLS = ["🍒", "🍋", "🍊", "💎", "7️⃣", "⭐"];
const CARD_COST = 30;

export default function ScratchGame() {
  const { isAuthenticated } = useAuth();
  const { data: credits, refetch: refetchCredits } = trpc.credits.get.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const recordPlay = trpc.games.recordPlay.useMutation();

  const [card, setCard] = useState<string[]>([]);
  const [revealed, setRevealed] = useState<boolean[]>([]);
  const [playing, setPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [winAmount, setWinAmount] = useState(0);

  const generateCard = () => {
    const newCard: string[] = [];
    for (let i = 0; i < 9; i++) {
      newCard.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
    }
    return newCard;
  };

  const calculateWin = (cardSymbols: string[]) => {
    const counts: Record<string, number> = {};
    cardSymbols.forEach((symbol) => {
      counts[symbol] = (counts[symbol] || 0) + 1;
    });

    let maxWin = 0;
    Object.entries(counts).forEach(([symbol, count]) => {
      if (count >= 3) {
        const multiplier = symbol === "7️⃣" ? 20 : symbol === "💎" ? 15 : symbol === "⭐" ? 10 : 5;
        const win = CARD_COST * multiplier * (count - 2);
        if (win > maxWin) maxWin = win;
      }
    });

    return maxWin;
  };

  const handleNewCard = () => {
    if (!isAuthenticated) {
      toast.error("Please sign in to play");
      return;
    }

    if (!credits || credits.credits < CARD_COST) {
      toast.error("Not enough credits!");
      return;
    }

    const newCard = generateCard();
    setCard(newCard);
    setRevealed(new Array(9).fill(false));
    setPlaying(true);
    setWinAmount(0);
  };

  const revealSquare = (index: number) => {
    if (!playing || revealed[index]) return;

    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);

    if (newRevealed.every((r) => r)) {
      finishGame();
    }
  };

  const revealAll = () => {
    if (!playing) return;
    setRevealed(new Array(9).fill(true));
    finishGame();
  };

  const finishGame = async () => {
    const win = calculateWin(card);
    setWinAmount(win);

    try {
      await recordPlay.mutateAsync({
        gameType: "scratch",
        creditsWagered: CARD_COST,
        creditsWon: win,
        result: win > 0 ? "win" : "loss",
      });

      await refetchCredits();

      if (win > 0) {
        toast.success(`You won ${win} credits!`);
      } else {
        toast.info("Try again!");
      }
    } catch (error) {
      toast.error("Failed to record game");
    }

    setPlaying(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Button asChild variant="outline">
              <Link href="/games"><a className="flex items-center"><ArrowLeft className="w-4 h-4 mr-2" />Back</a></Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setSoundEnabled(!soundEnabled)}>
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-3xl">🎫 Scratch Cards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 border-2 border-primary/30">
                {card.length === 0 ? (
                  <div className="text-center space-y-4 py-12">
                    <p className="text-xl text-muted-foreground">Click "New Card" to start playing!</p>
                    <p className="text-sm text-muted-foreground">Cost: {CARD_COST} credits per card</p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {card.map((symbol, index) => (
                        <button
                          key={index}
                          onClick={() => revealSquare(index)}
                          disabled={!playing || revealed[index]}
                          className={`aspect-square rounded-lg flex items-center justify-center text-4xl md:text-5xl font-bold transition-all ${
                            revealed[index]
                              ? "bg-card border-2 border-primary/50"
                              : "bg-muted hover:bg-muted/80 cursor-pointer"
                          }`}
                        >
                          {revealed[index] ? symbol : "?"}
                        </button>
                      ))}
                    </div>

                    {!playing && winAmount > 0 && (
                      <div className="text-center mb-4">
                        <p className="text-2xl font-bold text-primary animate-pulse">🎉 WIN: {winAmount} Credits!</p>
                      </div>
                    )}

                    {!playing && winAmount === 0 && revealed.every((r) => r) && (
                      <div className="text-center mb-4">
                        <p className="text-lg text-muted-foreground">No match. Try again!</p>
                      </div>
                    )}

                    {playing && (
                      <div className="text-center">
                        <Button onClick={revealAll} variant="outline">
                          Reveal All
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="text-center">
                <Button size="lg" onClick={handleNewCard} disabled={playing || !isAuthenticated || !credits || credits.credits < CARD_COST}>
                  New Card ({CARD_COST} credits)
                </Button>
              </div>

              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h3 className="text-xl font-bold mb-4 text-center">Prizes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>3x 7️⃣</span>
                    <span className="font-bold text-primary">{CARD_COST * 20}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>3x 💎</span>
                    <span className="font-bold text-primary">{CARD_COST * 15}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>3x ⭐</span>
                    <span className="font-bold text-primary">{CARD_COST * 10}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>3x Any</span>
                    <span className="font-bold text-primary">{CARD_COST * 5}</span>
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
