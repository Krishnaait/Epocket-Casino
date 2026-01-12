import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";

export default function Games() {
  const availableGames = [
    { id: "poker", name: "Texas Hold'em Poker", icon: "♠️", description: "Test your skills in classic poker.", available: true },
    { id: "slots", name: "Classic Slots", icon: "🎰", description: "Spin the reels and win!", available: true },
    { id: "roulette", name: "Roulette", icon: "🎡", description: "Spin the wheel of fortune!", available: true },
    { id: "scratch", name: "Scratch Cards", icon: "🎫", description: "Scratch and reveal instant wins!", available: true },
  ];

  const comingSoonGames = [
    { name: "Blackjack", icon: "🃏", description: "Beat the dealer!" },
    { name: "Baccarat", icon: "💎", description: "Player or Banker?" },
    { name: "Video Poker", icon: "🎮", description: "Slots meets poker!" },
    { name: "Wheel of Fortune", icon: "🎪", description: "Spin the big wheel!" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-primary/20 via-secondary/10 to-background">
          <div className="container text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">All Games</h1>
            <p className="text-xl text-muted-foreground">Free-to-play social casino games</p>
          </div>
        </section>
        <section className="py-16 container">
          <h2 className="text-3xl font-bold mb-8">Play Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableGames.map((game) => (
              <Card key={game.id} className="card-hover">
                <CardHeader>
                  <div className="text-6xl mb-4">{game.icon}</div>
                  <CardTitle>{game.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{game.description}</CardDescription>
                  <Button asChild className="w-full">
                    <Link href={`/play/${game.id}`} className="flex items-center justify-center"><Play className="w-4 h-4 mr-2" />Play</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="py-16 bg-card/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Coming Soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comingSoonGames.map((game, i) => (
                <Card key={i} className="opacity-75">
                  <CardHeader>
                    <div className="text-6xl mb-4">{game.icon}</div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle>{game.name}</CardTitle>
                      <Badge variant="secondary">Soon</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{game.description}</CardDescription>
                    <Button disabled className="w-full">Coming Soon</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
