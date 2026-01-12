import { Link } from "wouter";
import { Button } from "./ui/button";
import { Coins, Menu, X } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const { data: credits } = trpc.credits.get.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="EPOCKET Logo" className="w-10 h-10" />
          <span className="font-bold text-xl">EPOCKET</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/games" className="text-sm font-medium hover:text-primary transition-colors">
            Games
          </Link>
          <Link href="/leaderboard" className="text-sm font-medium hover:text-primary transition-colors">
            Leaderboard
          </Link>
          <Link href="/achievements" className="text-sm font-medium hover:text-primary transition-colors">
            Achievements
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </Link>
        </div>

        {/* Credits & Auth */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated && credits && (
            <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
              <Coins className="w-5 h-5 text-primary" />
              <span className="font-bold text-primary">{credits.credits.toLocaleString()}</span>
            </div>
          )}
          {!isAuthenticated && (
            <Button asChild variant="default">
              <a href={getLoginUrl()}>Sign In</a>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container py-4 space-y-3">
            {isAuthenticated && credits && (
              <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                <Coins className="w-5 h-5 text-primary" />
                <span className="font-bold text-primary">{credits.credits.toLocaleString()}</span>
              </div>
            )}
            <Link href="/" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/games" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Games
            </Link>
            <Link href="/leaderboard" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Leaderboard
            </Link>
            <Link href="/achievements" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Achievements
            </Link>
            <Link href="/about" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/faq" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
            {!isAuthenticated && (
              <Button asChild variant="default" className="w-full">
                <a href={getLoginUrl()}>Sign In</a>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
