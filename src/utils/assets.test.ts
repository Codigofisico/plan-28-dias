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

test('getAssetUrl prefixes local paths with subfolder base', () => {
  assert.equal(getAssetUrl('/images/LIBRO-CODIGO-FUERZA-28.webp'), '/plan-28-dias/images/LIBRO-CODIGO-FUERZA-28.webp');
  assert.equal(getAssetUrl('images/BONO-1.webp'), '/plan-28-dias/images/BONO-1.webp');
  assert.equal(getAssetUrl('/images/CONTENIDO-1.png'), '/plan-28-dias/images/CONTENIDO-1.png');
});

test('getAssetUrl does not double-prefix already prefixed paths', () => {
  assert.equal(
    getAssetUrl('/plan-28-dias/images/LIBRO-CODIGO-FUERZA-28.webp'),
    '/plan-28-dias/images/LIBRO-CODIGO-FUERZA-28.webp'
  );
});

test('getAssetUrl handles empty or invalid strings safely', () => {
  assert.equal(getAssetUrl(''), '');
});

test('siteConfig fallback paths have /plan-28-dias/ prefix and files exist in public/images', async () => {
  const { siteConfig } = await import('../siteConfig');
  const fs = await import('node:fs');
  const path = await import('node:path');

  // Verify external URLs are preserved
  assert.ok(siteConfig.assets.bookCover.startsWith('https://codigofisico.online/wp-content/'));
  assert.ok(siteConfig.assets.bundleImage.startsWith('https://codigofisico.online/wp-content/'));

  // Verify local fallbacks have the subfolder prefix
  assert.ok(siteConfig.assets.bookCoverFallback.startsWith('/plan-28-dias/images/'));
  assert.ok(siteConfig.assets.bundleImageFallback.startsWith('/plan-28-dias/images/'));
  assert.ok(siteConfig.assets.bonus1Fallback.startsWith('/plan-28-dias/images/'));
  assert.ok(siteConfig.assets.bonus2Fallback.startsWith('/plan-28-dias/images/'));
  assert.ok(siteConfig.assets.bonus3Fallback.startsWith('/plan-28-dias/images/'));
  assert.ok(siteConfig.assets.bonus4Fallback.startsWith('/plan-28-dias/images/'));

  // Verify previews have subfolder prefix
  for (const preview of siteConfig.contentPreviews) {
    assert.ok(preview.fallbackUrl.startsWith('/plan-28-dias/images/'));
    assert.ok(preview.url.startsWith('https://codigofisico.online/wp-content/'));
    
    // Check local file existence on disk
    const relativePath = preview.fallbackUrl.replace('/plan-28-dias/', '');
    const fullPath = path.resolve(process.cwd(), 'public', relativePath);
    assert.ok(fs.existsSync(fullPath), `Expected file to exist: ${fullPath}`);
  }

  // Verify bonuses have subfolder prefix
  for (const bonus of siteConfig.bonuses) {
    assert.ok(bonus.fallbackImage.startsWith('/plan-28-dias/images/'));
    assert.ok(bonus.coverImage.startsWith('https://codigofisico.online/wp-content/'));

    const relativePath = bonus.fallbackImage.replace('/plan-28-dias/', '');
    const fullPath = path.resolve(process.cwd(), 'public', relativePath);
    assert.ok(fs.existsSync(fullPath), `Expected file to exist: ${fullPath}`);
  }
});

