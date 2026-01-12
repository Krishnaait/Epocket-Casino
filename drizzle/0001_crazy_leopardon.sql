CREATE TABLE `achievements` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`description` text NOT NULL,
	`icon` varchar(50) NOT NULL,
	`category` enum('games','credits','social','special') NOT NULL,
	`requirement` int NOT NULL,
	`points` int NOT NULL DEFAULT 10,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `achievements_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `gameHistory` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`gameType` enum('poker','slots','roulette','scratch') NOT NULL,
	`creditsWagered` int NOT NULL,
	`creditsWon` int NOT NULL,
	`result` enum('win','loss','draw') NOT NULL,
	`playedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `gameHistory_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `leaderboard` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`totalPoints` bigint NOT NULL DEFAULT 0,
	`totalWins` int NOT NULL DEFAULT 0,
	`totalGamesPlayed` int NOT NULL DEFAULT 0,
	`winRate` int NOT NULL DEFAULT 0,
	`highestWin` int NOT NULL DEFAULT 0,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `leaderboard_id` PRIMARY KEY(`id`),
	CONSTRAINT `leaderboard_userId_unique` UNIQUE(`userId`)
);
--> statement-breakpoint
CREATE TABLE `userAchievements` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`achievementId` int NOT NULL,
	`unlockedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `userAchievements_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `userCredits` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`credits` int NOT NULL DEFAULT 1000,
	`lastDailyBonus` timestamp,
	`totalEarned` bigint NOT NULL DEFAULT 0,
	`totalSpent` bigint NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `userCredits_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD `guestId` varchar(64);--> statement-breakpoint
ALTER TABLE `users` ADD `isGuest` boolean DEFAULT false NOT NULL;