import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <Card>
            <CardContent className="pt-6 space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">1. Information We Collect</h2>
                <p>When you use EPOCKET, we may collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account information (if you register): name, email, login credentials</li>
                  <li>Game activity: games played, credits won/lost, achievements unlocked</li>
                  <li>Technical data: IP address, browser type, device information</li>
                  <li>Cookies and local storage for session management</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and improve our services</li>
                  <li>To track game progress and achievements</li>
                  <li>To maintain leaderboards and rankings</li>
                  <li>To communicate important updates</li>
                  <li>To ensure security and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">3. Data Sharing</h2>
                <p>We do not sell your personal information. We may share data with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service providers who help us operate the website</li>
                  <li>Law enforcement if required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">4. Cookies</h2>
                <p>We use cookies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Keep you logged in</li>
                  <li>Remember your preferences</li>
                  <li>Track game sessions for guest users</li>
                </ul>
                <p className="mt-2">You can disable cookies in your browser settings, but some features may not work properly.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">5. Data Security</h2>
                <p>We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">7. Children's Privacy</h2>
                <p>EPOCKET is only for users aged 18 and above. We do not knowingly collect information from minors.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">8. Changes to Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. Continued use of the website constitutes acceptance of the updated policy.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">9. Contact Us</h2>
                <p>For privacy-related questions or to exercise your rights, contact us at support@epocket.com</p>
              </section>

              <div className="pt-6 border-t border-border">
                <p className="text-sm">
                  <strong>Company:</strong> EPOCKETPAY SOLUTION PRIVATE LIMITED<br />
                  <strong>CIN:</strong> U93000WB2019PTC231194 | <strong>PAN:</strong> AAFCE4335G<br />
                  <strong>Last Updated:</strong> January 2025
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
