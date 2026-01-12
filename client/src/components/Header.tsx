import { Link } from "wouter";
import { Button } from "./ui/button";
import { Coins, Menu, X, Gift } from "lucide-react";
import { useState, useEffect } from "react";
import { getGuestCredits, topUpGuestCredits } from "@/lib/guestCredits";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [credits, setCredits] = useState(getGuestCredits());
  const [isTopUpPending, setIsTopUpPending] = useState(false);

  // Update credits from localStorage on mount and when storage changes
  useEffect(() => {
    const updateCredits = () => setCredits(getGuestCredits());
    window.addEventListener('storage', updateCredits);
    window.addEventListener('creditsUpdated', updateCredits);
    return () => {
      window.removeEventListener('storage', updateCredits);
      window.removeEventListener('creditsUpdated', updateCredits);
    };
  }, []);

  const handleTopUp = async () => {
    try {
      setIsTopUpPending(true);
      const updated = topUpGuestCredits();
      setCredits(updated);
      window.dispatchEvent(new Event('creditsUpdated'));
    } catch (error) {
      console.error("Failed to top up credits", error);
    } finally {
      setIsTopUpPending(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="EPOCKET Logo" className="w-12 h-12 sm:w-14 sm:h-14" />
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
            EPOCKET
          </span>
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
            About Us
          </Link>
          <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </Link>
        </div>

        {/* Credits & Top-Up */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <Coins className="w-4 h-4 text-primary" />
            <span className="font-semibold text-primary">{credits.credits}</span>
          </div>

          {credits.credits < 100 && (
            <Button
              onClick={handleTopUp}
              variant="default"
              size="sm"
              className="flex items-center space-x-2"
              disabled={isTopUpPending}
            >
              <Gift className="w-4 h-4" />
              <span>Free Top-Up</span>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container py-4 space-y-3">
            <div className="flex items-center space-x-2 text-sm mb-4">
              <Coins className="w-4 h-4 text-primary" />
              <span className="font-semibold text-primary">{credits.credits}</span>
            </div>

            {credits.credits < 100 && (
              <Button
                onClick={handleTopUp}
                variant="default"
                size="sm"
                className="w-full flex items-center justify-center space-x-2"
                disabled={isTopUpPending}
              >
                <Gift className="w-4 h-4" />
                <span>Free Top-Up (500 Credits)</span>
              </Button>
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
              About Us
            </Link>
            <Link href="/faq" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
