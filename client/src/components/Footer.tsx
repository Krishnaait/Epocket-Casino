import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-primary">EPOCKET</h3>
            <p className="text-sm text-muted-foreground">
              Free-to-play social casino games for entertainment only.
            </p>
            <p className="text-xs text-muted-foreground font-bold">
              18+ Only | No Real Money
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-muted-foreground hover:text-primary transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/how-to-play" className="text-muted-foreground hover:text-primary transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-muted-foreground hover:text-primary transition-colors">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-muted-foreground hover:text-primary transition-colors">
                  Responsible Gaming
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © 2025 EPOCKETPAY SOLUTION PRIVATE LIMITED. All rights reserved.
              <br />
              CIN: U93000WB2019PTC231194 | PAN: AAFCE4335G
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              <strong className="text-destructive">
                No Real Money Gambling | Virtual Coins Only | For Entertainment Purposes Only
              </strong>
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-border/40">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Legal Disclaimer:</strong> This business is completely operated by EPOCKETPAY SOLUTION PRIVATE LIMITED and does not affiliate with any other brand, company, or organization. All trademarks, logos, and content are the exclusive property of EPOCKETPAY SOLUTION PRIVATE LIMITED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
