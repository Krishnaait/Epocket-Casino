import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Coins, Trophy, Gift, Info } from "lucide-react";

export default function HowToPlay() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Play</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete guides for all EPOCKET Social Casino games. Learn the rules, strategies, and winning combinations.
            </p>
          </div>

          {/* Getting Started Section */}
          <Card className="mb-8 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Info className="w-6 h-6" />
                Getting Started
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-background/50 rounded-lg">
                  <Coins className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-bold mb-2">1. Get Free Credits</h3>
                  <p className="text-sm text-muted-foreground">
                    Every new player starts with <strong className="text-primary">1,000 free virtual credits</strong>. No registration required to begin playing immediately.
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <Gift className="w-8 h-8 text-secondary mb-2" />
                  <h3 className="font-bold mb-2">2. Daily Bonuses</h3>
                  <p className="text-sm text-muted-foreground">
                    Claim <strong className="text-secondary">200 bonus credits every day</strong>. Sign in to track your progress and never miss your daily reward.
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <Trophy className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-bold mb-2">3. Play & Win</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose your game, place your virtual bets, and enjoy! If you run out, <strong className="text-primary">reset to 500 credits</strong> anytime.
                  </p>
                </div>
              </div>
              <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-center">
                <p className="text-sm text-destructive font-semibold">
                  ⚠️ Important: Virtual credits have NO real-world value and CANNOT be exchanged for money or prizes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Game Guides */}
          <h2 className="text-3xl font-bold mb-6">Game Guides</h2>
          <Accordion type="single" collapsible className="space-y-4">
            
            {/* Video Poker */}
            <AccordionItem value="poker" className="border-2 border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-2xl font-bold hover:no-underline">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">♠️</span>
                  <span>Texas Hold'em Poker (Video Poker)</span>
                  <Badge variant="secondary" className="ml-2">100 credits per hand</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 pt-4">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Game Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Video Poker is a single-player card game that combines the strategy of traditional poker with the simplicity of slot machines. Your goal is to create the strongest possible 5-card poker hand to win credits based on the paytable.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">How to Play</h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">1</Badge>
                      <div>
                        <strong className="text-foreground">Deal:</strong> Click the "Deal" button to receive your initial 5 cards. This costs 100 virtual credits per hand.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">2</Badge>
                      <div>
                        <strong className="text-foreground">Hold Cards:</strong> Review your hand and click on any cards you want to keep. Selected cards will display "HELD" and will be highlighted. You can hold anywhere from 0 to all 5 cards.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">3</Badge>
                      <div>
                        <strong className="text-foreground">Draw:</strong> Click the "Draw" button to replace all non-held cards with new cards from the deck. This is your final hand.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">4</Badge>
                      <div>
                        <strong className="text-foreground">Win:</strong> Your hand is automatically evaluated. If you have a winning combination (Jacks or Better minimum), you'll receive credits according to the paytable.
                      </div>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Winning Hands & Payouts</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between p-3 bg-primary/10 rounded-lg border border-primary/30">
                      <span className="font-bold">Royal Flush</span>
                      <span className="text-primary font-bold">250x (25,000 credits)</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-3">A, K, Q, J, 10 all of the same suit (e.g., ♠️A ♠️K ♠️Q ♠️J ♠️10)</p>
                    
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span className="font-bold">Four of a Kind</span>
                      <span className="text-primary font-bold">25x (2,500 credits)</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-3">Four cards of the same rank (e.g., 7♠️ 7♥️ 7♦️ 7♣️ K♠️)</p>
                    
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span className="font-bold">Full House</span>
                      <span className="text-primary font-bold">9x (900 credits)</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-3">Three of a kind plus a pair (e.g., Q♠️ Q♥️ Q♦️ 5♣️ 5♠️)</p>
                    
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span className="font-bold">Flush</span>
                      <span className="text-primary font-bold">6x (600 credits)</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-3">Five cards of the same suit, not in sequence (e.g., ♥️2 ♥️5 ♥️9 ♥️J ♥️K)</p>
                    
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span className="font-bold">Straight</span>
                      <span className="text-primary font-bold">4x (400 credits)</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-3">Five cards in sequence, mixed suits (e.g., 5♠️ 6♥️ 7♦️ 8♣️ 9♠️)</p>
                    
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span className="font-bold">Three of a Kind</span>
                      <span className="text-primary font-bold">3x (300 credits)</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-3">Three cards of the same rank (e.g., 9♠️ 9♥️ 9♦️ A♣️ 3♠️)</p>
                    
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span className="font-bold">Two Pair</span>
                      <span className="text-primary font-bold">2x (200 credits)</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-3">Two different pairs (e.g., K♠️ K♥️ 8♦️ 8♣️ 4♠️)</p>
                    
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span className="font-bold">Jacks or Better</span>
                      <span className="text-primary font-bold">1x (100 credits)</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-3">A pair of Jacks, Queens, Kings, or Aces (e.g., J♠️ J♥️ 3♦️ 7♣️ 9♠️)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Strategy Tips</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary">•</span> Always hold a winning hand (Jacks or Better or higher)</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Hold four cards to a Royal Flush or Straight Flush</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Hold three cards to a Royal Flush over a low pair</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Hold a low pair (below Jacks) over drawing to an inside straight</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Never hold a single high card if you have four cards to a flush</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Slots */}
            <AccordionItem value="slots" className="border-2 border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-2xl font-bold hover:no-underline">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">🎰</span>
                  <span>Classic Slots</span>
                  <Badge variant="secondary" className="ml-2">50 credits per spin</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 pt-4">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Game Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Classic Slots is a traditional 3-reel slot machine game featuring colorful symbols. Spin the reels and match symbols to win credits. It's simple, fast-paced, and purely based on luck—no strategy required!
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">How to Play</h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">1</Badge>
                      <div>
                        <strong className="text-foreground">Spin:</strong> Click the "SPIN" button to start the game. Each spin costs 50 virtual credits.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">2</Badge>
                      <div>
                        <strong className="text-foreground">Watch:</strong> The three reels will spin with animated symbols. After about 2 seconds, the reels will stop one by one.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">3</Badge>
                      <div>
                        <strong className="text-foreground">Win:</strong> If the symbols match according to the paytable, you'll automatically receive your winnings. The win amount will be displayed prominently.
                      </div>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Symbols & Paytable</h3>
                  <p className="text-muted-foreground mb-4">Match symbols across all three reels to win. The more valuable the symbol, the bigger the payout:</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/30">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">7️⃣ 7️⃣ 7️⃣</span>
                        <span className="font-bold">Triple Sevens (Jackpot!)</span>
                      </div>
                      <span className="text-primary font-bold text-lg">1,000 credits (20x)</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">💎 💎 💎</span>
                        <span className="font-bold">Triple Diamonds</span>
                      </div>
                      <span className="text-primary font-bold">500 credits (10x)</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">⭐ ⭐ ⭐</span>
                        <span className="font-bold">Triple Stars</span>
                      </div>
                      <span className="text-primary font-bold">400 credits (8x)</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🍇 🍇 🍇</span>
                        <span className="font-bold">Triple Grapes</span>
                      </div>
                      <span className="text-primary font-bold">250 credits (5x)</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🍊 🍊 🍊</span>
                        <span className="font-bold">Triple Oranges</span>
                      </div>
                      <span className="text-primary font-bold">250 credits (5x)</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🍋 🍋 🍋</span>
                        <span className="font-bold">Triple Lemons</span>
                      </div>
                      <span className="text-primary font-bold">250 credits (5x)</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🍒 🍒 🍒</span>
                        <span className="font-bold">Triple Cherries</span>
                      </div>
                      <span className="text-primary font-bold">250 credits (5x)</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg border border-secondary/30">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🍒 🍒 🍋</span>
                        <span className="font-bold">Any Two Matching</span>
                      </div>
                      <span className="text-secondary font-bold">100 credits (2x)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Tips & Fun Facts</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary">•</span> Slots are 100% luck-based—every spin is independent and random</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> The 7️⃣ symbol is the most valuable and rarest to land</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Even matching two symbols gives you double your bet back</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Each spin takes about 2 seconds, perfect for quick entertainment</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Roulette */}
            <AccordionItem value="roulette" className="border-2 border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-2xl font-bold hover:no-underline">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">🎡</span>
                  <span>Roulette</span>
                  <Badge variant="secondary" className="ml-2">Variable betting</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 pt-4">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Game Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Roulette is a classic casino game where you predict where a ball will land on a spinning wheel numbered 0-36. Place bets on specific numbers, colors, or ranges, then watch the wheel spin. The more specific your bet, the higher the payout!
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">How to Play</h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">1</Badge>
                      <div>
                        <strong className="text-foreground">Select Chip Value:</strong> Choose your bet amount from the available chip denominations (10, 25, 50, 100 credits).
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">2</Badge>
                      <div>
                        <strong className="text-foreground">Place Bets:</strong> Click on the betting grid to place your chips. You can place multiple bets on different areas in a single round.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">3</Badge>
                      <div>
                        <strong className="text-foreground">Spin:</strong> Once you're satisfied with your bets, click the "SPIN" button. The wheel will spin and the ball will bounce before landing on a number.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">4</Badge>
                      <div>
                        <strong className="text-foreground">Win:</strong> If the ball lands on a number or color you bet on, you'll receive credits according to the payout multiplier for that bet type.
                      </div>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Bet Types & Payouts</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2 text-foreground">Inside Bets (Higher Risk, Higher Reward)</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between p-3 bg-primary/10 rounded-lg border border-primary/30">
                          <div>
                            <span className="font-bold">Straight Up</span>
                            <p className="text-sm text-muted-foreground">Bet on a single number (0-36)</p>
                          </div>
                          <span className="text-primary font-bold">35:1 (35x)</span>
                        </div>
                        <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                          <div>
                            <span className="font-bold">Split</span>
                            <p className="text-sm text-muted-foreground">Bet on two adjacent numbers</p>
                          </div>
                          <span className="text-primary font-bold">17:1 (17x)</span>
                        </div>
                        <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                          <div>
                            <span className="font-bold">Street</span>
                            <p className="text-sm text-muted-foreground">Bet on a row of three numbers</p>
                          </div>
                          <span className="text-primary font-bold">11:1 (11x)</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2 text-foreground">Outside Bets (Lower Risk, Lower Reward)</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between p-3 bg-secondary/10 rounded-lg border border-secondary/30">
                          <div>
                            <span className="font-bold">Red / Black</span>
                            <p className="text-sm text-muted-foreground">Bet on all red or all black numbers</p>
                          </div>
                          <span className="text-secondary font-bold">1:1 (2x)</span>
                        </div>
                        <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                          <div>
                            <span className="font-bold">Even / Odd</span>
                            <p className="text-sm text-muted-foreground">Bet on all even or all odd numbers</p>
                          </div>
                          <span className="text-secondary font-bold">1:1 (2x)</span>
                        </div>
                        <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                          <div>
                            <span className="font-bold">1-18 / 19-36</span>
                            <p className="text-sm text-muted-foreground">Bet on low (1-18) or high (19-36) numbers</p>
                          </div>
                          <span className="text-secondary font-bold">1:1 (2x)</span>
                        </div>
                        <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                          <div>
                            <span className="font-bold">Dozens</span>
                            <p className="text-sm text-muted-foreground">Bet on 1-12, 13-24, or 25-36</p>
                          </div>
                          <span className="text-secondary font-bold">2:1 (3x)</span>
                        </div>
                        <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                          <div>
                            <span className="font-bold">Columns</span>
                            <p className="text-sm text-muted-foreground">Bet on one of three vertical columns</p>
                          </div>
                          <span className="text-secondary font-bold">2:1 (3x)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Strategy Tips</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary">•</span> Outside bets (Red/Black, Even/Odd) have nearly 50% win chance but lower payouts</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Straight up bets (single numbers) are high risk but offer the biggest 35x payout</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> You can combine multiple bet types in one spin to cover more numbers</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> The green 0 is the "house number"—outside bets lose if the ball lands on 0</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Manage your virtual credits wisely by mixing safe and risky bets</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Scratch Cards */}
            <AccordionItem value="scratch" className="border-2 border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-2xl font-bold hover:no-underline">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">🎫</span>
                  <span>Scratch Cards</span>
                  <Badge variant="secondary" className="ml-2">30 credits per card</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 pt-4">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Game Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Scratch Cards are instant-win games where you reveal hidden symbols by clicking on covered squares. Match three or more identical symbols to win credits instantly. It's quick, exciting, and perfect for players who want immediate results!
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">How to Play</h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">1</Badge>
                      <div>
                        <strong className="text-foreground">Buy a Card:</strong> Click "New Card" to purchase a scratch card for 30 virtual credits. A fresh card with 9 covered squares will appear.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">2</Badge>
                      <div>
                        <strong className="text-foreground">Scratch:</strong> Click on each covered square to reveal the symbol underneath. You can reveal them one by one or click rapidly to uncover multiple squares.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">3</Badge>
                      <div>
                        <strong className="text-foreground">Match Symbols:</strong> As you reveal symbols, look for matching patterns. You need at least 3 identical symbols to win.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Badge className="flex-shrink-0">4</Badge>
                      <div>
                        <strong className="text-foreground">Collect Winnings:</strong> Once all squares are revealed, if you have 3 or more matching symbols, you'll automatically receive your prize credits.
                      </div>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Prize Structure</h3>
                  <p className="text-muted-foreground mb-4">Win credits by matching 3 or more identical symbols:</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/30">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">7️⃣ 7️⃣ 7️⃣</span>
                        <span className="font-bold">Three Sevens (Jackpot!)</span>
                      </div>
                      <span className="text-primary font-bold text-lg">600 credits (20x)</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">💎 💎 💎</span>
                        <span className="font-bold">Three Diamonds</span>
                      </div>
                      <span className="text-primary font-bold">450 credits (15x)</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">⭐ ⭐ ⭐</span>
                        <span className="font-bold">Three Stars</span>
                      </div>
                      <span className="text-primary font-bold">300 credits (10x)</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🍒 🍒 🍒</span>
                        <span className="font-bold">Three Cherries</span>
                      </div>
                      <span className="text-primary font-bold">150 credits (5x)</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🍋 🍋 🍋</span>
                        <span className="font-bold">Three Lemons</span>
                      </div>
                      <span className="text-primary font-bold">150 credits (5x)</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🍊 🍊 🍊</span>
                        <span className="font-bold">Three Oranges</span>
                      </div>
                      <span className="text-primary font-bold">150 credits (5x)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Tips & Fun Facts</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary">•</span> Each card contains 9 symbols randomly distributed across the grid</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> You can win with 3, 4, 5, or even more matching symbols—more matches = bigger wins</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> The 7️⃣ symbol is the rarest and most valuable—landing three is the jackpot!</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> Scratch cards are perfect for quick entertainment between longer games</li>
                    <li className="flex gap-2"><span className="text-primary">•</span> At only 30 credits per card, it's one of the most affordable games to play</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          {/* Credit Management */}
          <Card className="mt-8 border-2 border-secondary/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Coins className="w-6 h-6" />
                Credit Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Gift className="w-5 h-5 text-primary" />
                    Getting Credits
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex gap-2"><span className="text-primary">✓</span> <strong>1,000 starting credits</strong> for all new players</li>
                    <li className="flex gap-2"><span className="text-primary">✓</span> <strong>200 daily bonus</strong> credits (claim once per day)</li>
                    <li className="flex gap-2"><span className="text-primary">✓</span> <strong>500 credit reset</strong> button when balance reaches zero</li>
                    <li className="flex gap-2"><span className="text-primary">✓</span> Win credits by playing games and hitting winning combinations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-secondary" />
                    Maximizing Your Credits
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex gap-2"><span className="text-secondary">•</span> Sign in daily to claim your 200 bonus credits</li>
                    <li className="flex gap-2"><span className="text-secondary">•</span> Start with lower-cost games like Scratch Cards (30 credits)</li>
                    <li className="flex gap-2"><span className="text-secondary">•</span> Mix high-risk and low-risk bets in Roulette for balanced play</li>
                    <li className="flex gap-2"><span className="text-secondary">•</span> Use the reset button strategically—don't be afraid to start fresh!</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-center mt-6">
                <p className="text-sm text-destructive font-semibold">
                  ⚠️ Remember: This is for entertainment only. Virtual credits have NO real value and CANNOT be converted to cash or prizes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Need Help */}
          <Card className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Need More Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                If you have questions about game rules, credit management, or responsible gaming, check out our <strong className="text-foreground">FAQ page</strong> for detailed answers.
              </p>
              <p>
                For technical support or general inquiries, visit our <strong className="text-foreground">Contact page</strong> to get in touch with our team.
              </p>
              <p className="text-sm pt-4">
                <strong className="text-foreground">Remember:</strong> EPOCKET is a free-to-play social casino for entertainment purposes only. All games use virtual coins with no real-world value. Play responsibly and have fun!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
