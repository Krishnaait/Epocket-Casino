import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Award, Lock } from "lucide-react";

export default function Achievements() {
  const { isAuthenticated } = useAuth();
  const { data: allAchievements } = trpc.achievements.getAll.useQuery();
  const { data: userAchievements } = trpc.achievements.getUserAchievements.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  const unlockedIds = new Set(userAchievements?.map((a) => a.achievementId) || []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Achievements</h1>
            <p className="text-lg text-muted-foreground">Unlock badges by playing games</p>
            {isAuthenticated && userAchievements && (
              <p className="text-primary font-semibold mt-2">Unlocked: {userAchievements.length} / {allAchievements?.length || 0}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allAchievements?.map((achievement) => {
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
