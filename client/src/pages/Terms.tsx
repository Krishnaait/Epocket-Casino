import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>
          
          <Card>
            <CardContent className="pt-6 space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
                <p>By accessing and using EPOCKET, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">2. Service Description</h2>
                <p>EPOCKET is a <strong>free-to-play social casino</strong> platform that provides entertainment through virtual casino games. All games use virtual coins that have <strong>no real-world value</strong>.</p>
                <p className="mt-2"><strong className="text-destructive">This is not real money gambling.</strong> You cannot deposit money, purchase virtual coins, or withdraw winnings.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">3. Virtual Currency</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Virtual coins are provided free of charge</li>
                  <li>Virtual coins have zero monetary value</li>
                  <li>Virtual coins cannot be exchanged for real money, prizes, or anything of value</li>
                  <li>We reserve the right to adjust virtual coin balances for technical or security reasons</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">4. Age Restriction</h2>
                <p>You must be <strong>18 years or older</strong> to access EPOCKET. By using our website, you confirm that you meet this age requirement.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">5. User Conduct</h2>
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the website for any illegal purpose</li>
                  <li>Attempt to manipulate or cheat the games</li>
                  <li>Create multiple accounts to exploit bonuses</li>
                  <li>Harass or harm other users</li>
                  <li>Reverse engineer or attempt to hack the website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">6. No Warranty</h2>
                <p>EPOCKET is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free service.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">7. Limitation of Liability</h2>
                <p>EPOCKETPAY SOLUTION PRIVATE LIMITED shall not be liable for any damages arising from your use of the website.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">8. Changes to Terms</h2>
                <p>We reserve the right to modify these Terms at any time. Continued use of the website constitutes acceptance of updated Terms.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">9. Governing Law</h2>
                <p>These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Kolkata, West Bengal.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">10. Contact</h2>
                <p>For questions about these Terms, contact us at support@epocket.com</p>
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
