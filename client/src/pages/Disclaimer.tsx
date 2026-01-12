import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Ban, Shield, Info, XCircle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-8">
            <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Please read this disclaimer carefully before using the EPOCKET Social Casino platform. This page contains important information about the nature of our services and limitations of liability.
            </p>
          </div>

          <div className="bg-destructive/20 border-2 border-destructive rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <Ban className="w-12 h-12 text-destructive flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-destructive mb-3">CRITICAL NOTICE</h2>
                <p className="text-lg font-bold text-foreground mb-2">
                  EPOCKET IS NOT REAL MONEY GAMBLING
                </p>
                <p className="text-foreground leading-relaxed">
                  This is a free-to-play social casino platform designed exclusively for entertainment purposes. No real money is involved at any stage. Virtual coins have absolutely zero monetary value and cannot be exchanged for cash, prizes, or anything of real-world value.
                </p>
              </div>
            </div>
          </div>
          
          <Card className="border-destructive/30">
            <CardContent className="pt-6 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-destructive" />
                  1. No Real Money Gambling
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  EPOCKET is a social casino platform that provides simulated casino-style games for entertainment purposes only. It is NOT a gambling website, and it does NOT involve real money transactions of any kind. The following statements clarify the nature of our platform:
                </p>

                <div className="space-y-3">
                  <div className="p-4 bg-destructive/5 border border-destructive/20 rounded">
                    <h3 className="font-bold text-foreground mb-2">❌ No Deposits</h3>
                    <p className="text-muted-foreground">You cannot deposit, transfer, or add real money to your EPOCKET account. All virtual currency is provided free of charge through initial credits, daily bonuses, and gameplay rewards.</p>
                  </div>
                  <div className="p-4 bg-destructive/5 border border-destructive/20 rounded">
                    <h3 className="font-bold text-foreground mb-2">❌ No Purchases</h3>
                    <p className="text-muted-foreground">You cannot purchase virtual coins, credits, or any in-game currency with real money. There are no payment options, no subscription fees, and no in-app purchases of any kind.</p>
                  </div>
                  <div className="p-4 bg-destructive/5 border border-destructive/20 rounded">
                    <h3 className="font-bold text-foreground mb-2">❌ No Withdrawals</h3>
                    <p className="text-muted-foreground">You cannot withdraw, cash out, redeem, or convert virtual coins into real money, cryptocurrency, gift cards, prizes, or anything of monetary value. Virtual coins exist solely within the platform for entertainment.</p>
                  </div>
                  <div className="p-4 bg-destructive/5 border border-destructive/20 rounded">
                    <h3 className="font-bold text-foreground mb-2">❌ Zero Monetary Value</h3>
                    <p className="text-muted-foreground">Virtual coins, credits, points, and all other in-game currencies have absolutely ZERO real-world monetary value. They are digital tokens used exclusively for gameplay and cannot be sold, traded, or exchanged.</p>
                  </div>
                  <div className="p-4 bg-destructive/5 border border-destructive/20 rounded">
                    <h3 className="font-bold text-foreground mb-2">❌ No Real Prizes</h3>
                    <p className="text-muted-foreground">Winning virtual coins does not entitle you to any real-world prizes, payments, rewards, or benefits of any kind. All winnings are purely virtual and for entertainment purposes only.</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  If you are seeking real money gambling opportunities, EPOCKET is not the appropriate platform. We recommend consulting licensed gambling operators in jurisdictions where such activities are legal and regulated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary" />
                  2. Entertainment and Recreational Use Only
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  EPOCKET is designed exclusively for entertainment, recreation, and leisure purposes. The games simulate casino-style experiences to provide enjoyable gameplay without the financial risks associated with real gambling. Users should approach the platform with the understanding that it is a form of digital entertainment similar to video games, puzzles, or other recreational activities.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The platform is intended for users who enjoy casino-style games for fun, skill development, social interaction, and relaxation—not for users seeking financial gain or real money gambling opportunities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using EPOCKET, you acknowledge that your participation is voluntary, recreational, and for entertainment purposes only, and that you do not expect any financial return or real-world benefit from your gameplay.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. No Guarantee of Winnings or Outcomes</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Game outcomes on EPOCKET are determined by random number generation (RNG) algorithms designed to simulate the unpredictability of real casino games. The following disclaimers apply to all gameplay:
                </p>
                <div className="space-y-2 ml-4">
                  <p className="text-muted-foreground">• <strong className="text-foreground">Random Outcomes:</strong> Each game result is independent and randomly generated. Past performance, patterns, or streaks do not influence future outcomes.</p>
                  <p className="text-muted-foreground">• <strong className="text-foreground">No Skill Advantage:</strong> While some games may involve elements of strategy or decision-making, outcomes are ultimately determined by chance. No amount of skill can guarantee wins.</p>
                  <p className="text-muted-foreground">• <strong className="text-foreground">No Predictability:</strong> There is no way to predict, manipulate, or influence game outcomes. Any claims of "winning strategies" or "guaranteed systems" are false.</p>
                  <p className="text-muted-foreground">• <strong className="text-foreground">Entertainment Value Only:</strong> The value of gameplay lies in entertainment, not in accumulating virtual currency. Virtual winnings have no real-world significance.</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  We do not guarantee that you will win virtual coins, unlock achievements, or reach leaderboard positions. Success in games is based on chance and is not a measure of skill, intelligence, or worth.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Age Restriction and Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  EPOCKET is restricted to users who are 18 years of age or older. Even though the platform does not involve real money gambling, we maintain this age restriction to promote responsible gaming practices, comply with industry standards, and protect minors from exposure to casino-style content.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  By accessing or using the platform, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into a binding agreement. If you are under 18, you must immediately discontinue use of the platform.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Parents and guardians are responsible for monitoring their children's internet usage and ensuring they do not access age-restricted platforms. We are not liable for any unauthorized access by minors.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If we discover that a user is under 18, we will immediately terminate their account and delete their personal information in accordance with our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Not a Gambling or Betting Platform</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  EPOCKET is NOT a gambling website, betting platform, or wagering service. We do not facilitate, promote, or enable real money gambling, sports betting, casino gambling, poker for money, or any other form of wagering or betting activity.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The platform does not hold any gambling licenses, permits, or regulatory approvals, nor is it required to do so, as it does not offer real money gambling services. Users seeking real money gambling opportunities should consult licensed operators in jurisdictions where such activities are legal.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Any resemblance between EPOCKET games and real casino games is purely for entertainment and simulation purposes. The platform is designed to provide a fun, risk-free alternative to real gambling.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Responsible Gaming Practices</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  While EPOCKET is free to play and does not involve real money, we strongly encourage all users to practice responsible gaming habits to ensure a healthy and enjoyable experience:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/20 rounded">
                    <p className="font-bold text-foreground mb-2">⏰ Set Time Limits</p>
                    <p className="text-sm text-muted-foreground">Limit your gameplay sessions to reasonable durations. Take regular breaks to avoid excessive screen time.</p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded">
                    <p className="font-bold text-foreground mb-2">🎮 Play for Fun</p>
                    <p className="text-sm text-muted-foreground">Remember that the platform is for entertainment. Don't let virtual wins or losses affect your mood or well-being.</p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded">
                    <p className="font-bold text-foreground mb-2">🚫 Avoid Compulsive Behavior</p>
                    <p className="text-sm text-muted-foreground">If you find yourself unable to stop playing or feeling anxious about virtual currency, take a break or seek support.</p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded">
                    <p className="font-bold text-foreground mb-2">👨‍👩‍👧‍👦 Protect Minors</p>
                    <p className="text-sm text-muted-foreground">Ensure that children and minors do not access the platform. Use parental controls and monitor internet usage.</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  If you or someone you know is struggling with gambling addiction or compulsive gaming behavior, please seek help from professional organizations such as the National Council on Problem Gambling (NCPG) or local support services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  7. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  To the maximum extent permitted by applicable law, EPOCKETPAY SOLUTION PRIVATE LIMITED, its directors, officers, employees, affiliates, partners, and service providers (collectively, "EPOCKET") shall not be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages arising from or related to your use of the platform, including but not limited to:
                </p>
                <div className="space-y-2 ml-4">
                  <p className="text-muted-foreground">• Loss of virtual currency, credits, achievements, or account data</p>
                  <p className="text-muted-foreground">• Technical issues, server downtime, bugs, or errors in gameplay</p>
                  <p className="text-muted-foreground">• Unauthorized access to your account or personal information</p>
                  <p className="text-muted-foreground">• Disputes with other users or third parties</p>
                  <p className="text-muted-foreground">• Emotional distress, time loss, or opportunity cost related to gameplay</p>
                  <p className="text-muted-foreground">• Any other losses, damages, or claims arising from your use of the platform</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  You acknowledge and agree that you use the platform at your own risk and that EPOCKET provides the platform "as is" and "as available" without warranties of any kind, whether express or implied.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  In no event shall EPOCKET's total liability to you for all claims arising from or related to the platform exceed the amount of zero rupees (₹0), as no real money is involved in the platform's operation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. No Warranties</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  EPOCKET provides the platform on an "as is" and "as available" basis without warranties of any kind, either express or implied. To the fullest extent permitted by law, EPOCKET disclaims all warranties, including but not limited to:
                </p>
                <div className="space-y-2 ml-4">
                  <p className="text-muted-foreground">• Warranties of merchantability, fitness for a particular purpose, and non-infringement</p>
                  <p className="text-muted-foreground">• Warranties that the platform will be uninterrupted, error-free, secure, or free from viruses or harmful components</p>
                  <p className="text-muted-foreground">• Warranties regarding the accuracy, reliability, or completeness of content, information, or game outcomes</p>
                  <p className="text-muted-foreground">• Warranties that defects or errors will be corrected or that the platform will meet your expectations</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  You acknowledge that your use of the platform is at your sole risk and that you are responsible for any damage to your device, loss of data, or other consequences resulting from your use of the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You agree to indemnify, defend, and hold harmless EPOCKET, its directors, officers, employees, affiliates, partners, and service providers from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from or related to:
                </p>
                <div className="space-y-2 ml-4">
                  <p className="text-muted-foreground">• Your use or misuse of the platform</p>
                  <p className="text-muted-foreground">• Your violation of these Terms & Conditions, Privacy Policy, or Disclaimer</p>
                  <p className="text-muted-foreground">• Your violation of any applicable laws, regulations, or third-party rights</p>
                  <p className="text-muted-foreground">• Your interactions with other users or third parties through the platform</p>
                  <p className="text-muted-foreground">• Any content you submit, post, or transmit through the platform</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  This indemnification obligation will survive the termination of your account or use of the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Advertising Compliance</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  EPOCKET complies with advertising policies and guidelines set forth by major advertising platforms, including Google Ads. To ensure compliance and avoid misleading users, we use appropriate language throughout the platform:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded">
                    <p className="font-bold text-foreground mb-2">✅ Approved Terms</p>
                    <p className="text-sm text-muted-foreground">Play, Spin, Virtual Coins, Virtual Currency, Credits, Entertainment, Social Casino, Free-to-Play</p>
                  </div>
                  <div className="p-4 bg-destructive/5 border border-destructive/20 rounded">
                    <p className="font-bold text-foreground mb-2">❌ Avoided Terms</p>
                    <p className="text-sm text-muted-foreground">Bet, Wager, Gamble, Real Money, Cash Out, Withdraw, Win Money, Prizes, Jackpot (in monetary context)</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  All content, marketing materials, and communications clearly state that EPOCKET is a free-to-play social casino for entertainment purposes only, with no real money involved. We do not make false or misleading claims about the nature of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Jurisdictional Restrictions</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  EPOCKET is operated from India and is intended for users in jurisdictions where social casino platforms are legal. It is your responsibility to ensure that your use of the platform complies with local laws and regulations in your jurisdiction.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  If you are located in a jurisdiction where social casino platforms, simulated gambling, or casino-style games are prohibited or restricted, you must not access or use the platform. EPOCKET is not responsible for determining the legality of the platform in your jurisdiction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using the platform, you represent and warrant that your use complies with all applicable laws in your jurisdiction. If your use is found to be illegal, you agree to immediately discontinue use and accept full responsibility for any consequences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to This Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  EPOCKET reserves the right to modify, update, or revise this Disclaimer at any time without prior notice. Changes will be effective immediately upon posting on the platform. Your continued use of the platform after changes are posted constitutes your acceptance of the revised Disclaimer.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage you to review this Disclaimer periodically to stay informed about important disclaimers and limitations of liability. If you do not agree with any changes, you must immediately discontinue use of the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  If you have any questions, concerns, or complaints about this Disclaimer or the nature of our services, please contact us:
                </p>
                <div className="p-4 bg-secondary/20 rounded">
                  <p className="text-foreground"><strong>Email:</strong> support@epocket.com</p>
                  <p className="text-foreground mt-2"><strong>Company:</strong> EPOCKETPAY SOLUTION PRIVATE LIMITED</p>
                  <p className="text-foreground mt-1"><strong>Registered Office:</strong> Kolkata, West Bengal, India</p>
                  <p className="text-foreground mt-1"><strong>CIN:</strong> U93000WB2019PTC231194</p>
                  <p className="text-foreground mt-1"><strong>PAN:</strong> AAFCE4335G</p>
                </div>
              </section>

              <div className="pt-8 border-t border-border">
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground font-bold mb-2">Final Reminder</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        By using EPOCKET, you acknowledge and agree that:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• This is NOT real money gambling</li>
                        <li>• Virtual coins have ZERO monetary value</li>
                        <li>• You cannot withdraw, cash out, or redeem virtual currency</li>
                        <li>• The platform is for entertainment purposes only</li>
                        <li>• You use the platform at your own risk</li>
                        <li>• EPOCKET is not liable for any losses or damages</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong className="text-foreground">Last Updated:</strong> January 12, 2026
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
