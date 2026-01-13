import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Lock } from "lucide-react";
import { useState, useEffect } from "react";

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  points: number;
}

const ALL_ACHIEVEMENTS: Achievement[] = [
  { id: 1, name: "First Steps", description: "Play your first game", icon: "🎮", points: 10 },
  { id: 2, name: "Beginner", description: "Play 5 games", icon: "🌟", points: 25 },
  { id: 3, name: "Regular Player", description: "Play 25 games", icon: "⭐", points: 50 },
  { id: 4, name: "Dedicated", description: "Play 50 games", icon: "💎", points: 100 },
  { id: 5, name: "Champion", description: "Play 100 games", icon: "🏆", points: 250 },
  { id: 6, name: "First Win", description: "Win your first game", icon: "🎉", points: 15 },
  { id: 7, name: "Winning Streak", description: "Win 5 games", icon: "🔥", points: 50 },
  { id: 8, name: "Lucky Seven", description: "Win 7 games in a row", icon: "🍀", points: 100 },
  { id: 9, name: "Poker Face", description: "Play 10 Poker games", icon: "🃏", points: 30 },
  { id: 10, name: "Slot Master", description: "Play 10 Slots games", icon: "🎰", points: 30 },
  { id: 11, name: "Roulette Pro", description: "Play 10 Roulette games", icon: "🎡", points: 30 },
  { id: 12, name: "Scratch Expert", description: "Play 10 Scratch Card games", icon: "🎫", points: 30 },
  { id: 13, name: "Big Spender", description: "Spend 5000 credits", icon: "💸", points: 75 },
  { id: 14, name: "High Roller", description: "Spend 10000 credits", icon: "💰", points: 150 },
  { id: 15, name: "Millionaire", description: "Earn 10000 credits total", icon: "💵", points: 200 },
  { id: 16, name: "Daily Player", description: "Play on 7 different days", icon: "📅", points: 100 },
  { id: 17, name: "All Rounder", description: "Play all 4 game types", icon: "🎪", points: 50 }
];

export default function Achievements() {
  const [unlockedIds, setUnlockedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Get unlocked achievements from localStorage
    const unlocked = localStorage.getItem("epocket_unlocked_achievements");
    if (unlocked) {
      setUnlockedIds(new Set(JSON.parse(unlocked)));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Achievements</h1>
            <p className="text-lg text-muted-foreground">Unlock badges by playing games</p>
            <p className="text-primary font-semibold mt-2">Unlocked: {unlockedIds.size} / {ALL_ACHIEVEMENTS.length}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_ACHIEVEMENTS.map((achievement) => {
              const isUnlocked = unlockedIds.has(achievement.id);
              return (
                <Card key={achievement.id} className={isUnlocked ? "border-primary" : "opacity-60"}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="text-4xl">{achievement.icon}</div>
                      {isUnlocked ? (
                        <Badge variant="default">Unlocked</Badge>
                      ) : (
                        <Lock className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <CardTitle>{achievement.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    <p className="text-xs text-primary font-semibold">{achievement.points} points</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
