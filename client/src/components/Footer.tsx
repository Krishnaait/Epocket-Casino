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
                <Link href="/games">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Games
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/how-to-play">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    How to Play
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/leaderboard">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Leaderboard
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/achievements">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Achievements
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Responsible Gaming
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Terms & Conditions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Disclaimer
                  </a>
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
        </div>
      </div>
    </footer>
  );
}
