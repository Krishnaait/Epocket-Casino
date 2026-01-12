import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { Trophy } from "lucide-react";

export default function Leaderboard() {
  const { data: leaderboard, isLoading } = trpc.leaderboard.get.useQuery({ limit: 100 });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
            <p className="text-lg text-muted-foreground">Top players by points earned</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top 100 Players</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p className="text-center text-muted-foreground">Loading...</p>
              ) : !leaderboard || leaderboard.length === 0 ? (
                <p className="text-center text-muted-foreground">No players yet. Be the first!</p>
              ) : (
                <div className="space-y-2">
                  {leaderboard.map((player, index) => (
                    <div key={player.userId} className="flex items-center justify-between p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${index < 3 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold">{player.userName || "Anonymous"}</p>
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
