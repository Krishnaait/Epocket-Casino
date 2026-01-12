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

const SUITS = ["♠️", "♥️", "♣️", "♦️"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const HAND_COST = 100;

type CardType = { rank: string; suit: string };

export default function PokerGame() {
  const { isAuthenticated } = useAuth();
  const { data: credits, refetch: refetchCredits } = trpc.credits.get.useQuery(undefined, {
    enabled: isAuthenticated,
  });
  const recordPlay = trpc.games.recordPlay.useMutation();

  const [hand, setHand] = useState<CardType[]>([]);
  const [held, setHeld] = useState<boolean[]>([]);
  const [playing, setPlaying] = useState(false);
  const [dealt, setDealt] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [winAmount, setWinAmount] = useState(0);
  const [handName, setHandName] = useState("");

  const createDeck = (): CardType[] => {
    const deck: CardType[] = [];
    SUITS.forEach((suit) => {
      RANKS.forEach((rank) => {
        deck.push({ rank, suit });
      });
    });
    return deck.sort(() => Math.random() - 0.5);
  };

  const evaluateHand = (cards: CardType[]) => {
    const rankCounts: Record<string, number> = {};
    const suitCounts: Record<string, number> = {};
    
    cards.forEach((card) => {
      rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
      suitCounts[card.suit] = (suitCounts[card.suit] || 0) + 1;
    });

    const counts = Object.values(rankCounts).sort((a, b) => b - a);
    const isFlush = Object.values(suitCounts).some((count) => count === 5);
    const rankValues = cards.map((c) => RANKS.indexOf(c.rank)).sort((a, b) => a - b);
    const isStraight = rankValues.every((val, i) => i === 0 || val === rankValues[i - 1] + 1);

    if (isFlush && isStraight) return { name: "Royal Flush", multiplier: 250 };
    if (counts[0] === 4) return { name: "Four of a Kind", multiplier: 25 };
    if (counts[0] === 3 && counts[1] === 2) return { name: "Full House", multiplier: 9 };
    if (isFlush) return { name: "Flush", multiplier: 6 };
    if (isStraight) return { name: "Straight", multiplier: 4 };
    if (counts[0] === 3) return { name: "Three of a Kind", multiplier: 3 };
    if (counts[0] === 2 && counts[1] === 2) return { name: "Two Pair", multiplier: 2 };
    if (counts[0] === 2) {
      const pairRank = Object.keys(rankCounts).find((r) => rankCounts[r] === 2);
      if (pairRank && ["J", "Q", "K", "A"].includes(pairRank)) {
        return { name: "Jacks or Better", multiplier: 1 };
      }
    }
    return { name: "No Win", multiplier: 0 };
  };

  const handleDeal = () => {
    if (!isAuthenticated) {
      toast.error("Please sign in to play");
      return;
    }

    if (!credits || credits.credits < HAND_COST) {
      toast.error("Not enough credits!");
      return;
    }

    const deck = createDeck();
    const newHand = deck.slice(0, 5);
    setHand(newHand);
    setHeld(new Array(5).fill(false));
    setPlaying(true);
    setDealt(true);
    setWinAmount(0);
    setHandName("");
  };

  const toggleHold = (index: number) => {
    if (!playing || !dealt) return;
    const newHeld = [...held];
    newHeld[index] = !newHeld[index];
    setHeld(newHeld);
  };

  const handleDraw = async () => {
    if (!playing) return;

    const deck = createDeck();
    const newHand = [...hand];
    let deckIndex = 0;

    for (let i = 0; i < 5; i++) {
      if (!held[i]) {
        newHand[i] = deck[deckIndex++];
      }
    }

    setHand(newHand);
    setDealt(false);

    const result = evaluateHand(newHand);
    const win = HAND_COST * result.multiplier;
    setWinAmount(win);
    setHandName(result.name);

    try {
      await recordPlay.mutateAsync({
        gameType: "poker",
        creditsWagered: HAND_COST,
        creditsWon: win,
        result: win > 0 ? "win" : "loss",
      });

      await refetchCredits();

      if (win > 0) {
        toast.success(`${result.name}! You won ${win} credits!`);
      } else {
        toast.info("No winning hand. Try again!");
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
        <div className="container max-w-5xl">
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
              <CardTitle className="text-center text-3xl">♠️ Video Poker</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 border-2 border-primary/30">
                {hand.length === 0 ? (
                  <div className="text-center space-y-4 py-12">
                    <p className="text-xl text-muted-foreground">Click "Deal" to start!</p>
                    <p className="text-sm text-muted-foreground">Cost: {HAND_COST} credits per hand</p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-center gap-2 md:gap-4 mb-6">
                      {hand.map((card, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <button
                            onClick={() => toggleHold(index)}
                            disabled={!playing || !dealt}
                            className={`w-16 h-24 md:w-20 md:h-32 rounded-lg flex flex-col items-center justify-center text-2xl md:text-3xl font-bold border-2 transition-all ${
                              held[index]
                                ? "bg-primary/20 border-primary"
                                : "bg-card border-border hover:border-primary/50"
                            }`}
                          >
                            <span>{card.rank}</span>
                            <span>{card.suit}</span>
                          </button>
                          {held[index] && playing && (
                            <span className="mt-2 text-sm font-bold text-primary">HELD</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {handName && !playing && (
                      <div className="text-center mb-4">
                        {winAmount > 0 ? (
                          <p className="text-2xl font-bold text-primary animate-pulse">
                            {handName} - Won {winAmount} Credits!
                          </p>
                        ) : (
                          <p className="text-lg text-muted-foreground">{handName}</p>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="text-center space-y-4">
                {!playing && (
                  <Button size="lg" onClick={handleDeal} disabled={!isAuthenticated || !credits || credits.credits < HAND_COST}>
                    Deal ({HAND_COST} credits)
                  </Button>
                )}
                {playing && dealt && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Click cards to hold, then draw</p>
                    <Button size="lg" onClick={handleDraw}>
                      Draw
                    </Button>
                  </div>
                )}
              </div>

              <div className="bg-card/50 rounded-lg p-6 border border-border">
                <h3 className="text-xl font-bold mb-4 text-center">Paytable</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>Royal Flush</span>
                    <span className="font-bold text-primary">{HAND_COST * 250}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>Four of a Kind</span>
                    <span className="font-bold text-primary">{HAND_COST * 25}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>Full House</span>
                    <span className="font-bold text-primary">{HAND_COST * 9}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>Flush</span>
                    <span className="font-bold text-primary">{HAND_COST * 6}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>Straight</span>
                    <span className="font-bold text-primary">{HAND_COST * 4}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>Three of a Kind</span>
                    <span className="font-bold text-primary">{HAND_COST * 3}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>Two Pair</span>
                    <span className="font-bold text-primary">{HAND_COST * 2}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-background/50 rounded">
                    <span>Jacks or Better</span>
                    <span className="font-bold text-primary">{HAND_COST * 1}</span>
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
