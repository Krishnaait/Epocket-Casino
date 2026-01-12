import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Clock, Shield, AlertCircle } from "lucide-react";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Responsible Gaming</h1>
            <p className="text-xl text-muted-foreground">Play safely and responsibly</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Important Reminder</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      EPOCKET is a <strong>free-to-play social casino</strong> designed purely for entertainment. Our games use virtual coins that have <strong>zero real-world value</strong>. You cannot deposit money, and you cannot withdraw winnings.
                    </p>
                    <p className="text-destructive font-semibold">
                      This is NOT real money gambling. Virtual coins cannot be exchanged for cash, prizes, or anything of value.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-10 h-10 text-secondary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Healthy Gaming Habits</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Set time limits for your gaming sessions</li>
                      <li>• Take regular breaks every 30-60 minutes</li>
                      <li>• Never treat this as a way to earn money</li>
                      <li>• Remember it's just for fun and entertainment</li>
                      <li>• If gaming stops being enjoyable, take a break</li>
                      <li>• Balance gaming with other activities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Age Restriction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You must be <strong>18 years or older</strong> to access EPOCKET. We verify age at entry to ensure compliance with legal requirements. Even though no real money is involved, we maintain this standard to promote responsible gaming.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Recognizing Problem Gaming</h2>
                <p className="text-muted-foreground mb-4">Even with free games, excessive gaming can be problematic. Watch for these signs:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Spending excessive time gaming instead of other activities</li>
                  <li>• Feeling anxious or irritable when not gaming</li>
                  <li>• Neglecting work, school, or personal relationships</li>
                  <li>• Using gaming to escape problems or negative feelings</li>
                  <li>• Lying about the amount of time spent gaming</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  If you recognize these signs, consider taking a break or seeking support from friends, family, or professional resources.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6 text-center">
                <p className="text-lg font-semibold mb-2">Need Help?</p>
                <p className="text-muted-foreground">
                  If you or someone you know has a gambling problem, please contact:
                </p>
                <p className="text-primary font-bold mt-3">
                  National Gambling Helpline: 1-800-522-4700
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Available 24/7 for confidential support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
