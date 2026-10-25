/**
 * Utility to resolve asset URLs correctly when the application is hosted
 * in a subfolder (such as `/plan-28-dias/`) or at root `/`.
 *
 * It preserves external full URLs (http://, https://, data:)
 * and properly prepends Vite's base URL (`import.meta.env.BASE_URL`)
 * to local asset paths (e.g. `/images/...`).
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('//')) {
    return path;
  }

  // Get base URL from Vite environment, fallback to '/plan-28-dias/' if undefined
  const rawBase = (typeof import.meta !== 'undefined' && import.meta?.env?.BASE_URL)
    ? import.meta.env.BASE_URL
    : '/plan-28-dias/';

  // Normalize base and path so we don't have duplicate slashes
  const normalizedBase = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // If already prefixed with normalizedBase, don't double prepend
  if (normalizedBase && (normalizedPath === normalizedBase || normalizedPath.startsWith(`${normalizedBase}/`))) {
    return normalizedPath;
  }

  return `${normalizedBase}${normalizedPath}`;
}
