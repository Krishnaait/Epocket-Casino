import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. This Privacy Policy explains how EPOCKET collects, uses, protects, and shares your personal information when you use our platform.
            </p>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-8 flex items-start gap-3">
            <Eye className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-bold text-foreground mb-1">Transparency Commitment</p>
              <p className="text-muted-foreground">
                We are committed to protecting your privacy and being transparent about our data practices. This policy describes what information we collect, why we collect it, how we use it, and your rights regarding your personal data. Last updated: January 12, 2026.
              </p>
            </div>
          </div>
          
          <Card>
            <CardContent className="pt-6 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction and Scope</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  This Privacy Policy applies to all personal information collected by EPOCKETPAY SOLUTION PRIVATE LIMITED through the EPOCKET Social Casino platform. By accessing or using the Platform, you acknowledge that you have read, understood, and agree to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-primary" />
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect various types of information to provide, maintain, improve, and secure our Platform.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/20 rounded">
                    <h3 className="font-bold text-foreground mb-2">Account Information</h3>
                    <p className="text-muted-foreground">Name, email address, authentication credentials, and profile details you provide when creating an account.</p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded">
                    <h3 className="font-bold text-foreground mb-2">Game Activity Data</h3>
                    <p className="text-muted-foreground">Games played, virtual currency balances, achievements unlocked, leaderboard rankings, and gameplay statistics.</p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded">
                    <h3 className="font-bold text-foreground mb-2">Device & Usage Information</h3>
                    <p className="text-muted-foreground">IP address, browser type, device information, pages visited, and interaction patterns with the Platform.</p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded">
                    <h3 className="font-bold text-foreground mb-2">Cookies & Tracking</h3>
                    <p className="text-muted-foreground">We use cookies and local storage for authentication, preferences, and analytics. You can control cookies through browser settings.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-primary" />
                  3. How We Use Your Information
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Provide Services:</strong> Create and manage accounts, enable gameplay, track progress, and deliver platform features.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Personalize Experience:</strong> Remember preferences, customize content, and recommend features based on activity.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Communicate:</strong> Send account updates, security alerts, policy changes, and optional promotional content.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Improve Platform:</strong> Analyze usage patterns, develop new features, optimize performance, and conduct research.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Security & Fraud Prevention:</strong> Detect suspicious activity, prevent abuse, protect platform integrity, and comply with legal obligations.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Share Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, rent, or trade your personal information. We may share information in these limited circumstances:
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-secondary/20 rounded">
                    <h3 className="font-bold text-foreground mb-2">Public Information</h3>
                    <p className="text-muted-foreground">Display name, avatar, leaderboard rankings, and achievements may be visible to other users.</p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded">
                    <h3 className="font-bold text-foreground mb-2">Service Providers</h3>
                    <p className="text-muted-foreground">Trusted third-party providers who help operate the Platform (hosting, analytics, support) under strict confidentiality agreements.</p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded">
                    <h3 className="font-bold text-foreground mb-2">Legal Requirements</h3>
                    <p className="text-muted-foreground">When required by law, court order, or to protect rights, safety, and security.</p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded">
                    <h3 className="font-bold text-foreground mb-2">Business Transfers</h3>
                    <p className="text-muted-foreground">In the event of merger, acquisition, or sale of assets, with prior notification to users.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary" />
                  5. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/20 rounded">
                    <p className="font-bold text-foreground mb-2">🔒 Encryption</p>
                    <p className="text-sm text-muted-foreground">SSL/TLS encryption for data in transit and encryption at rest for sensitive data.</p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded">
                    <p className="font-bold text-foreground mb-2">🛡️ Access Controls</p>
                    <p className="text-sm text-muted-foreground">Restricted access to authorized personnel only on a need-to-know basis.</p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded">
                    <p className="font-bold text-foreground mb-2">👁️ Security Monitoring</p>
                    <p className="text-sm text-muted-foreground">Continuous monitoring for vulnerabilities and suspicious activity.</p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded">
                    <p className="font-bold text-foreground mb-2">🏗️ Secure Infrastructure</p>
                    <p className="text-sm text-muted-foreground">Reputable hosting with firewalls, intrusion detection, and regular updates.</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  While we use commercially reasonable security measures, no method of transmission over the internet is 100% secure. You are responsible for maintaining the confidentiality of your account credentials.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Privacy Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <div className="space-y-3">
                  <div className="p-4 border border-primary/20 rounded">
                    <h3 className="font-bold text-foreground mb-1">✓ Right to Access</h3>
                    <p className="text-sm text-muted-foreground">Request a copy of your personal data we hold.</p>
                  </div>
                  <div className="p-4 border border-primary/20 rounded">
                    <h3 className="font-bold text-foreground mb-1">✓ Right to Correction</h3>
                    <p className="text-sm text-muted-foreground">Update or correct inaccurate information through account settings.</p>
                  </div>
                  <div className="p-4 border border-primary/20 rounded">
                    <h3 className="font-bold text-foreground mb-1">✓ Right to Deletion</h3>
                    <p className="text-sm text-muted-foreground">Request deletion of your account and personal data (subject to legal exceptions).</p>
                  </div>
                  <div className="p-4 border border-primary/20 rounded">
                    <h3 className="font-bold text-foreground mb-1">✓ Right to Object</h3>
                    <p className="text-sm text-muted-foreground">Opt out of promotional communications or certain data processing activities.</p>
                  </div>
                  <div className="p-4 border border-primary/20 rounded">
                    <h3 className="font-bold text-foreground mb-1">✓ Right to Data Portability</h3>
                    <p className="text-sm text-muted-foreground">Request your data in a portable format (JSON/CSV).</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise any of these rights, contact us at support@epocket.com. We will respond within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We retain your information for as long as necessary to provide services and comply with legal obligations:
                </p>
                <div className="space-y-2">
                  <p className="text-muted-foreground">• <strong className="text-foreground">Account Data:</strong> Retained while account is active; deleted within 30 days of account deletion.</p>
                  <p className="text-muted-foreground">• <strong className="text-foreground">Game Activity:</strong> Retained while account is active; deleted upon account deletion.</p>
                  <p className="text-muted-foreground">• <strong className="text-foreground">Log Data:</strong> Retained for up to 12 months for security and analytics purposes.</p>
                  <p className="text-muted-foreground">• <strong className="text-foreground">Communications:</strong> Retained for up to 2 years for support and service improvement.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The Platform is intended for users 18 years or older. We do not knowingly collect information from individuals under 18. If we discover we have collected data from a child under 18, we will delete it immediately.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Parents who believe their child has provided information to us should contact support@epocket.com immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Platform is operated from India. Your information may be transferred to and processed in jurisdictions outside your country of residence. We implement appropriate safeguards to protect your information in accordance with this Privacy Policy and applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may update this Privacy Policy from time to time. Significant changes will be communicated via email or prominent notice on the Platform. Continued use after changes constitutes acceptance of the revised policy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
                <div className="p-4 bg-secondary/20 rounded">
                  <p className="text-foreground"><strong>Email:</strong> support@epocket.com</p>
                  <p className="text-foreground mt-2"><strong>Company:</strong> EPOCKETPAY SOLUTION PRIVATE LIMITED</p>
                  <p className="text-foreground mt-1"><strong>Registered Office:</strong> Kolkata, West Bengal, India</p>
                  <p className="text-foreground mt-1"><strong>CIN:</strong> U93000WB2019PTC231194</p>
                  <p className="text-foreground mt-1"><strong>PAN:</strong> AAFCE4335G</p>
                </div>
              </section>

              <div className="pt-8 border-t border-border">
                <div className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-bold mb-1">Your Privacy Matters</p>
                    <p className="text-sm text-muted-foreground">
                      We are committed to protecting your privacy and handling your personal information responsibly. If you have questions or concerns, please contact us at support@epocket.com.
                    </p>
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
