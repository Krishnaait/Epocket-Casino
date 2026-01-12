import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { AlertCircle } from "lucide-react";

export default function AgeGate() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified");
    if (ageVerified) {
      setOpen(false);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("ageVerified", "true");
    setOpen(false);
  };

  const handleDecline = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <Dialog open={open} onOpenChange={() => {}} modal={true}>
      <DialogContent className="sm:max-w-md" showCloseButton={false}>
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary">
              <AlertCircle className="w-8 h-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">Age Verification Required</DialogTitle>
          <DialogDescription className="text-center space-y-4 pt-4">
            <p className="text-base">
              You must be <strong className="text-primary">18 years or older</strong> to access this website.
            </p>
            <p className="text-sm text-muted-foreground">
              This is a <strong>free-to-play social casino</strong> for entertainment purposes only.
              <br />
              <strong className="text-destructive">No real money gambling is involved.</strong>
            </p>
            <p className="text-xs text-muted-foreground">
              By clicking "I am 18+", you confirm that you meet the age requirement and agree to our Terms & Conditions.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          <Button onClick={handleConfirm} size="lg" className="w-full">
            I am 18+ Years Old
          </Button>
          <Button onClick={handleDecline} variant="outline" size="lg" className="w-full">
            I am Under 18
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
