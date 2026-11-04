import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateDiscount,
  validateHotmartCheckoutUrl,
  getNextImageIndex,
  getPreviousImageIndex,
  getScarcityDetails
} from './pricing';
import { siteConfig } from '../siteConfig';

test('pricing calculations match business specifications ($53 to $6.99 = 87% discount and $46.01 savings)', () => {
  const result = calculateDiscount(53, 6.99);
  assert.equal(result.discountPercent, 87);
  assert.equal(Number(result.savings.toFixed(2)), 46.01);
  assert.equal(siteConfig.pricing.regularPrice, 53);
  assert.equal(siteConfig.pricing.discountedPrice, 6.99);
  assert.equal(siteConfig.pricing.discountPercent, 87);
  assert.equal(siteConfig.pricing.savings, 46.01);
});

test('hotmart checkout URL strictly includes checkoutMode=10', () => {
  const check = validateHotmartCheckoutUrl(siteConfig.pricing.checkoutUrl);
  assert.equal(check.isValid, true);
  assert.equal(siteConfig.pricing.checkoutUrl, 'https://pay.hotmart.com/X108167592L?checkoutMode=10');
});

test('gallery circular navigation bounds behave correctly', () => {
  assert.equal(getNextImageIndex(0, 8), 1);
  assert.equal(getNextImageIndex(7, 8), 0); // wrap around
  assert.equal(getPreviousImageIndex(0, 8), 7); // wrap to end
  assert.equal(getPreviousImageIndex(3, 8), 2);
});

test('siteConfig contains 4 bonuses, 10 chapters and 8 content preview images', () => {
  assert.equal(siteConfig.bonuses.length, 4);
  assert.equal(siteConfig.chapters.length, 10);
  assert.equal(siteConfig.contentPreviews.length, 8);
  assert.equal(siteConfig.programWeeks.length, 4);
});

test('scarcity calculation accurately computes remaining spots, percentage and urgency', () => {
  const cfg = siteConfig.conversionWidgets.scarcity;
  const scarcity = getScarcityDetails(cfg.totalSpots, cfg.reservedSpots);
  assert.equal(scarcity.totalSpots, 50);
  assert.equal(scarcity.reservedSpots, 46);
  assert.equal(scarcity.remainingSpots, 4);
  assert.equal(scarcity.percentageReserved, 92);
  assert.equal(scarcity.isUrgent, true);

  // Boundary checks
  const safeOverflow = getScarcityDetails(50, 55);
  assert.equal(safeOverflow.remainingSpots, 0);
  assert.equal(safeOverflow.percentageReserved, 100);

  const safeZero = getScarcityDetails(50, -5);
  assert.equal(safeZero.remainingSpots, 50);
  assert.equal(safeZero.percentageReserved, 0);
});
