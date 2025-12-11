import { useEffect } from 'react';

/**
 * Custom hook to load external scripts dynamically
 * @param {Array} scripts - Array of script objects with src and id
 */
export const useScriptLoader = (scripts) => {
  useEffect(() => {
    const loadedScripts = [];

    scripts.forEach(({ src, id }) => {
      const script = document.createElement('script');
      script.src = src;
      script.id = id;
      script.async = true;
      document.body.appendChild(script);
      loadedScripts.push(script);
    });

    return () => {
      loadedScripts.forEach((script) => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      });
    };
  }, [scripts]);
};
