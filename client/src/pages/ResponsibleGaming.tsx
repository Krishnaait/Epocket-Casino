import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, Shield, AlertCircle, Phone, Users, Brain, CheckCircle } from "lucide-react";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Responsible Gaming</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your well-being is our priority. Learn how to enjoy EPOCKET Social Casino safely and responsibly.
            </p>
          </div>

          {/* Critical Reminder */}
          <Card className="mb-8 border-2 border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-12 h-12 text-destructive flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-destructive">Critical Reminder: This is NOT Real Gambling</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                    EPOCKET is a <strong>100% free-to-play social casino</strong> designed exclusively for entertainment purposes. Our platform operates fundamentally differently from real money gambling websites. Here's what makes us different:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-background/80 rounded-lg">
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        What EPOCKET IS
                      </h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Free entertainment platform</li>
                        <li>• Virtual coins with zero value</li>
                        <li>• No deposits or payments required</li>
                        <li>• No withdrawals or cash-outs</li>
                        <li>• Pure fun and social competition</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-background/80 rounded-lg">
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-destructive" />
                        What EPOCKET is NOT
                      </h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Not a real money gambling site</li>
                        <li>• Not a way to earn income</li>
                        <li>• Not a financial investment</li>
                        <li>• Not practice for real casinos</li>
                        <li>• Not a source of real prizes</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-destructive/20 border border-destructive/40 rounded-lg">
                    <p className="font-bold text-center text-destructive">
                      ⚠️ Virtual coins cannot be exchanged for money, prizes, goods, services, or anything of real-world value. Period.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Commitment */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Our Commitment to Responsible Gaming
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                At EPOCKET, we believe that gaming should always be a positive, enjoyable experience. While our platform uses virtual currency with no real-world value, we recognize that any form of gaming—even free entertainment—should be approached responsibly. We are committed to providing a safe environment where players can enjoy casino-style games without financial risk.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our responsible gaming framework is built on three core principles: <strong className="text-foreground">transparency</strong> (clear communication about the nature of our games), <strong className="text-foreground">balance</strong> (encouraging healthy gaming habits), and <strong className="text-foreground">support</strong> (providing resources for those who need help). We continuously monitor our platform to ensure these principles are upheld.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-bold mb-2">Transparency</h3>
                  <p className="text-sm text-muted-foreground">
                    Clear disclaimers on every page. No hidden costs. No misleading claims about winning real money.
                  </p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h3 className="font-bold mb-2">Balance</h3>
                  <p className="text-sm text-muted-foreground">
                    Encouraging breaks, time management, and healthy gaming habits that don't interfere with daily life.
                  </p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-bold mb-2">Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Providing resources, helpline information, and guidance for anyone concerned about their gaming habits.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Healthy Gaming Habits */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Developing Healthy Gaming Habits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Even though EPOCKET involves no real money, it's important to maintain healthy boundaries with any form of entertainment. Here are evidence-based strategies for responsible gaming:
              </p>

              <div className="space-y-4">
                <div className="p-5 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    1. Set Time Limits Before You Start
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    Decide how long you want to play before you begin your session. Setting a clear endpoint helps prevent "just one more game" syndrome. Use your phone's timer or alarm to remind you when your planned session is over.
                  </p>
                  <div className="bg-background/50 p-3 rounded border border-primary/10">
                    <p className="text-sm font-semibold mb-1">Recommended Session Lengths:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Short break:</strong> 15-20 minutes</li>
                      <li>• <strong>Leisure session:</strong> 30-45 minutes</li>
                      <li>• <strong>Extended play:</strong> 60-90 minutes (with breaks)</li>
                    </ul>
                  </div>
                </div>

                <div className="p-5 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-secondary" />
                    2. Take Regular Breaks
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    Continuous gaming can lead to fatigue, eye strain, and decreased enjoyment. Take a 5-10 minute break every 30-45 minutes. Stand up, stretch, look away from the screen, and give your mind a rest.
                  </p>
                  <div className="bg-background/50 p-3 rounded border border-secondary/10">
                    <p className="text-sm font-semibold mb-1">During Your Break:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Stretch your arms, neck, and back</li>
                      <li>• Look at something 20 feet away for 20 seconds (20-20 rule)</li>
                      <li>• Drink water and have a healthy snack</li>
                      <li>• Step outside for fresh air if possible</li>
                    </ul>
                  </div>
                </div>

                <div className="p-5 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    3. Balance Gaming with Other Activities
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    Gaming should be one of many activities in your life, not the primary one. Make sure you're maintaining relationships, pursuing hobbies, exercising, and fulfilling responsibilities. If gaming starts to crowd out other important activities, it's time to reassess.
                  </p>
                  <div className="bg-background/50 p-3 rounded border border-primary/10">
                    <p className="text-sm font-semibold mb-1">Healthy Balance Checklist:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Spending quality time with family and friends</li>
                      <li>• Engaging in physical exercise or outdoor activities</li>
                      <li>• Pursuing creative hobbies or learning new skills</li>
                      <li>• Completing work, school, or household responsibilities</li>
                      <li>• Getting 7-9 hours of sleep per night</li>
                    </ul>
                  </div>
                </div>

                <div className="p-5 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    4. Play for Fun, Not to Escape
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Gaming should enhance your life, not help you avoid it. If you find yourself using EPOCKET to escape stress, anxiety, boredom, or negative emotions, this may be a warning sign. Instead, address the underlying issues through healthier coping mechanisms like talking to friends, exercising, or seeking professional support.
                  </p>
                </div>

                <div className="p-5 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    5. Never Confuse Virtual with Real
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Always remember that EPOCKET uses virtual currency with zero real-world value. Winning or losing virtual coins should never feel like winning or losing real money. If you start to feel emotional attachment to virtual credits, take a step back and remind yourself this is entertainment only.
                  </p>
                </div>

                <div className="p-5 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-secondary" />
                    6. Don't Let Gaming Affect Relationships
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If friends or family express concern about your gaming habits, listen to them. They may notice patterns you don't see. Gaming should never cause arguments, neglect of loved ones, or social isolation. If it does, it's time to cut back.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Age Restriction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Age Restriction: 18+ Only
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                EPOCKET requires all users to be <strong className="text-foreground">18 years of age or older</strong>. This policy applies regardless of the fact that our platform involves no real money. We enforce this restriction for several important reasons:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-bold mb-2">Legal Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Many jurisdictions require age restrictions on casino-style games, even when no real money is involved. We comply with all applicable laws and regulations.
                  </p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h3 className="font-bold mb-2">Developmental Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Young people's brains are still developing, making them more vulnerable to forming unhealthy gaming patterns. Age restrictions help protect minors.
                  </p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-bold mb-2">Preventing Normalization</h3>
                  <p className="text-sm text-muted-foreground">
                    Early exposure to casino-style games may normalize gambling behaviors. We don't want to contribute to future gambling problems.
                  </p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h3 className="font-bold mb-2">Industry Best Practice</h3>
                  <p className="text-sm text-muted-foreground">
                    Responsible gaming organizations worldwide recommend 18+ age limits for all casino-style content, regardless of monetary involvement.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                <p className="text-sm text-center font-semibold">
                  ⚠️ If you are under 18, please leave this website immediately. Parents and guardians should monitor their children's internet usage.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recognizing Problem Gaming */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                Recognizing Problem Gaming Behaviors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Even with free-to-play games that involve no real money, excessive or compulsive gaming can negatively impact your life. Problem gaming exists on a spectrum, from mild concerns to serious issues requiring professional intervention. Being aware of warning signs is the first step toward maintaining healthy habits.
              </p>
              
              <div className="space-y-4">
                <div className="p-5 bg-destructive/5 rounded-lg border border-destructive/20">
                  <h3 className="font-bold text-lg mb-3">Early Warning Signs</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    These behaviors may indicate you're developing unhealthy gaming patterns:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-destructive">•</span> Playing for longer periods than you intended</li>
                    <li className="flex gap-2"><span className="text-destructive">•</span> Thinking about the games when you're not playing</li>
                    <li className="flex gap-2"><span className="text-destructive">•</span> Feeling restless or irritable when you can't play</li>
                    <li className="flex gap-2"><span className="text-destructive">•</span> Gaming to escape stress, anxiety, or boredom</li>
                    <li className="flex gap-2"><span className="text-destructive">•</span> Neglecting other hobbies or interests you used to enjoy</li>
                    <li className="flex gap-2"><span className="text-destructive">•</span> Staying up late or losing sleep to play games</li>
                  </ul>
                </div>

                <div className="p-5 bg-destructive/10 rounded-lg border border-destructive/30">
                  <h3 className="font-bold text-lg mb-3 text-destructive">Serious Warning Signs</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    These behaviors indicate a more serious problem that may require professional help:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-destructive">•</span> Lying to friends or family about how much time you spend gaming</li>
                    <li className="flex gap-2"><span className="text-destructive">•</span> Neglecting work, school, or important responsibilities</li>
                    <li className="flex gap-2"><span className="text-destructive">•</span> Experiencing relationship problems due to gaming</li>
                    <li className="flex gap-2"><span className="text-destructive">•</span> Feeling anxious, depressed, or guilty about your gaming habits</li>
                    <li className="flex gap-2"><span className="text-destructive">•</span> Isolating yourself from friends and family to play games</li>
                    <li className="flex gap-2"><span className="text-destructive">•</span> Unable to cut back despite wanting to or trying to</li>
                    <li className="flex gap-2"><span className="text-destructive">•</span> Using gaming as your primary coping mechanism for life problems</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-5 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="font-bold text-lg mb-3">What to Do If You Recognize These Signs</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">1.</span>
                    <span><strong className="text-foreground">Acknowledge the issue.</strong> Recognizing you have a problem is the first and most important step toward change.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">2.</span>
                    <span><strong className="text-foreground">Take a break.</strong> Stop playing for at least a week to gain perspective and see how you feel without gaming.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">3.</span>
                    <span><strong className="text-foreground">Talk to someone.</strong> Share your concerns with a trusted friend, family member, or mental health professional.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">4.</span>
                    <span><strong className="text-foreground">Seek professional help.</strong> Contact a gambling helpline or therapist who specializes in behavioral addictions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">5.</span>
                    <span><strong className="text-foreground">Address underlying issues.</strong> Often, excessive gaming is a symptom of deeper problems like stress, anxiety, depression, or loneliness.</span>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Help Resources */}
          <Card className="mb-8 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Phone className="w-6 h-6" />
                Help & Support Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                If you or someone you know is struggling with gambling or gaming problems, help is available. These organizations provide free, confidential support 24/7:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-background/80 rounded-lg border border-primary/20">
                  <h3 className="font-bold text-lg mb-2">National Council on Problem Gambling</h3>
                  <p className="text-2xl font-bold text-primary mb-2">1-800-522-4700</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    24/7 confidential helpline providing crisis intervention, information, and referrals to local treatment services.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Website: <span className="text-primary">www.ncpgambling.org</span>
                  </p>
                </div>

                <div className="p-5 bg-background/80 rounded-lg border border-secondary/20">
                  <h3 className="font-bold text-lg mb-2">Gamblers Anonymous</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Free peer support groups for people with gambling problems. Find local meetings and online support communities.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Website: <span className="text-secondary">www.gamblersanonymous.org</span>
                  </p>
                </div>

                <div className="p-5 bg-background/80 rounded-lg border border-primary/20">
                  <h3 className="font-bold text-lg mb-2">SAMHSA National Helpline</h3>
                  <p className="text-2xl font-bold text-primary mb-2">1-800-662-4357</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Substance Abuse and Mental Health Services Administration. Free, confidential treatment referral and information service.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Website: <span className="text-primary">www.samhsa.gov</span>
                  </p>
                </div>

                <div className="p-5 bg-background/80 rounded-lg border border-secondary/20">
                  <h3 className="font-bold text-lg mb-2">Crisis Text Line</h3>
                  <p className="text-2xl font-bold text-secondary mb-2">Text HOME to 741741</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Free 24/7 text-based crisis support for anyone in crisis, including those struggling with gaming or gambling issues.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Website: <span className="text-secondary">www.crisistextline.org</span>
                  </p>
                </div>
              </div>

              <div className="p-5 bg-primary/10 border border-primary/30 rounded-lg">
                <p className="text-center font-semibold mb-2">Remember: Seeking help is a sign of strength, not weakness.</p>
                <p className="text-sm text-center text-muted-foreground">
                  These services are completely confidential and free. Trained counselors are available to listen, provide support, and connect you with resources in your area.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Final Message */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="pt-6 text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Your Well-Being Matters Most</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                At EPOCKET, we want every player to have a positive, enjoyable experience. Gaming should add fun to your life, not create problems. If you ever feel that your gaming habits are becoming unhealthy, please don't hesitate to reach out for support. We're here to provide entertainment, but your health and happiness always come first.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Questions or concerns? Visit our <strong className="text-foreground">Contact page</strong> or <strong className="text-foreground">FAQ</strong> for more information.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
