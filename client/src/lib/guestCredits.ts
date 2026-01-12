/**
 * Guest credit management using localStorage
 * Credits don't persist between sessions/devices
 */

const STORAGE_KEY = 'epocket_guest_credits';
const DAILY_BONUS_KEY = 'epocket_last_daily_bonus';

export interface GuestCredits {
  credits: number;
  totalEarned: number;
  totalSpent: number;
}

export function getGuestCredits(): GuestCredits {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  
  // Initialize with 1000 credits
  const initial: GuestCredits = {
    credits: 1000,
    totalEarned: 0,
    totalSpent: 0,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return initial;
}

export function updateGuestCredits(amount: number, type: 'add' | 'subtract'): GuestCredits {
  const current = getGuestCredits();
  
  const newCredits = type === 'add' ? current.credits + amount : current.credits - amount;
  const totalEarned = type === 'add' ? current.totalEarned + amount : current.totalEarned;
  const totalSpent = type === 'subtract' ? current.totalSpent + amount : current.totalSpent;
  
  const updated: GuestCredits = {
    credits: Math.max(0, newCredits),
    totalEarned,
    totalSpent,
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function claimGuestDailyBonus(): { canClaim: boolean; creditsGranted: number } {
  const lastClaim = localStorage.getItem(DAILY_BONUS_KEY);
  const now = new Date();
  
  if (lastClaim) {
    const lastClaimDate = new Date(lastClaim);
    const hoursSince = (now.getTime() - lastClaimDate.getTime()) / (1000 * 60 * 60);
    
    if (hoursSince < 24) {
      return { canClaim: false, creditsGranted: 0 };
    }
  }
  
  // Grant 200 credits
  updateGuestCredits(200, 'add');
  localStorage.setItem(DAILY_BONUS_KEY, now.toISOString());
  
  return { canClaim: true, creditsGranted: 200 };
}

export function topUpGuestCredits(): GuestCredits {
  const current = getGuestCredits();
  
  if (current.credits >= 100) {
    throw new Error("Cannot top up when credits are 100 or more");
  }
  
  return updateGuestCredits(500, 'add');
}

export function resetGuestCredits(): void {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(DAILY_BONUS_KEY);
}
