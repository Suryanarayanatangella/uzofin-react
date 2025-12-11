/**
 * Get the correct asset path with base URL
 * @param {string} path - The asset path (e.g., 'images/logo.svg')
 * @returns {string} - The full path with base URL
 */
export const getAssetPath = (path) => {
  const baseUrl = import.meta.env.BASE_URL || '/uzofin-react/';
  return `${baseUrl}${path}`;
};