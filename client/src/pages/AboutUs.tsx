import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Target, CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About EPOCKET</h1>
            <p className="text-xl text-muted-foreground">Free-to-play social casino entertainment</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-12 h-12 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Our Story</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      EPOCKET was created to bring the excitement of casino games to everyone, completely free. We believe entertainment should be accessible without financial risk. Our platform offers the thrill of classic casino games using virtual coins that have no real-world value.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Target className="w-12 h-12 text-secondary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide a safe, fun, and responsible social casino experience where players can enjoy their favorite games without any financial commitment. We are committed to transparency, fair play, and responsible gaming practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-12 h-12 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Our Values</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" /><span><strong>Transparency:</strong> No hidden costs, no deposits, no withdrawals.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" /><span><strong>Fair Play:</strong> All games use certified random number generators.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" /><span><strong>Responsibility:</strong> We promote healthy gaming habits and age verification.</span></li>
                      <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" /><span><strong>Entertainment:</strong> Our sole purpose is fun, not profit.</span></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-12 h-12 text-secondary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Fair Play Commitment</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      All our games use industry-standard random number generation to ensure fair outcomes. We do not manipulate results, and every player has an equal chance based on the game rules.
                    </p>
                    <p className="text-sm text-destructive font-semibold">
                      Remember: This is not real money gambling. Virtual coins have no real-world value and cannot be exchanged for cash or prizes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-card/50 rounded-lg p-6 border border-border text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Company:</strong> EPOCKETPAY SOLUTION PRIVATE LIMITED<br />
                CIN: U93000WB2019PTC231194 | PAN: AAFCE4335G
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
