import { useEffect } from 'react';

export default function FontPreloader() {
  useEffect(() => {
    // Add font preloading
    const fontPreloadLink = document.createElement('link');
    fontPreloadLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontPreloadLink.rel = 'preload';
    fontPreloadLink.as = 'style';
    document.head.appendChild(fontPreloadLink);

    // Add actual font stylesheet
    const fontStyleLink = document.createElement('link');
    fontStyleLink.href = fontPreloadLink.href;
    fontStyleLink.rel = 'stylesheet';
    document.head.appendChild(fontStyleLink);

    return () => {
      document.head.removeChild(fontPreloadLink);
      document.head.removeChild(fontStyleLink);
    };
  }, []);

  return null;
} 