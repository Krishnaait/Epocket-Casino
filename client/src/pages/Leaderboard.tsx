import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy } from "lucide-react";
import { useState, useEffect } from "react";

interface LeaderboardEntry {
  userId: string;
  userName: string;
  totalPoints: number;
  totalWins: number;
  totalGamesPlayed: number;
  winRate: number;
}

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get guest user stats from localStorage
    const guestStats = localStorage.getItem("epocket_guest_stats");
    
    if (guestStats) {
      const stats = JSON.parse(guestStats);
      const entry: LeaderboardEntry = {
        userId: "guest",
        userName: "You (Guest Player)",
        totalPoints: stats.totalEarned || 0,
        totalWins: stats.totalWins || 0,
        totalGamesPlayed: stats.totalGames || 0,
        winRate: stats.totalGames > 0 ? Math.round((stats.totalWins / stats.totalGames) * 100) : 0
      };
      setLeaderboard([entry]);
    }
    
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
            <p className="text-lg text-muted-foreground">Your gaming statistics</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Stats</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p className="text-center text-muted-foreground">Loading...</p>
              ) : leaderboard.length === 0 ? (
                <p className="text-center text-muted-foreground">Start playing games to see your stats here!</p>
              ) : (
                <div className="space-y-2">
                  {leaderboard.map((player, index) => (
                    <div key={player.userId} className="flex items-center justify-between p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-primary text-primary-foreground">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold">{player.userName}</p>
                          <p className="text-sm text-muted-foreground">{player.totalGamesPlayed} games | {player.winRate}% win rate</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{Number(player.totalPoints).toLocaleString()} pts</p>
                        <p className="text-sm text-muted-foreground">{player.totalWins} wins</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-center text-sm text-muted-foreground mt-6">Points are based on virtual coins won. No real value.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
