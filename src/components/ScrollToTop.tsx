import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that automatically scrolls to the top of the page
 * when navigating between routes
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Use smooth scrolling for a better UX
    });
  }, [pathname]);

  // This component doesn't render anything
  return null;
} 