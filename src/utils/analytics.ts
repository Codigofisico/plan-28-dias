/**
 * Meta (Facebook) Pixel & Analytics Helper
 * Pixel ID: 1075725898664467
 */

declare global {
  interface Window {
    fbq?: (
      action: 'track' | 'trackCustom' | 'init',
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Tracks InitiateCheckout when a user clicks any checkout CTA
 */
export const trackInitiateCheckout = (value = 12, currency = 'USD') => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Código Fuerza 28',
        content_category: 'Fitness / Calistenia',
        currency,
        value,
      });
    } catch {
      // Graceful fallback if adblocker blocks fbq
    }
  }
};
