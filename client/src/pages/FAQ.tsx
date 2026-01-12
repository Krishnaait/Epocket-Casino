import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">Find answers to common questions</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q1" className="border border-border rounded-lg px-6">
              <AccordionTrigger>Is this real money gambling?</AccordionTrigger>
              <AccordionContent>
                No! EPOCKET is a 100% free-to-play social casino. We use virtual coins that have no real-world value. You cannot deposit money, and you cannot withdraw winnings. It's purely for entertainment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="border border-border rounded-lg px-6">
              <AccordionTrigger>Do I need to register to play?</AccordionTrigger>
              <AccordionContent>
                No registration is required to start playing! You can play as a guest with 1000 free credits. However, creating an account lets you save your progress, unlock achievements, and appear on the leaderboard across devices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="border border-border rounded-lg px-6">
              <AccordionTrigger>How do I get more credits?</AccordionTrigger>
              <AccordionContent>
                You start with 1000 free credits. You can claim 200 bonus credits daily by signing in. If you run out of credits, you can reset your balance to 500 credits anytime. Everything is completely free!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="border border-border rounded-lg px-6">
              <AccordionTrigger>Can I exchange virtual coins for real money?</AccordionTrigger>
              <AccordionContent>
                No. Virtual coins on EPOCKET have zero real-world value and cannot be exchanged for money, prizes, or anything else. They exist solely for gameplay and entertainment purposes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="border border-border rounded-lg px-6">
              <AccordionTrigger>Are the games fair?</AccordionTrigger>
              <AccordionContent>
                Yes! All our games use certified random number generators to ensure fair outcomes. We do not manipulate results, and every player has an equal chance based on the game rules.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6" className="border border-border rounded-lg px-6">
              <AccordionTrigger>Is this website safe and legal?</AccordionTrigger>
              <AccordionContent>
                Yes! Since we don't involve real money, deposits, or withdrawals, EPOCKET is a legal social casino platform. We're committed to responsible gaming and require all players to be 18+.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7" className="border border-border rounded-lg px-6">
              <AccordionTrigger>What games are available?</AccordionTrigger>
              <AccordionContent>
                We currently offer Video Poker, Classic Slots, Roulette, and Scratch Cards. All games are free to play with virtual coins. More games are coming soon!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8" className="border border-border rounded-lg px-6">
              <AccordionTrigger>How do achievements work?</AccordionTrigger>
              <AccordionContent>
                Achievements are badges you unlock by playing games and reaching milestones. They award points that contribute to your leaderboard ranking. Sign in to track your achievements!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9" className="border border-border rounded-lg px-6">
              <AccordionTrigger>Can I play on mobile?</AccordionTrigger>
              <AccordionContent>
                Yes! EPOCKET is fully responsive and works on laptops, tablets, and mobile devices. Play anywhere, anytime!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10" className="border border-border rounded-lg px-6">
              <AccordionTrigger>Who can I contact for support?</AccordionTrigger>
              <AccordionContent>
                For any questions or concerns, please visit our Contact page or email us. We're here to help!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
}
