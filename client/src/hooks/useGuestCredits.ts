import { useState, useEffect } from 'react';
import { getGuestCredits, updateGuestCredits, GuestCredits } from '@/lib/guestCredits';

export function useGuestCredits() {
  const [credits, setCredits] = useState<GuestCredits>(getGuestCredits());

  useEffect(() => {
    const handleUpdate = () => {
      setCredits(getGuestCredits());
    };

    window.addEventListener('creditsUpdated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('creditsUpdated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const addCredits = (amount: number) => {
    const updated = updateGuestCredits(amount, 'add');
    setCredits(updated);
    window.dispatchEvent(new Event('creditsUpdated'));
    return updated;
  };

  const subtractCredits = (amount: number) => {
    const updated = updateGuestCredits(amount, 'subtract');
    setCredits(updated);
    window.dispatchEvent(new Event('creditsUpdated'));
    return updated;
  };

  return {
    credits: credits.credits,
    totalEarned: credits.totalEarned,
    totalSpent: credits.totalSpent,
    addCredits,
    subtractCredits,
  };
}
