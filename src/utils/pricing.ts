/**
 * Pure calculations and validation rules for Código Fuerza 28 sales page
 */

export interface PriceCalculation {
  regularPrice: number;
  discountedPrice: number;
  discountPercent: number;
  savings: number;
  currency: string;
}

export function calculateDiscount(regular: number, discounted: number): {
  discountPercent: number;
  savings: number;
} {
  if (regular <= 0) {
    throw new Error("Regular price must be greater than zero");
  }
  const savings = regular - discounted;
  const discountPercent = Math.round((savings / regular) * 100);
  return { discountPercent, savings };
}

export function validateHotmartCheckoutUrl(url: string): {
  isValid: boolean;
  hasCoupon: boolean;
  couponCode?: string;
} {
  try {
    const parsed = new URL(url);
    const hasCorrectHost = parsed.hostname.includes("hotmart.com");
    const coupon = parsed.searchParams.get("offDiscount");
    const checkoutMode = parsed.searchParams.get("checkoutMode");

    return {
      isValid: hasCorrectHost && checkoutMode === "10" && coupon === "CODIGO",
      hasCoupon: coupon === "CODIGO",
      couponCode: coupon ?? undefined
    };
  } catch {
    return { isValid: false, hasCoupon: false };
  }
}

export function getNextImageIndex(currentIndex: number, totalImages: number): number {
  if (totalImages <= 0) return 0;
  return (currentIndex + 1) % totalImages;
}

export function getPreviousImageIndex(currentIndex: number, totalImages: number): number {
  if (totalImages <= 0) return 0;
  return (currentIndex - 1 + totalImages) % totalImages;
}

export interface ScarcityDetails {
  totalSpots: number;
  reservedSpots: number;
  remainingSpots: number;
  percentageReserved: number;
  isUrgent: boolean;
}

export function getScarcityDetails(totalSpots: number, reservedSpots: number): ScarcityDetails {
  const safeTotal = Math.max(1, totalSpots);
  const safeReserved = Math.min(safeTotal, Math.max(0, reservedSpots));
  const remainingSpots = safeTotal - safeReserved;
  const percentageReserved = Math.round((safeReserved / safeTotal) * 100);

  return {
    totalSpots: safeTotal,
    reservedSpots: safeReserved,
    remainingSpots,
    percentageReserved,
    isUrgent: remainingSpots <= 5
  };
}
