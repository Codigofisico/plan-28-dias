/**
 * Utility to resolve asset URLs correctly across all hosting environments:
 * - Vercel root (https://[project].vercel.app/)
 * - WordPress subfolder (https://codigofisico.online/plan-28-dias/)
 * - Local development & tests
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('//')) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // In browser runtime, detect if hosted under /plan-28-dias subfolder
  if (typeof window !== 'undefined' && window.location?.pathname) {
    if (window.location.pathname.includes('/plan-28-dias')) {
      return `/plan-28-dias/${cleanPath}`;
    }
  }

  // If Vite environment specifies a custom non-relative base (e.g. /plan-28-dias/)
  const envBase = (typeof import.meta !== 'undefined' && import.meta?.env?.BASE_URL)
    ? import.meta.env.BASE_URL
    : '';

  if (envBase && envBase !== './' && envBase !== '/') {
    const normalizedBase = envBase.endsWith('/') ? envBase.slice(0, -1) : envBase;
    return `${normalizedBase}/${cleanPath}`;
  }

  // Relative path fallback which works seamlessly on root domains (Vercel) and subfolders
  return `./${cleanPath}`;
}
