import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Coins, Shield, Trophy, Gamepad2, Users } from "lucide-react";

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about EPOCKET Social Casino. Find detailed answers to common questions about our games, credits, accounts, and policies.
            </p>
          </div>

          {/* General Questions */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">General Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="g1" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">What is EPOCKET Social Casino?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  EPOCKET is a <strong className="text-foreground">100% free-to-play social casino platform</strong> designed purely for entertainment. We offer classic casino-style games (Poker, Slots, Roulette, Scratch Cards) that use virtual coins with absolutely no real-world monetary value. Unlike traditional online casinos, you cannot deposit real money, place real bets, or withdraw winnings. Everything is virtual, free, and designed for fun. Think of it as a social gaming experience where you can enjoy the excitement of casino games without any financial risk.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="g2" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Is this real money gambling?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <strong className="text-destructive">No, absolutely not.</strong> EPOCKET is not real money gambling in any way, shape, or form. We use virtual coins that exist only within the platform and have <strong className="text-foreground">zero real-world value</strong>. You cannot:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Deposit or spend real money</li>
                    <li>• Win real money or prizes</li>
                    <li>• Withdraw or cash out virtual coins</li>
                    <li>• Exchange virtual coins for anything of value</li>
                    <li>• Buy or sell virtual coins to other players</li>
                  </ul>
                  <p className="mt-2">
                    This is purely a <strong className="text-foreground">free entertainment platform</strong> with no financial transactions whatsoever.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="g3" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Is EPOCKET legal and safe?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! EPOCKET is completely legal because we do not involve real money, deposits, withdrawals, or any form of actual gambling. We operate as a <strong className="text-foreground">social gaming platform</strong>, which is legal in most jurisdictions worldwide. Your safety is our priority:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• <strong className="text-foreground">No financial risk:</strong> You never spend real money</li>
                    <li>• <strong className="text-foreground">Age verification:</strong> 18+ requirement enforced at entry</li>
                    <li>• <strong className="text-foreground">Data protection:</strong> Your personal information is secure</li>
                    <li>• <strong className="text-foreground">Responsible gaming:</strong> Resources and guidelines provided</li>
                    <li>• <strong className="text-foreground">Transparent operations:</strong> Clear terms and disclaimers on every page</li>
                  </ul>
                  <p className="mt-2">
                    We comply with all applicable laws and maintain the highest standards of online safety and responsible gaming practices.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="g4" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Who can play on EPOCKET?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  EPOCKET is available to anyone who is <strong className="text-foreground">18 years of age or older</strong>. This age restriction applies regardless of the fact that no real money is involved. We enforce this policy to:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Comply with legal requirements in various jurisdictions</li>
                    <li>• Protect minors from exposure to casino-style gaming</li>
                    <li>• Prevent normalization of gambling behaviors in young people</li>
                    <li>• Follow responsible gaming industry best practices</li>
                  </ul>
                  <p className="mt-2">
                    If you are under 18, you must leave this website immediately. Parents and guardians should monitor their children's internet usage.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="g5" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">How is EPOCKET different from real online casinos?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  The key differences are fundamental:
                  <div className="mt-3 grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-primary/5 rounded border border-primary/20">
                      <p className="font-bold mb-2 text-foreground">EPOCKET (Social Casino)</p>
                      <ul className="text-sm space-y-1">
                        <li>✓ 100% free to play</li>
                        <li>✓ Virtual coins only</li>
                        <li>✓ No deposits or withdrawals</li>
                        <li>✓ No real money involved</li>
                        <li>✓ Pure entertainment</li>
                        <li>✓ No financial risk</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-destructive/5 rounded border border-destructive/20">
                      <p className="font-bold mb-2 text-foreground">Real Online Casinos</p>
                      <ul className="text-sm space-y-1">
                        <li>✗ Requires real money deposits</li>
                        <li>✗ Real cash bets and winnings</li>
                        <li>✗ Withdrawal of real money</li>
                        <li>✗ Financial transactions</li>
                        <li>✗ Gambling for profit</li>
                        <li>✗ Risk of financial loss</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3">
                    EPOCKET is designed for <strong className="text-foreground">entertainment and social competition</strong>, not financial gain. You're playing for fun, achievements, and leaderboard rankings—never for money.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Account & Credits */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Coins className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Account & Credits</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="a1" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Do I need to register or create an account?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">No, registration is optional!</strong> You can start playing immediately as a guest with no sign-up required. Guest players receive 1000 free starting credits and can play all games instantly. However, creating an account offers several benefits:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• <strong className="text-foreground">Save your progress:</strong> Your credits, achievements, and game history are saved</li>
                    <li>• <strong className="text-foreground">Cross-device sync:</strong> Access your account from any device</li>
                    <li>• <strong className="text-foreground">Daily bonuses:</strong> Claim 200 free credits every day</li>
                    <li>• <strong className="text-foreground">Leaderboard:</strong> Appear on rankings and compete with others</li>
                    <li>• <strong className="text-foreground">Achievements:</strong> Unlock badges and track milestones</li>
                  </ul>
                  <p className="mt-2">
                    Guest accounts use browser localStorage, so your progress is tied to that specific device and browser. Creating an account ensures you never lose your progress.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="a2" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">How do I get virtual credits?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  There are several ways to get free virtual credits on EPOCKET:
                  <div className="mt-3 space-y-3">
                    <div className="p-3 bg-primary/5 rounded border border-primary/20">
                      <p className="font-bold mb-1 text-foreground">1. Starting Credits (1,000 coins)</p>
                      <p className="text-sm">Every new player—guest or registered—starts with 1,000 free virtual credits immediately upon entering the platform.</p>
                    </div>
                    <div className="p-3 bg-secondary/5 rounded border border-secondary/20">
                      <p className="font-bold mb-1 text-foreground">2. Daily Bonus (200 coins)</p>
                      <p className="text-sm">Sign in daily to claim 200 bonus credits. This resets every 24 hours. Registered users can claim this across devices.</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded border border-primary/20">
                      <p className="font-bold mb-1 text-foreground">3. Reset Button (500 coins)</p>
                      <p className="text-sm">If your balance reaches zero, click the reset button to instantly receive 500 credits. You can do this as many times as you want—it's unlimited!</p>
                    </div>
                    <div className="p-3 bg-secondary/5 rounded border border-secondary/20">
                      <p className="font-bold mb-1 text-foreground">4. Winning Games</p>
                      <p className="text-sm">Play games and hit winning combinations to earn more virtual credits. Different games have different payout rates and strategies.</p>
                    </div>
                  </div>
                  <p className="mt-3 font-semibold text-foreground">
                    Remember: You never need to spend real money. Everything is 100% free!
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="a3" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Can I buy more credits with real money?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <strong className="text-destructive">No, absolutely not.</strong> EPOCKET does not accept any form of payment or real money transactions. You cannot:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Purchase virtual credits with real money</li>
                    <li>• Buy premium accounts or subscriptions</li>
                    <li>• Pay for in-game advantages or power-ups</li>
                    <li>• Make any financial transactions whatsoever</li>
                  </ul>
                  <p className="mt-2">
                    If anyone asks you for money claiming it's related to EPOCKET, <strong className="text-destructive">it's a scam</strong>. Report it immediately. Our platform is entirely free, and we will never ask for payment information.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="a4" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Can I exchange or sell my virtual credits?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <strong className="text-destructive">No.</strong> Virtual credits on EPOCKET have <strong className="text-foreground">absolutely zero real-world value</strong> and cannot be:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Exchanged for real money</li>
                    <li>• Converted to cash or prizes</li>
                    <li>• Sold or traded to other players</li>
                    <li>• Transferred between accounts</li>
                    <li>• Redeemed for goods or services</li>
                  </ul>
                  <p className="mt-2">
                    Virtual credits exist <strong className="text-foreground">only for gameplay and entertainment</strong> within the EPOCKET platform. Any attempt to buy, sell, or trade credits violates our Terms of Service and may result in account suspension.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="a5" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">What happens if I run out of credits?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Don't worry—you can never truly run out! If your balance reaches zero, you have several options:
                  <ul className="mt-2 space-y-2 ml-4">
                    <li>• <strong className="text-foreground">Use the Reset Button:</strong> Instantly receive 500 free credits. You can do this unlimited times.</li>
                    <li>• <strong className="text-foreground">Claim Daily Bonus:</strong> If you haven't claimed your 200 daily credits yet, do so now.</li>
                    <li>• <strong className="text-foreground">Come Back Tomorrow:</strong> Your daily bonus resets every 24 hours for another 200 credits.</li>
                  </ul>
                  <p className="mt-2">
                    There's no penalty for running out of credits, and you'll never be locked out of games. EPOCKET is designed to be <strong className="text-foreground">always free and always accessible</strong>.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="a6" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">How do I claim my daily bonus?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Claiming your daily 200 credit bonus is simple:
                  <ol className="mt-2 space-y-2 ml-4">
                    <li><strong className="text-foreground">1. Sign in:</strong> You must have a registered account (not guest) to claim daily bonuses.</li>
                    <li><strong className="text-foreground">2. Look for the notification:</strong> When your bonus is available, you'll see a notification in the header or on your account page.</li>
                    <li><strong className="text-foreground">3. Click "Claim Bonus":</strong> The 200 credits are instantly added to your balance.</li>
                    <li><strong className="text-foreground">4. Come back tomorrow:</strong> Your bonus resets every 24 hours from the time you last claimed it.</li>
                  </ol>
                  <p className="mt-2">
                    Pro tip: Make it a habit to sign in daily to maximize your free credits!
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Games & Gameplay */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Games & Gameplay</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="gm1" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">What games are available on EPOCKET?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  EPOCKET currently offers four classic casino-style games, all free to play:
                  <div className="mt-3 space-y-3">
                    <div className="p-3 bg-primary/5 rounded border border-primary/20">
                      <p className="font-bold mb-1 text-foreground">🃏 Video Poker (Texas Hold'em)</p>
                      <p className="text-sm">Classic poker gameplay with hand rankings. Build the best five-card hand to win. Cost: 50 credits per hand.</p>
                    </div>
                    <div className="p-3 bg-secondary/5 rounded border border-secondary/20">
                      <p className="font-bold mb-1 text-foreground">🎰 Classic Slots</p>
                      <p className="text-sm">Three-reel slot machine with symbols like 7s, bars, cherries, and diamonds. Match symbols to win big! Cost: 20 credits per spin.</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded border border-primary/20">
                      <p className="font-bold mb-1 text-foreground">🎡 Roulette</p>
                      <p className="text-sm">European-style roulette with a full betting grid. Bet on numbers, colors, odds/evens, and more. Flexible betting from 10-100 credits.</p>
                    </div>
                    <div className="p-3 bg-secondary/5 rounded border border-secondary/20">
                      <p className="font-bold mb-1 text-foreground">🎫 Scratch Cards</p>
                      <p className="text-sm">Instant-win scratch cards with hidden prizes. Reveal three matching symbols to win. Cost: 30 credits per card.</p>
                    </div>
                  </div>
                  <p className="mt-3 font-semibold text-foreground">
                    More games are coming soon! Check back regularly for updates.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gm2" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Are the games fair? How do they work?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, all EPOCKET games are <strong className="text-foreground">100% fair and use certified random number generators (RNG)</strong>. Here's how we ensure fairness:
                  <ul className="mt-2 space-y-2 ml-4">
                    <li>• <strong className="text-foreground">Random outcomes:</strong> Every spin, deal, or draw uses cryptographically secure randomization</li>
                    <li>• <strong className="text-foreground">No manipulation:</strong> We do not alter results based on your balance, history, or any other factor</li>
                    <li>• <strong className="text-foreground">Equal odds:</strong> Every player has the same probability of winning based on game rules</li>
                    <li>• <strong className="text-foreground">Transparent rules:</strong> Paytables, odds, and game mechanics are clearly explained in the How to Play guide</li>
                  </ul>
                  <p className="mt-2">
                    Since there's no real money involved, we have no incentive to manipulate outcomes. Our goal is to provide <strong className="text-foreground">authentic, entertaining casino experiences</strong> with fair gameplay.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gm3" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">How do I learn to play each game?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We provide comprehensive guides for every game:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Visit the <strong className="text-foreground">How to Play</strong> page for detailed rules, strategies, and paytables</li>
                    <li>• Each game page includes quick instructions and tips</li>
                    <li>• Hover over or tap game elements for tooltips and explanations</li>
                    <li>• Check the <strong className="text-foreground">FAQ</strong> for specific questions</li>
                  </ul>
                  <p className="mt-2">
                    Since everything is free, feel free to experiment! There's no financial risk, so you can learn by playing and trying different strategies.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gm4" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Can I play on mobile devices?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Yes!</strong> EPOCKET is fully responsive and optimized for all devices:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• <strong className="text-foreground">Mobile phones:</strong> iOS and Android browsers (Chrome, Safari, Firefox)</li>
                    <li>• <strong className="text-foreground">Tablets:</strong> iPad, Android tablets, and other devices</li>
                    <li>• <strong className="text-foreground">Laptops & Desktops:</strong> All modern browsers on Windows, Mac, and Linux</li>
                  </ul>
                  <p className="mt-2">
                    The interface adapts to your screen size automatically. If you create an account, your progress syncs across all devices, so you can start playing on your phone and continue on your laptop later.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gm5" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Do games have sound effects? Can I turn them off?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, all games include optional sound effects to enhance the casino atmosphere. You can control sound settings:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Each game has a sound toggle button (usually in the top-right corner)</li>
                    <li>• Click or tap the sound icon to mute/unmute</li>
                    <li>• Your preference is saved for future sessions</li>
                  </ul>
                  <p className="mt-2">
                    Sound is off by default to respect your browsing experience. Turn it on if you want the full casino ambiance!
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gm6" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">What's the best strategy to win more credits?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  While all games use random outcomes, here are some tips to maximize your virtual credits:
                  <ul className="mt-2 space-y-2 ml-4">
                    <li>• <strong className="text-foreground">Learn the rules:</strong> Understanding paytables and odds helps you make smarter decisions</li>
                    <li>• <strong className="text-foreground">Start small:</strong> Begin with lower-cost games like Scratch Cards (30 credits) to stretch your balance</li>
                    <li>• <strong className="text-foreground">Mix strategies:</strong> In Roulette, balance high-risk bets (single numbers) with safer bets (red/black)</li>
                    <li>• <strong className="text-foreground">Know when to stop:</strong> If you're on a losing streak, take a break or try a different game</li>
                    <li>• <strong className="text-foreground">Claim daily bonuses:</strong> Sign in every day for 200 free credits</li>
                  </ul>
                  <p className="mt-2">
                    Remember: Since credits are free and unlimited (via reset button), the goal is <strong className="text-foreground">fun and entertainment</strong>, not accumulating virtual wealth!
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Achievements & Leaderboard */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Achievements & Leaderboard</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="al1" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">How do achievements work?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Achievements are <strong className="text-foreground">badges you unlock by reaching milestones</strong> while playing games. Each achievement awards points that contribute to your leaderboard ranking. Examples include:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• <strong className="text-foreground">First Spin:</strong> Play your first slot machine game</li>
                    <li>• <strong className="text-foreground">Big Winner:</strong> Win 500+ credits in a single game</li>
                    <li>• <strong className="text-foreground">Lucky Streak:</strong> Win 5 games in a row</li>
                    <li>• <strong className="text-foreground">High Roller:</strong> Accumulate 10,000 total credits</li>
                    <li>• <strong className="text-foreground">Daily Devotee:</strong> Claim daily bonuses 7 days in a row</li>
                  </ul>
                  <p className="mt-2">
                    To track achievements, you must have a registered account. Visit the <strong className="text-foreground">Achievements</strong> page to see your progress and which badges you've unlocked.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="al2" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">What is the leaderboard and how does it work?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  The leaderboard is a <strong className="text-foreground">ranking system that shows top players</strong> based on achievement points and total wins. It's a way to compete socially with other EPOCKET users. Key features:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• <strong className="text-foreground">Points-based:</strong> Earn points by unlocking achievements and winning games</li>
                    <li>• <strong className="text-foreground">Public rankings:</strong> See where you stand compared to other players</li>
                    <li>• <strong className="text-foreground">No prizes:</strong> Leaderboard is for bragging rights and social competition only</li>
                    <li>• <strong className="text-foreground">Updated live:</strong> Rankings refresh in real-time as players earn points</li>
                  </ul>
                  <p className="mt-2">
                    To appear on the leaderboard, you must have a registered account. Guest players cannot be ranked.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="al3" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Can I win real prizes from the leaderboard?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <strong className="text-destructive">No.</strong> The leaderboard is purely for <strong className="text-foreground">social competition and bragging rights</strong>. There are no real-world prizes, cash rewards, or anything of monetary value awarded to top players. The leaderboard exists to:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Encourage friendly competition</li>
                    <li>• Add a social element to gameplay</li>
                    <li>• Give players goals to strive for</li>
                    <li>• Recognize skilled and dedicated players</li>
                  </ul>
                  <p className="mt-2">
                    Remember: EPOCKET is 100% free entertainment. No real money or prizes are ever involved.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Technical & Support */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Technical & Support</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="ts1" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">What browsers are supported?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  EPOCKET works on all modern browsers:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• <strong className="text-foreground">Google Chrome</strong> (recommended, version 90+)</li>
                    <li>• <strong className="text-foreground">Mozilla Firefox</strong> (version 88+)</li>
                    <li>• <strong className="text-foreground">Safari</strong> (version 14+, macOS and iOS)</li>
                    <li>• <strong className="text-foreground">Microsoft Edge</strong> (version 90+)</li>
                    <li>• <strong className="text-foreground">Opera</strong> (version 76+)</li>
                  </ul>
                  <p className="mt-2">
                    For the best experience, keep your browser updated to the latest version. Older browsers may not support all features.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ts2" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Why isn't the website loading or working properly?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  If you're experiencing technical issues, try these troubleshooting steps:
                  <ol className="mt-2 space-y-2 ml-4">
                    <li><strong className="text-foreground">1. Refresh the page:</strong> Press Ctrl+R (Windows) or Cmd+R (Mac)</li>
                    <li><strong className="text-foreground">2. Clear browser cache:</strong> Go to browser settings and clear cached data</li>
                    <li><strong className="text-foreground">3. Check your internet:</strong> Ensure you have a stable connection</li>
                    <li><strong className="text-foreground">4. Update your browser:</strong> Make sure you're using the latest version</li>
                    <li><strong className="text-foreground">5. Try a different browser:</strong> Test if the issue persists in another browser</li>
                    <li><strong className="text-foreground">6. Disable extensions:</strong> Some browser extensions can interfere with websites</li>
                  </ol>
                  <p className="mt-2">
                    If problems persist, contact us through the <strong className="text-foreground">Contact page</strong> with details about your device, browser, and the issue you're experiencing.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ts3" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">I lost my progress/credits. Can you restore them?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  This depends on whether you're a guest or registered user:
                  <div className="mt-3 space-y-3">
                    <div className="p-3 bg-destructive/5 rounded border border-destructive/20">
                      <p className="font-bold mb-1 text-foreground">Guest Players</p>
                      <p className="text-sm">Guest progress is stored in browser localStorage, which is tied to that specific device and browser. If you clear browser data, switch browsers, or use a different device, your progress cannot be recovered. This is a limitation of guest accounts.</p>
                    </div>
                    <div className="p-3 bg-primary/5 rounded border border-primary/20">
                      <p className="font-bold mb-1 text-foreground">Registered Users</p>
                      <p className="text-sm">Your credits, achievements, and progress are saved in our database. If you experience data loss, contact us through the Contact page with your account details, and we'll investigate.</p>
                    </div>
                  </div>
                  <p className="mt-3">
                    <strong className="text-foreground">Pro tip:</strong> Create an account to ensure your progress is always saved and accessible across devices!
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ts4" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">How do I contact support?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  For questions, technical issues, or general inquiries:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Visit our <strong className="text-foreground">Contact page</strong> and fill out the form</li>
                    <li>• Check this <strong className="text-foreground">FAQ page</strong> first—your question may already be answered</li>
                    <li>• Review the <strong className="text-foreground">How to Play</strong> guide for game-specific questions</li>
                  </ul>
                  <p className="mt-2">
                    We aim to respond to all inquiries within 24-48 hours. Please provide as much detail as possible to help us assist you quickly.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ts5" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Is my personal information safe?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes. We take your privacy seriously and follow industry best practices:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• <strong className="text-foreground">Minimal data collection:</strong> We only collect what's necessary (email, username)</li>
                    <li>• <strong className="text-foreground">No payment info:</strong> We never ask for credit cards or financial information</li>
                    <li>• <strong className="text-foreground">Secure storage:</strong> Data is encrypted and stored securely</li>
                    <li>• <strong className="text-foreground">No selling:</strong> We never sell or share your information with third parties</li>
                  </ul>
                  <p className="mt-2">
                    For full details, review our <strong className="text-foreground">Privacy Policy</strong> page.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Policies & Legal */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Policies & Legal</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="pl1" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Where can I find your Terms & Conditions?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Our complete Terms & Conditions are available on the <strong className="text-foreground">Terms page</strong> (linked in the footer of every page). By using EPOCKET, you agree to these terms, which cover:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• User eligibility and age restrictions</li>
                    <li>• Acceptable use policies</li>
                    <li>• Virtual currency terms</li>
                    <li>• Account responsibilities</li>
                    <li>• Disclaimers and limitations of liability</li>
                  </ul>
                  <p className="mt-2">
                    We recommend reading the full terms to understand your rights and responsibilities.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pl2" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">What is your Privacy Policy?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Our Privacy Policy explains how we collect, use, and protect your personal information. Key points:
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• What data we collect (email, username, gameplay stats)</li>
                    <li>• How we use your data (account management, game features)</li>
                    <li>• How we protect your data (encryption, secure storage)</li>
                    <li>• Your rights (access, deletion, opt-out)</li>
                  </ul>
                  <p className="mt-2">
                    Read the full <strong className="text-foreground">Privacy Policy</strong> on our dedicated page (linked in the footer).
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pl3" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left">Can I delete my account?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes. If you wish to delete your EPOCKET account and all associated data:
                  <ol className="mt-2 space-y-1 ml-4">
                    <li>1. Contact us through the <strong className="text-foreground">Contact page</strong></li>
                    <li>2. Request account deletion and provide your registered email</li>
                    <li>3. We'll process your request within 7 business days</li>
                    <li>4. All your data (credits, achievements, progress) will be permanently deleted</li>
                  </ol>
                  <p className="mt-2">
                    <strong className="text-foreground">Note:</strong> Account deletion is permanent and cannot be undone. You'll need to create a new account if you want to play again.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Still Have Questions? */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="pt-6 text-center">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Still Have Questions?</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
                If you didn't find the answer you were looking for, we're here to help! Visit our <strong className="text-foreground">Contact page</strong> to get in touch with our support team, or check out our <strong className="text-foreground">How to Play</strong> guide for detailed game instructions.
              </p>
              <p className="text-sm text-muted-foreground">
                We update this FAQ regularly based on user feedback. If you have suggestions for questions to add, let us know!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
