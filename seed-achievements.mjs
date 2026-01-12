import { drizzle } from "drizzle-orm/mysql2";
import { achievements } from "./drizzle/schema.ts";

const db = drizzle(process.env.DATABASE_URL);

const achievementData = [
  // Games category
  { name: "First Spin", description: "Play your first game", icon: "🎰", category: "games", requirement: 1, points: 10 },
  { name: "Novice Player", description: "Play 10 games", icon: "🎮", category: "games", requirement: 10, points: 25 },
  { name: "Experienced Player", description: "Play 50 games", icon: "🏆", category: "games", requirement: 50, points: 50 },
  { name: "Veteran Player", description: "Play 100 games", icon: "👑", category: "games", requirement: 100, points: 100 },
  { name: "Master Player", description: "Play 500 games", icon: "💎", category: "games", requirement: 500, points: 250 },
  
  // Credits category
  { name: "First Win", description: "Win your first game", icon: "🌟", category: "credits", requirement: 1, points: 15 },
  { name: "Lucky Streak", description: "Win 10 games", icon: "✨", category: "credits", requirement: 10, points: 30 },
  { name: "Big Winner", description: "Win 2000 credits in a single game", icon: "💰", category: "credits", requirement: 2000, points: 75 },
  { name: "Millionaire", description: "Earn 10,000 total credits", icon: "💸", category: "credits", requirement: 10000, points: 150 },
  
  // Social category
  { name: "Daily Dedication", description: "Claim daily bonus 7 days in a row", icon: "📅", category: "social", requirement: 7, points: 50 },
  { name: "Top 100", description: "Reach top 100 on leaderboard", icon: "🥉", category: "social", requirement: 100, points: 100 },
  { name: "Top 10", description: "Reach top 10 on leaderboard", icon: "🥈", category: "social", requirement: 10, points: 200 },
  { name: "Champion", description: "Reach #1 on leaderboard", icon: "🥇", category: "social", requirement: 1, points: 500 },
  
  // Special category
  { name: "Poker Pro", description: "Win 25 poker games", icon: "♠️", category: "special", requirement: 25, points: 80 },
  { name: "Slots Master", description: "Win 25 slots games", icon: "🎰", category: "special", requirement: 25, points: 80 },
  { name: "Roulette Expert", description: "Win 25 roulette games", icon: "🎡", category: "special", requirement: 25, points: 80 },
  { name: "Scratch Specialist", description: "Win 25 scratch card games", icon: "🎫", category: "special", requirement: 25, points: 80 },
];

try {
  console.log("Seeding achievements...");
  await db.insert(achievements).values(achievementData);
  console.log(`Successfully seeded ${achievementData.length} achievements!`);
  process.exit(0);
} catch (error) {
  console.error("Error seeding achievements:", error);
  process.exit(1);
}
