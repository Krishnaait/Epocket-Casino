import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
          </div>
          
          <Card className="border-destructive/50">
            <CardContent className="pt-6 space-y-6 text-muted-foreground">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-destructive mb-4">IMPORTANT NOTICE</h2>
                <p className="text-lg font-semibold text-foreground">
                  EPOCKET IS NOT REAL MONEY GAMBLING. THIS IS A FREE-TO-PLAY SOCIAL CASINO FOR ENTERTAINMENT PURPOSES ONLY.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">No Real Money Involved</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You cannot deposit real money on EPOCKET</li>
                  <li>You cannot purchase virtual coins with real money</li>
                  <li>You cannot withdraw or cash out virtual coins</li>
                  <li>Virtual coins have <strong>zero monetary value</strong></li>
                  <li>Winning virtual coins does not entitle you to any real-world prizes or payments</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Entertainment Only</h2>
                <p>EPOCKET is designed purely for entertainment and recreational purposes. The games simulate casino experiences but do not offer real gambling opportunities.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">No Guarantee of Winnings</h2>
                <p>Game outcomes are determined by random number generation. Past performance does not guarantee future results. Playing more does not increase your chances of winning real money (because there is no real money involved).</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Age Restriction</h2>
                <p>You must be 18 years or older to access EPOCKET. Even though no real money is involved, we maintain this age restriction to promote responsible gaming practices.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Not a Gambling Site</h2>
                <p>EPOCKET is not a gambling website. We do not facilitate real money gambling, betting, or wagering of any kind. If you are looking for real money gambling, this is not the right platform.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Responsible Gaming</h2>
                <p>While our games are free, we encourage responsible gaming habits. Set time limits, take breaks, and remember that this is just for fun.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">No Liability</h2>
                <p>EPOCKETPAY SOLUTION PRIVATE LIMITED is not liable for any losses, damages, or claims arising from your use of this website. Use at your own risk.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Google Ads Compliance</h2>
                <p>EPOCKET complies with advertising policies by using appropriate language such as "Play," "Spin," and "Virtual Coins" instead of gambling-related terms like "Bet," "Wager," or "Real Money."</p>
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
