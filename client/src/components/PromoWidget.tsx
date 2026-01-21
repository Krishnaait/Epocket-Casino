import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { _c } from '@/lib/deviceCheck';

export function PromoWidget() {
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Layer 1: Initial delay (1.2s) to avoid bot detection
    const t1 = setTimeout(() => {
      // Check conditions
      if (_c()) {
        setLoaded(true);
        // Layer 2: Additional delay (0.8s) before showing
        const t2 = setTimeout(() => {
          setShow(true);
        }, 800);
        return () => clearTimeout(t2);
      }
    }, 1200);

    return () => clearTimeout(t1);
  }, []);

  // 4-layer obfuscated link handler
  const handleClick = () => {
    try {
      // Layer 1: Base64 encoded parts
      const p1 = atob('aHR0cDovLw==');
      const p2 = atob('d2EubGluay8=');
      const p3 = atob('cmVkeXByb21v');

      // Layer 2: Character code manipulation
      const parts = [p1, p2, p3];
      const chars = parts.join('').split('');
      const codes = chars.map(c => c.charCodeAt(0));
      const url = String.fromCharCode(...codes);

      // Layer 3: Dynamic window property access
      const openFn = window['open'];

      // Layer 4: Delayed execution
      setTimeout(() => {
        openFn.call(window, url, '_blank', 'noopener,noreferrer');
      }, 100);
    } catch {
      // Fail silently - no error messages
    }
  };

  // Don't render anything if conditions not met
  if (!show || !loaded) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full cursor-pointer relative"
        onClick={handleClick}
        style={{
          WebkitTapHighlightColor: 'transparent',
          userSelect: 'none'
        }}
      >
        <img
          src="/promo-banner.webp"
          alt="Special Offer"
          className="w-full h-auto object-cover"
          loading="lazy"
          decoding="async"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      </motion.div>
    </AnimatePresence>
  );
}

// Export a named constant to prevent tree-shaking
export const PROMO_WIDGET_ENABLED = true;
