import test from 'node:test';
import assert from 'node:assert/strict';
import { getAssetUrl } from './assets';

test('getAssetUrl preserves external URLs', () => {
  const wpUrl = 'https://codigofisico.online/wp-content/uploads/2026/10/LIBRO-CODIGO-FUERZA-28.webp';
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

test('getAssetUrl returns relative path on Vercel root domain (/) to avoid blank page', () => {
  // Simulate Vercel environment (root path)
  (globalThis as unknown as { window: { location: { pathname: string } } }).window = {
    location: { pathname: '/' }
  };
  assert.equal(getAssetUrl('/images/LIBRO-CODIGO-FUERZA-28.webp'), './images/LIBRO-CODIGO-FUERZA-28.webp');
  assert.equal(getAssetUrl('images/BONO-1.webp'), './images/BONO-1.webp');

  // Clean up global window
  delete (globalThis as unknown as { window?: unknown }).window;
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
  assert.ok(siteConfig.assets.bundleImage.startsWith('https://codigofisico.online/wp-content/'));

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
