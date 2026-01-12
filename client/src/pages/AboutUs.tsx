import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Target, Eye, CheckCircle2, Users, Sparkles, TrendingUp } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About EPOCKET Social Casino</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bringing the excitement of casino entertainment to everyone, completely free and risk-free
            </p>
          </div>

          <div className="space-y-8">
            {/* Our Story */}
            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start gap-6">
                  <Heart className="w-14 h-14 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        EPOCKET Social Casino was born from a simple yet powerful idea: everyone deserves to experience the thrill and excitement of casino games without the financial risks associated with real money gambling. Founded in 2019, we set out to create a platform that captures the authentic casino atmosphere while maintaining a completely free-to-play model.
                      </p>
                      <p>
                        Our journey began when our founders recognized a growing demand for entertainment that combines the social aspects of gaming with the excitement of casino-style gameplay. We understood that millions of people enjoy the strategy, suspense, and social interaction that casino games provide, but many are uncomfortable with the financial stakes involved in traditional gambling.
                      </p>
                      <p>
                        Today, EPOCKET has evolved into a comprehensive social casino platform offering classic games like Texas Hold'em Poker, Slots, Roulette, and Scratch Cards. Every game is designed to deliver authentic casino excitement using virtual coins that hold no real-world monetary value. Our community continues to grow as players discover that entertainment and excitement don't require financial risk.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Vision */}
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-8">
                <div className="flex items-start gap-6">
                  <Eye className="w-14 h-14 text-secondary flex-shrink-0" />
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        We envision a world where casino-style entertainment is accessible to everyone, regardless of their financial situation. EPOCKET aims to become the leading global platform for social casino gaming, where millions of players can connect, compete, and enjoy themselves in a safe, responsible, and completely free environment.
                      </p>
                      <p>
                        Our vision extends beyond just providing games. We aspire to build a vibrant community where players from all walks of life can share their passion for casino games, celebrate achievements together, and form lasting friendships. We see a future where social casino gaming is recognized as a legitimate form of entertainment that brings joy without the negative consequences associated with real money gambling.
                      </p>
                      <p>
                        As we grow, we remain committed to innovation, continuously expanding our game library, introducing new social features, and leveraging cutting-edge technology to deliver the most immersive and engaging experience possible. We believe that by staying true to our core values of transparency, fairness, and responsibility, EPOCKET will set the standard for what social casino entertainment should be.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Mission */}
            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start gap-6">
                  <Target className="w-14 h-14 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Our mission is to provide a safe, fun, and responsible social casino experience where players can enjoy their favorite games without any financial commitment or risk. We are dedicated to creating an environment that prioritizes player well-being, transparency, and fair play above all else.
                      </p>
                      <p>
                        We achieve this mission by offering a completely free-to-play platform with no hidden costs, no deposits, and no withdrawals. Every player starts with generous virtual credits, receives daily bonuses, and can continue playing indefinitely without ever spending a single cent. Our games are designed purely for entertainment, and we make it crystal clear that virtual coins have absolutely no real-world value.
                      </p>
                      <p>
                        Beyond entertainment, we are committed to promoting responsible gaming practices. We implement strict age verification (18+), provide clear disclaimers throughout the platform, and encourage healthy gaming habits. Our mission includes educating players about the distinction between social casino gaming and real money gambling, ensuring everyone understands that EPOCKET is purely for fun.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Values */}
            <Card>
              <CardContent className="pt-8">
                <div className="flex items-start gap-6">
                  <Sparkles className="w-14 h-14 text-secondary flex-shrink-0" />
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      These principles guide every decision we make and define who we are as a company:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold text-lg mb-2">Transparency</h3>
                            <p className="text-sm text-muted-foreground">
                              We believe in complete honesty with our players. No hidden costs, no surprise charges, no fine print. What you see is what you get—a 100% free entertainment platform.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold text-lg mb-2">Fair Play</h3>
                            <p className="text-sm text-muted-foreground">
                              All our games use certified random number generators (RNG) to ensure completely fair outcomes. Every player has an equal chance based solely on game rules and luck.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold text-lg mb-2">Responsibility</h3>
                            <p className="text-sm text-muted-foreground">
                              We promote healthy gaming habits through age verification, clear disclaimers, and educational content about responsible entertainment.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold text-lg mb-2">Entertainment First</h3>
                            <p className="text-sm text-muted-foreground">
                              Our sole purpose is to provide fun and enjoyment. We don't profit from player losses because there are no real losses—only virtual coins used for entertainment.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold text-lg mb-2">Community</h3>
                            <p className="text-sm text-muted-foreground">
                              We foster a welcoming, inclusive environment where players can connect, compete on leaderboards, and celebrate achievements together.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold text-lg mb-2">Innovation</h3>
                            <p className="text-sm text-muted-foreground">
                              We continuously improve our platform, adding new games, features, and social elements to keep the experience fresh and engaging.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fair Play Commitment */}
            <Card className="border-2 border-secondary/30">
              <CardContent className="pt-8">
                <div className="flex items-start gap-6">
                  <Shield className="w-14 h-14 text-secondary flex-shrink-0" />
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Fair Play Commitment</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Fairness is the foundation of trust, and trust is essential for entertainment. At EPOCKET, we employ industry-standard random number generation (RNG) technology across all our games to ensure completely unbiased outcomes. Whether you're spinning the slots, dealing poker hands, or playing roulette, every result is determined by certified algorithms that cannot be manipulated or predicted.
                      </p>
                      <p>
                        We do not alter game outcomes based on player history, account status, or any other factor. Every spin, every deal, and every draw is independent and random. This commitment to fairness means that all players—whether new or experienced—have exactly the same odds of winning based purely on the mathematical probabilities of each game.
                      </p>
                      <p>
                        Our RNG systems are regularly tested and audited to maintain the highest standards of integrity. We believe that fair play isn't just a feature—it's a fundamental right that every player deserves.
                      </p>
                    </div>
                    <div className="mt-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                      <p className="text-sm text-destructive font-semibold text-center">
                        ⚠️ Important Reminder: This is NOT real money gambling. Virtual coins have NO real-world value and CANNOT be exchanged for cash, prizes, or anything of monetary worth.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose EPOCKET */}
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="pt-8">
                <div className="flex items-start gap-6">
                  <TrendingUp className="w-14 h-14 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Why Choose EPOCKET?</h2>
                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                      <div className="text-center p-4 bg-background/50 rounded-lg">
                        <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                        <h3 className="font-bold mb-2">100% Free</h3>
                        <p className="text-sm text-muted-foreground">
                          No deposits, no purchases, no hidden fees. Ever.
                        </p>
                      </div>
                      <div className="text-center p-4 bg-background/50 rounded-lg">
                        <Shield className="w-10 h-10 text-secondary mx-auto mb-3" />
                        <h3 className="font-bold mb-2">Safe & Secure</h3>
                        <p className="text-sm text-muted-foreground">
                          No financial risk. Your personal data is protected.
                        </p>
                      </div>
                      <div className="text-center p-4 bg-background/50 rounded-lg">
                        <Sparkles className="w-10 h-10 text-primary mx-auto mb-3" />
                        <h3 className="font-bold mb-2">Pure Entertainment</h3>
                        <p className="text-sm text-muted-foreground">
                          Designed for fun, not profit. Play responsibly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Information */}
            <div className="bg-card rounded-lg p-8 border-2 border-border text-center space-y-2">
              <h3 className="text-xl font-bold mb-4">Company Information</h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Company Name:</strong> EPOCKETPAY SOLUTION PRIVATE LIMITED
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">CIN:</strong> U93000WB2019PTC231194
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">PAN:</strong> AAFCE4335G
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Registered in India | Committed to responsible social gaming
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
