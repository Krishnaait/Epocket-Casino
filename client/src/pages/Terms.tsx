import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, AlertTriangle } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Please read these Terms and Conditions carefully before using EPOCKET Social Casino. By accessing or using our platform, you agree to be bound by these terms.
            </p>
          </div>

          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-bold text-destructive mb-1">Important Legal Notice</p>
              <p className="text-muted-foreground">
                These Terms & Conditions constitute a legally binding agreement between you and EPOCKETPAY SOLUTION PRIVATE LIMITED. By using this website, you acknowledge that you have read, understood, and agree to be bound by all terms outlined below. If you do not agree with any part of these terms, you must immediately discontinue use of this platform.
              </p>
            </div>
          </div>
          
          <Card>
            <CardContent className="pt-6 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Definitions and Interpretation</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  For the purposes of these Terms and Conditions, the following definitions apply throughout this document. These definitions are provided to ensure clarity and mutual understanding between all parties.
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-secondary/20 rounded">
                    <p className="text-foreground"><strong>"EPOCKET," "we," "us," or "our"</strong> refers to EPOCKETPAY SOLUTION PRIVATE LIMITED, a company incorporated under the laws of India with Corporate Identification Number (CIN) U93000WB2019PTC231194 and Permanent Account Number (PAN) AAFCE4335G, having its registered office in Kolkata, West Bengal, India.</p>
                  </div>
                  <div className="p-3 bg-secondary/20 rounded">
                    <p className="text-foreground"><strong>"Platform," "Website," or "Service"</strong> refers to the EPOCKET Social Casino website, including all web pages, features, games, content, and services accessible through the domain and any associated subdomains or mobile applications.</p>
                  </div>
                  <div className="p-3 bg-secondary/20 rounded">
                    <p className="text-foreground"><strong>"User," "you," or "your"</strong> refers to any individual who accesses, browses, or uses the EPOCKET platform, whether as a guest or registered account holder.</p>
                  </div>
                  <div className="p-3 bg-secondary/20 rounded">
                    <p className="text-foreground"><strong>"Virtual Coins," "Virtual Currency," or "Credits"</strong> refers to the digital tokens used within the platform for gameplay purposes. These have absolutely no real-world monetary value and cannot be exchanged, sold, or redeemed for money, prizes, or anything of value.</p>
                  </div>
                  <div className="p-3 bg-secondary/20 rounded">
                    <p className="text-foreground"><strong>"Account"</strong> refers to a registered user profile created through our authentication system, which stores user data, gameplay history, achievements, and virtual currency balances.</p>
                  </div>
                  <div className="p-3 bg-secondary/20 rounded">
                    <p className="text-foreground"><strong>"Content"</strong> refers to all text, graphics, images, audio, video, software, data compilations, and any other material available on or through the platform.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Acceptance and Modification of Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  By accessing, browsing, or using the EPOCKET platform in any manner, you expressly acknowledge that you have read, understood, and agree to be legally bound by these Terms and Conditions, as well as our Privacy Policy and Disclaimer. Your continued use of the platform constitutes your ongoing acceptance of these terms and any future modifications.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We reserve the right, at our sole discretion, to modify, amend, add to, or remove portions of these Terms and Conditions at any time without prior notice. Such modifications will become effective immediately upon posting to the website. The "Last Updated" date at the bottom of this document will reflect the most recent revision. It is your responsibility to review these Terms periodically for changes. Your continued use of the platform following the posting of revised Terms constitutes your acceptance of such changes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you do not agree to these Terms or any future modifications, you must immediately cease all use of the EPOCKET platform and, if applicable, delete your account. Continued use after modifications are posted will be deemed acceptance of the revised Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Service Description and Nature of Platform</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  EPOCKET is a <strong className="text-foreground">free-to-play social casino entertainment platform</strong> that provides users with access to virtual casino-style games for entertainment purposes only. The platform offers various games including, but not limited to, Video Poker, Slots, Roulette, and Scratch Cards, all of which use virtual currency that has no real-world monetary value.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
                  <p className="font-bold text-foreground mb-2">Critical Distinction: Social Casino vs. Real Money Gambling</p>
                  <p className="text-muted-foreground leading-relaxed">
                    EPOCKET is <strong className="text-destructive">NOT a real money gambling platform, online casino, or betting website</strong>. We do not facilitate, enable, or permit any form of real money wagering, deposits, withdrawals, or financial transactions related to gameplay. All games are played exclusively with virtual currency provided free of charge. Users cannot purchase virtual currency with real money, nor can they exchange, sell, redeem, or convert virtual currency into real money, prizes, goods, services, or anything of tangible value.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The platform is designed solely for <strong className="text-foreground">entertainment, social interaction, and skill development</strong>. Any resemblance to real gambling activities is purely for thematic purposes and does not constitute actual gambling. Users play games to enjoy the experience, compete on leaderboards, unlock achievements, and engage with the community—not to win money or prizes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to add, modify, suspend, or discontinue any games, features, or services at any time without prior notice or liability. We may also impose limits on certain features or restrict access to parts or all of the platform for maintenance, security, or operational reasons.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Virtual Currency Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Virtual Coins (also referred to as "Credits") are the digital tokens used exclusively within the EPOCKET platform for gameplay purposes. The following terms govern the nature, use, and limitations of virtual currency:
                </p>
                
                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">4.1 No Monetary Value</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Virtual Coins have <strong className="text-destructive">absolutely zero real-world monetary value</strong>. They are not currency, securities, commodities, or any form of financial instrument. Virtual Coins exist solely as digital representations within the platform's software and have no existence, value, or utility outside of EPOCKET.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">4.2 No Purchase or Sale</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Users cannot and will never be able to purchase Virtual Coins with real money, credit cards, bank transfers, cryptocurrency, or any other form of payment. Similarly, users cannot sell, exchange, redeem, convert, or transfer Virtual Coins for real money, prizes, goods, services, or anything of tangible value. Any attempt to do so violates these Terms and may result in immediate account termination.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">4.3 Free Distribution</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  All Virtual Coins are provided to users completely free of charge through various mechanisms, including but not limited to: starting credits (1,000 coins for new users), daily login bonuses (200 coins per day for registered users), balance reset button (500 coins when balance reaches zero), and winning games. Users will never be required to pay real money to obtain Virtual Coins.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">4.4 No Ownership Rights</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Users do not own Virtual Coins in any legal sense. Virtual Coins are licensed to you for use within the platform only, and all rights, title, and interest in Virtual Coins remain with EPOCKETPAY SOLUTION PRIVATE LIMITED. We grant you a limited, non-exclusive, non-transferable, revocable license to use Virtual Coins solely for gameplay on the platform.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">4.5 Modification and Adjustment Rights</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We reserve the right, at our sole discretion and without prior notice or liability, to adjust, modify, increase, decrease, or reset Virtual Coin balances for any reason, including but not limited to: technical errors or glitches, suspected fraud or abuse, security concerns, maintenance operations, game balancing, or enforcement of these Terms. We are under no obligation to restore Virtual Coins that are lost, deleted, or modified for any reason.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">4.6 No Transfer Between Users</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Virtual Coins cannot be transferred, gifted, traded, or exchanged between user accounts. Each user's Virtual Coin balance is tied exclusively to their individual account and cannot be moved to another user's account under any circumstances.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">4.7 Termination of Virtual Currency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upon termination or deletion of your account, all Virtual Coins associated with that account will be permanently forfeited and deleted. You will have no claim to compensation, refund, or reimbursement of any kind for lost Virtual Coins, as they have no monetary value.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Eligibility and Age Restrictions</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Access to and use of the EPOCKET platform is strictly limited to individuals who meet the following eligibility requirements:
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">5.1 Minimum Age Requirement</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You must be <strong className="text-foreground">at least 18 years of age</strong> to access, browse, or use the EPOCKET platform. This age restriction applies regardless of the fact that no real money is involved. By using the platform, you represent and warrant that you are 18 years of age or older. We reserve the right to request proof of age at any time, and failure to provide satisfactory verification may result in immediate account suspension or termination.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">5.2 Legal Capacity</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You must have the legal capacity to enter into binding contracts under the laws of your jurisdiction. If you are accessing the platform on behalf of an organization or entity, you represent and warrant that you have the authority to bind that organization to these Terms.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">5.3 Jurisdictional Compliance</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You are responsible for ensuring that your use of the platform complies with all applicable laws, regulations, and restrictions in your country, state, province, or locality. If social casino gaming or similar entertainment platforms are prohibited in your jurisdiction, you must not access or use EPOCKET. We make no representation that the platform is appropriate or available for use in all locations.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">5.4 Parental Responsibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Parents and legal guardians are responsible for monitoring and controlling the online activities of minors under their care. If you are a parent or guardian and you become aware that your child under 18 has accessed the platform, please contact us immediately so we can take appropriate action, including account deletion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. User Accounts and Registration</h2>
                
                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">6.1 Account Creation</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  While registration is optional (users may play as guests), creating an account provides additional features such as progress saving, achievement tracking, leaderboard participation, and daily bonuses. When you create an account, you agree to provide accurate, current, and complete information. You must promptly update your account information if any changes occur.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">6.2 Account Security</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You are solely responsible for maintaining the confidentiality and security of your account credentials (username, password, authentication tokens). You agree to immediately notify us of any unauthorized access to or use of your account. You are responsible for all activities that occur under your account, whether or not authorized by you. We are not liable for any loss or damage arising from your failure to protect your account credentials.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">6.3 One Account Per User</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Each user is permitted to create and maintain only one account. Creating multiple accounts to exploit bonuses, manipulate leaderboards, or circumvent restrictions is strictly prohibited and will result in immediate termination of all associated accounts.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">6.4 Account Termination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend, disable, or terminate your account at any time, with or without cause, and with or without notice, if we believe you have violated these Terms, engaged in fraudulent activity, or for any other reason at our sole discretion. Upon termination, your right to access and use the platform will immediately cease, and all Virtual Coins and account data may be permanently deleted.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Acceptable Use and Prohibited Conduct</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  By using the EPOCKET platform, you agree to use it only for lawful purposes and in accordance with these Terms. The following activities are strictly prohibited:
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">7.1 Illegal Activities</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You may not use the platform for any purpose that is illegal, unlawful, or prohibited by these Terms or applicable laws. This includes, but is not limited to, violating local, state, national, or international laws or regulations.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">7.2 Cheating and Exploitation</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You may not attempt to manipulate, exploit, or cheat the games or platform in any way. This includes using bots, scripts, automated tools, hacks, exploits, bugs, glitches, or any third-party software to gain an unfair advantage. You may not reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code or underlying algorithms of the games or platform.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">7.3 Multiple Accounts and Bonus Abuse</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You may not create multiple accounts to exploit starting credits, daily bonuses, or other promotional offers. You may not coordinate with other users to manipulate leaderboards, achievements, or any other platform features.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">7.4 Harassment and Abuse</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You may not harass, threaten, intimidate, bully, or otherwise harm other users. You may not post, transmit, or share content that is offensive, abusive, defamatory, obscene, hateful, discriminatory, or otherwise objectionable.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">7.5 Unauthorized Access and Security Violations</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You may not attempt to gain unauthorized access to any portion of the platform, other user accounts, computer systems, or networks connected to the platform. You may not probe, scan, or test the vulnerability of the platform or breach security or authentication measures. You may not interfere with or disrupt the platform, servers, or networks, including through denial-of-service attacks, viruses, malware, or any other harmful code.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">7.6 Commercial Use</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You may not use the platform for any commercial purpose without our express written permission. This includes selling, reselling, or exploiting any portion of the platform, Virtual Coins, accounts, or content for commercial gain.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">7.7 Impersonation and Misrepresentation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may not impersonate any person or entity, including EPOCKET staff, moderators, or other users. You may not falsely state or otherwise misrepresent your affiliation with any person or entity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Intellectual Property Rights</h2>
                
                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">8.1 Ownership</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  All content, features, functionality, software, code, graphics, images, audio, video, text, logos, trademarks, service marks, and other materials available on or through the EPOCKET platform are owned by or licensed to EPOCKETPAY SOLUTION PRIVATE LIMITED and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws of India and international treaties.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">8.2 Limited License</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the platform solely for your personal, non-commercial entertainment purposes. This license does not include any right to: (a) resell or make commercial use of the platform or content; (b) collect or use any product listings, descriptions, or prices; (c) make derivative works of the platform or content; (d) download or copy account information; or (e) use data mining, robots, or similar data gathering tools.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">8.3 Restrictions</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content from the platform, except as expressly permitted by these Terms or with our prior written consent. You may not remove, alter, or obscure any copyright, trademark, or other proprietary rights notices from the platform or content.
                </p>

                <h3 className="text-xl font-bold text-foreground mb-2 mt-4">8.4 Trademarks</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "EPOCKET," the EPOCKET logo, and all related names, logos, product and service names, designs, and slogans are trademarks of EPOCKETPAY SOLUTION PRIVATE LIMITED. You may not use such marks without our prior written permission. All other names, logos, product and service names, designs, and slogans on the platform are the trademarks of their respective owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  THE EPOCKET PLATFORM AND ALL CONTENT, GAMES, FEATURES, AND SERVICES ARE PROVIDED ON AN <strong className="text-foreground">"AS IS"</strong> AND <strong className="text-foreground">"AS AVAILABLE"</strong> BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, OR ACCURACY.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We do not warrant that the platform will be uninterrupted, error-free, secure, or free from viruses or other harmful components. We do not warrant that the results obtained from using the platform will be accurate, reliable, or meet your expectations. We do not warrant that any errors or defects will be corrected, or that the platform will be compatible with your device or operating system.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We make no representations or warranties regarding the fairness, randomness, or outcomes of games, although we strive to use certified random number generators. We do not guarantee that Virtual Coin balances, achievements, leaderboard rankings, or any other user data will be preserved or accurately maintained.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of the platform is at your sole risk. Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you. In such cases, our liability will be limited to the maximum extent permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL EPOCKETPAY SOLUTION PRIVATE LIMITED, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AFFILIATES, PARTNERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE PLATFORM, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION (WHETHER IN CONTRACT, TORT INCLUDING NEGLIGENCE, OR OTHERWISE) EXCEED THE AMOUNT YOU PAID TO US, IF ANY, FOR ACCESSING THE PLATFORM IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM. SINCE THE PLATFORM IS FREE AND NO PAYMENTS ARE MADE, THIS AMOUNT WILL BE ZERO (₹0).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We shall not be liable for any loss or damage arising from: (a) your failure to comply with these Terms; (b) unauthorized access to or alteration of your account or data; (c) loss of Virtual Coins, achievements, or account data; (d) interruptions or cessation of the platform; (e) bugs, viruses, or other harmful code; (f) errors or inaccuracies in content; or (g) conduct of third parties.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitations may not apply to you. In such cases, our liability will be limited to the maximum extent permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to defend, indemnify, and hold harmless EPOCKETPAY SOLUTION PRIVATE LIMITED, its directors, officers, employees, agents, affiliates, partners, and licensors from and against any and all claims, damages, obligations, losses, liabilities, costs, debts, and expenses (including but not limited to attorney's fees) arising from: (a) your use of or access to the platform; (b) your violation of these Terms; (c) your violation of any third-party rights, including intellectual property, privacy, or other proprietary rights; (d) your violation of any applicable law or regulation; or (e) any content you submit, post, or transmit through the platform. This indemnification obligation will survive the termination of these Terms and your use of the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Governing Law and Jurisdiction</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  These Terms and Conditions, and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims), shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You agree that any legal action, suit, or proceeding arising out of or related to these Terms or the platform shall be instituted exclusively in the courts located in Kolkata, West Bengal, India. You waive any objection to the jurisdiction of such courts and to venue in such courts. You agree to submit to the personal jurisdiction of such courts for the purpose of litigating all such disputes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  In the event of any dispute, controversy, or claim arising out of or relating to these Terms or the platform, you agree to first contact us and attempt to resolve the dispute informally by sending written notice to support@epocket.com. We will attempt to resolve the dispute through good-faith negotiations within thirty (30) days of receiving your notice.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If the dispute cannot be resolved through informal negotiations, either party may initiate formal legal proceedings in accordance with Section 12 (Governing Law and Jurisdiction) above.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">14. Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its intent. If such modification is not possible, the provision shall be severed from these Terms, and the remaining provisions shall continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">15. Waiver</h2>
                <p className="text-muted-foreground leading-relaxed">
                  No waiver by EPOCKETPAY SOLUTION PRIVATE LIMITED of any term or condition set forth in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition. Any failure to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">16. Entire Agreement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions, together with our Privacy Policy and Disclaimer, constitute the entire agreement between you and EPOCKETPAY SOLUTION PRIVATE LIMITED regarding your use of the platform and supersede all prior or contemporaneous understandings, agreements, representations, and warranties, whether written or oral, regarding the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">17. Assignment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may not assign, transfer, or delegate these Terms or your rights and obligations hereunder without our prior written consent. We may assign, transfer, or delegate these Terms and our rights and obligations without restriction. Any attempted assignment, transfer, or delegation by you in violation of this section shall be null and void.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">18. Survival</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All provisions of these Terms which by their nature should survive termination shall survive termination, including without limitation ownership provisions, warranty disclaimers, indemnity obligations, and limitations of liability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">19. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  If you have any questions, concerns, or complaints regarding these Terms and Conditions, or if you need to report a violation, please contact us at:
                </p>
                <div className="p-4 bg-secondary/20 rounded">
                  <p className="text-foreground"><strong>Email:</strong> support@epocket.com</p>
                  <p className="text-foreground mt-1"><strong>Company:</strong> EPOCKETPAY SOLUTION PRIVATE LIMITED</p>
                  <p className="text-foreground mt-1"><strong>Registered Office:</strong> Kolkata, West Bengal, India</p>
                  <p className="text-foreground mt-1"><strong>CIN:</strong> U93000WB2019PTC231194</p>
                  <p className="text-foreground mt-1"><strong>PAN:</strong> AAFCE4335G</p>
                </div>
              </section>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Last Updated:</strong> January 12, 2026
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  By using EPOCKET, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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
