import { useEffect } from 'react';
import { UMAMI_CONFIG, isUmamiConfigured, isDNTEnabled } from '@/lib/analytics';

/**
 * Component to inject the Umami analytics script
 * Loaded asynchronously to avoid blocking page rendering
 * Respects Do Not Track (DNT) headers
 */
const UmamiScript = () => {
  useEffect(() => {
    // Don't load if DNT is enabled
    if (isDNTEnabled()) {
      console.debug('[Analytics] Do Not Track enabled, skipping Umami script');
      return;
    }

    // Don't load if not configured
    if (!isUmamiConfigured()) {
      console.debug('[Analytics] Umami not configured, running in demo mode');
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector(`script[data-website-id="${UMAMI_CONFIG.websiteId}"]`);
    if (existingScript) {
      return;
    }

    // Create and inject the script
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = UMAMI_CONFIG.scriptUrl;
    script.setAttribute('data-website-id', UMAMI_CONFIG.websiteId);
    
    // Privacy-friendly settings
    script.setAttribute('data-auto-track', 'true');
    script.setAttribute('data-do-not-track', 'true');
    script.setAttribute('data-cache', 'true');
    
    // Append to head
    document.head.appendChild(script);

    console.debug('[Analytics] Umami script loaded');

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.querySelector(`script[data-website-id="${UMAMI_CONFIG.websiteId}"]`);
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, []);

  return null;
};

export default UmamiScript;
