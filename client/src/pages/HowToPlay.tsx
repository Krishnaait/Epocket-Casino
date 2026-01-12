import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HowToPlay() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">How to Play</h1>
            <p className="text-xl text-muted-foreground">Learn the rules of our casino games</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="poker" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold">♠️ Video Poker</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p><strong>Objective:</strong> Create the best 5-card poker hand.</p>
                <p><strong>How to Play:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Click "Deal" to receive 5 cards (costs 100 credits)</li>
                  <li>Click cards you want to keep (they will be marked "HELD")</li>
                  <li>Click "Draw" to replace non-held cards</li>
                  <li>Win based on your final hand strength</li>
                </ol>
                <p><strong>Winning Hands:</strong> Royal Flush (250x), Four of a Kind (25x), Full House (9x), Flush (6x), Straight (4x), Three of a Kind (3x), Two Pair (2x), Jacks or Better (1x)</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="slots" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold">🎰 Slots</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p><strong>Objective:</strong> Match symbols across the reels.</p>
                <p><strong>How to Play:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Click "SPIN" to play (costs 50 credits per spin)</li>
                  <li>Watch the reels spin and stop</li>
                  <li>Win if symbols match according to the paytable</li>
                </ol>
                <p><strong>Payouts:</strong> 7️⃣7️⃣7️⃣ = 1000 credits, 💎💎💎 = 500 credits, ⭐⭐⭐ = 400 credits, Any 3 Match = 250 credits, Any 2 Match = 100 credits</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="roulette" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold">🎡 Roulette</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p><strong>Objective:</strong> Predict where the ball will land.</p>
                <p><strong>How to Play:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Place bets on colors, numbers, or ranges</li>
                  <li>Click "SPIN" to spin the wheel</li>
                  <li>Win if the ball lands on your bet</li>
                </ol>
                <p><strong>Bet Types:</strong> Single Number (35x), Red/Black (2x), Even/Odd (2x), 1-18/19-36 (2x)</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="scratch" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold">🎫 Scratch Cards</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p><strong>Objective:</strong> Reveal matching symbols.</p>
                <p><strong>How to Play:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Click "New Card" to buy a card (costs 30 credits)</li>
                  <li>Click squares to reveal symbols</li>
                  <li>Win if you reveal 3 or more matching symbols</li>
                </ol>
                <p><strong>Prizes:</strong> 3x 7️⃣ = 600 credits, 3x 💎 = 450 credits, 3x ⭐ = 300 credits, 3x Any = 150 credits</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>General Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>• Start with 1000 free credits</p>
              <p>• Claim 200 bonus credits daily</p>
              <p>• Reset to 500 credits if you run out</p>
              <p>• No registration required to play</p>
              <p>• Sign in to save progress and unlock achievements</p>
              <p className="text-destructive font-semibold pt-4">Remember: This is for entertainment only. Virtual coins have no real value.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
