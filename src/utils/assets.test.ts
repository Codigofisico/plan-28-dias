import test from 'node:test';
import assert from 'node:assert/strict';
import { getAssetUrl } from './assets';
import { OFFICIAL_ASSETS } from '../siteAssets';

test('OFFICIAL_ASSETS contains exactly 23 official WordPress HTTPS resources', () => {
  // 1. Ebook principal
  assert.equal(OFFICIAL_ASSETS.ebookCover, 'https://codigofisico.online/wp-content/uploads/2026/10/EBOOK-PRINCIPAL.webp');

  // 2. 10 Testimonials
  assert.equal(OFFICIAL_ASSETS.testimonials.length, 10);
  for (let i = 1; i <= 10; i++) {
    const testimonial = OFFICIAL_ASSETS.testimonials[i - 1];
    assert.equal(testimonial.id, i);
    assert.equal(testimonial.url, `https://codigofisico.online/wp-content/uploads/2026/10/TESTIMONIO-${i}.webp`);
  }

  // 3. 4 Bonuses
  assert.equal(OFFICIAL_ASSETS.bonuses.length, 4);
  assert.equal(OFFICIAL_ASSETS.bonuses[0].url, 'https://codigofisico.online/wp-content/uploads/2026/10/BONO-1.webp');
  assert.equal(OFFICIAL_ASSETS.bonuses[1].url, 'https://codigofisico.online/wp-content/uploads/2026/10/BONO-2.webp');
  assert.equal(OFFICIAL_ASSETS.bonuses[2].url, 'https://codigofisico.online/wp-content/uploads/2026/10/BONO-3.webp');
  assert.equal(OFFICIAL_ASSETS.bonuses[3].url, 'https://codigofisico.online/wp-content/uploads/2026/10/BONO-4.webp');
  assert.equal(OFFICIAL_ASSETS.bonuses[0].badge, 'INCLUIDO EN TU COMPRA');

  // 4. 8 Ebook interior pages
  const expectedPages = [31, 32, 33, 42, 51, 62, 73, 76];
  assert.equal(OFFICIAL_ASSETS.ebookPages.length, 8);
  expectedPages.forEach((page, idx) => {
    assert.equal(OFFICIAL_ASSETS.ebookPages[idx].pageNumber, page);
    assert.equal(OFFICIAL_ASSETS.ebookPages[idx].url, `https://codigofisico.online/wp-content/uploads/2026/10/Pagina_${page}_-scaled.webp`);
  });

  const totalUrls = 1 + OFFICIAL_ASSETS.testimonials.length + OFFICIAL_ASSETS.bonuses.length + OFFICIAL_ASSETS.ebookPages.length;
  assert.equal(totalUrls, 23);
});

test('getAssetUrl preserves external URLs', () => {
  const wpUrl = 'https://codigofisico.online/wp-content/uploads/2026/10/EBOOK-PRINCIPAL.webp';
  assert.equal(getAssetUrl(wpUrl), wpUrl);

  const httpUrl = 'http://example.com/image.png';
  assert.equal(getAssetUrl(httpUrl), httpUrl);

  const dataUri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
  assert.equal(getAssetUrl(dataUri), dataUri);
});

test('getAssetUrl dynamically prefixes with /plan-28-dias/ when on WordPress subfolder path', () => {
  // Simulate WordPress environment
  (globalThis as unknown as { window: { location: { pathname: string } } }).window = {
    location: { pathname: '/plan-28-dias/' }
  };
  assert.equal(getAssetUrl('/images/LIBRO-CODIGO-FUERZA-28.webp'), '/plan-28-dias/images/LIBRO-CODIGO-FUERZA-28.webp');
  assert.equal(getAssetUrl('images/BONO-1.webp'), '/plan-28-dias/images/BONO-1.webp');
});

test('getAssetUrl handles empty or invalid strings safely', () => {
  assert.equal(getAssetUrl(''), '');
});

test('siteConfig fallback paths point to valid files in public/images', async () => {
  const { siteConfig } = await import('../siteConfig');
  const fs = await import('node:fs');
  const path = await import('node:path');

  // Verify external URLs are preserved
  assert.ok(siteConfig.assets.bookCover.startsWith('https://codigofisico.online/wp-content/'));
  assert.equal(siteConfig.assets.bookCover, 'https://codigofisico.online/wp-content/uploads/2026/10/EBOOK-PRINCIPAL.webp');

  // Verify previews have fallback and files exist on disk
  for (const preview of siteConfig.contentPreviews) {
    assert.ok(preview.url.startsWith('https://codigofisico.online/wp-content/'));
    const fileName = preview.fallbackUrl.split('/').pop() || '';
    const fullPath = path.resolve(process.cwd(), 'public', 'images', fileName);
    assert.ok(fs.existsSync(fullPath), `Expected file to exist: ${fullPath}`);
  }

  // Verify bonuses have fallback and files exist on disk
  for (const bonus of siteConfig.bonuses) {
    assert.ok(bonus.coverImage.startsWith('https://codigofisico.online/wp-content/'));
    const fileName = bonus.fallbackImage.split('/').pop() || '';
    const fullPath = path.resolve(process.cwd(), 'public', 'images', fileName);
    assert.ok(fs.existsSync(fullPath), `Expected file to exist: ${fullPath}`);
  }
});
