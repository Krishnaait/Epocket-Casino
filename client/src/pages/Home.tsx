import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";
import { Sparkles, Shield, Trophy, Gift, Coins, Play, Heart, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AgeGate />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background" style={{ backgroundImage: 'url(/banner-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0 bg-background/40" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-semibold mb-4">
                <Shield className="w-4 h-4 mr-2" />
                No Real Money - Just for Fun
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Play Free Social Casino Games
              </h1>
              <p className="text-xl text-muted-foreground">
                Experience the thrill of casino games with virtual coins. No deposits, no withdrawals, pure entertainment!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/games" className="flex items-center">
                    <Play className="w-5 h-5 mr-2" />
                    Start Playing Free
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="/how-to-play">
                    Learn How to Play
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">1000 Free Credits</strong> to start • <strong className="text-secondary">200 Daily Bonus</strong> • No Registration Required
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer Banner */}
        <section className="py-6 bg-destructive/10 border-y border-destructive/20">
          <div className="container">
            <p className="text-center text-sm md:text-base font-semibold text-destructive">
              ⚠️ For Entertainment Purposes Only | Virtual Coins Have No Real-World Value | 18+ Only
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Play at EPOCKET?</h2>
              <p className="text-lg text-muted-foreground">100% free, safe, and fun social casino experience</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <Sparkles className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Free to Play</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Start with 1000 free credits. No deposits, no purchases, no hidden costs.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <Gift className="w-12 h-12 text-secondary mb-4" />
                  <CardTitle>Daily Bonuses</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Claim 200 free credits every day. Never run out of fun!
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <Trophy className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Unlock badges and climb the leaderboard. Compete for bragging rights!
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <Shield className="w-12 h-12 text-secondary mb-4" />
                  <CardTitle>Safe & Legal</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    No real money involved. Play responsibly for entertainment only.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Games Showcase */}
        <section className="py-20 bg-card/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Games</h2>
              <p className="text-lg text-muted-foreground">Choose your favorite and start playing instantly</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <div className="text-6xl mb-4">♠️</div>
                  <CardTitle>Texas Hold'em Poker</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Test your skills in classic poker. Spin and win virtual coins!
                  </CardDescription>
                  <Button asChild className="w-full">
                    <Link href="/play/poker">
                      Play Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <div className="text-6xl mb-4">🎰</div>
                  <CardTitle>Classic Slots</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Spin the reels and watch the coins roll in. Pure luck and fun!
                  </CardDescription>
                  <Button asChild className="w-full">
                    <Link href="/play/slots">
                      Play Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <div className="text-6xl mb-4">🎡</div>
                  <CardTitle>Roulette</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Place your virtual coins and spin the wheel. Where will it land?
                  </CardDescription>
                  <Button asChild className="w-full">
                    <Link href="/play/roulette">
                      Play Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <div className="text-6xl mb-4">🎫</div>
                  <CardTitle>Scratch Cards</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Scratch and reveal instant wins. Quick and exciting gameplay!
                  </CardDescription>
                  <Button asChild className="w-full">
                    <Link href="/play/scratch">
                      Play Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Get started in three simple steps</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10 border-2 border-primary text-primary text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Get Free Credits</h3>
                <p className="text-muted-foreground">
                  Start with 1000 free virtual coins. No sign-up required to play!
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-secondary/10 border-2 border-secondary text-secondary text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Choose Your Game</h3>
                <p className="text-muted-foreground">
                  Pick from Poker, Slots, Roulette, or Scratch Cards and start playing.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10 border-2 border-primary text-primary text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Win & Have Fun</h3>
                <p className="text-muted-foreground">
                  Play for fun, unlock achievements, and climb the leaderboard!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card/50">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger>Is this real money gambling?</AccordionTrigger>
                <AccordionContent>
                  No! EPOCKET is a 100% free-to-play social casino. We use virtual coins that have no real-world value. You cannot deposit money, and you cannot withdraw winnings. It's purely for entertainment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger>Do I need to register to play?</AccordionTrigger>
                <AccordionContent>
                  No registration is required to start playing! You can play as a guest with 1000 free credits. However, creating an account lets you save your progress, unlock achievements, and appear on the leaderboard.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger>How do I get more credits?</AccordionTrigger>
                <AccordionContent>
                  You start with 1000 free credits. You can claim 200 bonus credits daily. If you run out, you can reset your balance to 500 credits anytime. It's completely free!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                <AccordionTrigger>Can I exchange virtual coins for real money?</AccordionTrigger>
                <AccordionContent>
                  No. Virtual coins on EPOCKET have zero real-world value and cannot be exchanged for money, prizes, or anything else. They exist solely for gameplay and entertainment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                <AccordionTrigger>Is this website safe and legal?</AccordionTrigger>
                <AccordionContent>
                  Yes! Since we don't involve real money, deposits, or withdrawals, EPOCKET is a legal social casino platform. We're committed to responsible gaming and require all players to be 18+.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Shield className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Fair Play Gaming</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All games use certified random number generators to ensure fair outcomes. No manipulation, just pure chance and skill.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Heart className="w-10 h-10 text-destructive mb-2" />
                  <CardTitle>Responsible Gaming</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We promote healthy gaming habits. Set your own limits, take breaks, and remember - it's just for fun!
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle2 className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Google Ads Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We use appropriate language like "Play," "Spin," and "Virtual Coins" - never "Bet," "Wager," or "Real Money."
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Coins className="w-10 h-10 text-secondary mb-2" />
                  <CardTitle>No Hidden Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    100% free forever. No in-app purchases, no premium features, no payment methods. Just pure entertainment.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Responsible Play Section */}
        <section className="py-20 bg-destructive/10 border-y border-destructive/20">
          <div className="container max-w-3xl text-center space-y-6">
            <Heart className="w-16 h-16 text-destructive mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">Play Responsibly</h2>
            <p className="text-lg text-muted-foreground">
              EPOCKET is designed for entertainment only. While our games are free and don't involve real money, we encourage all players to maintain healthy gaming habits.
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Take regular breaks during gameplay</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Remember that virtual coins have no real value</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Never treat this as a way to earn money</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>If gaming stops being fun, take a break</span>
              </li>
            </ul>
            <Button asChild variant="outline" size="lg">
              <Link href="/responsible-gaming">
                Learn More About Responsible Gaming
              </Link>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container max-w-3xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Play?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of players enjoying free social casino games. No risk, no deposits, just pure fun!
            </p>
            <Button asChild size="lg" className="text-lg px-12">
              <Link href="/games" className="flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Start Playing Now
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              <strong className="text-destructive">Remember:</strong> This is not real money gambling. Virtual coins have no real-world value.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
