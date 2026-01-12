import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
  trackPageView,
  trackCTAClick,
  trackPortfolioView,
  trackContactAttempt,
  trackLeadSubmission,
  trackSectionView,
  trackExternalEngagement,
  trackFunnelStage,
  updateSessionData,
  getSessionData,
  trackHighIntentVisit,
  isReturningVisitor,
  initPerformanceTracking,
  type ContactAttemptEvent,
  type LeadSubmissionEvent,
  type ExternalEngagementEvent,
} from '@/lib/analytics';

/**
 * Hook for automatic page view tracking in SPAs
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname);
    
    // Update session data
    updateSessionData();
    
    // Track landing funnel stage for homepage
    if (location.pathname === '/') {
      trackFunnelStage('LANDING');
    }
  }, [location.pathname]);
};

/**
 * Hook for tracking CTA clicks
 */
export const useCTATracking = () => {
  const location = useLocation();

  const trackCTA = useCallback((label: string) => {
    trackCTAClick(label, location.pathname);
    trackFunnelStage('CTA_CLICK', { cta_label: label });
  }, [location.pathname]);

  return { trackCTA };
};

/**
 * Hook for portfolio engagement tracking
 */
export const usePortfolioTracking = () => {
  const location = useLocation();

  const trackProject = useCallback((projectName: string, projectCategory: string) => {
    trackPortfolioView(projectName, projectCategory);
    trackFunnelStage('PORTFOLIO_VIEW', { project: projectName });
  }, []);

  return { trackProject };
};

/**
 * Hook for contact form tracking
 */
export const useContactTracking = () => {
  const location = useLocation();

  const trackAttempt = useCallback((method: ContactAttemptEvent['method']) => {
    trackContactAttempt(method, location.pathname);
  }, [location.pathname]);

  const trackSubmission = useCallback((formType: LeadSubmissionEvent['form_type']) => {
    trackLeadSubmission(formType, location.pathname);
    trackFunnelStage('CONTACT_SUBMISSION', { form_type: formType });
  }, [location.pathname]);

  return { trackAttempt, trackSubmission };
};

/**
 * Hook for external link tracking
 */
export const useExternalLinkTracking = () => {
  const location = useLocation();

  const trackExternalLink = useCallback((platform: ExternalEngagementEvent['platform']) => {
    trackExternalEngagement(platform, location.pathname);
  }, [location.pathname]);

  return { trackExternalLink };
};

/**
 * Hook for high-intent visitor detection
 */
export const useHighIntentTracking = () => {
  useEffect(() => {
    // Check high-intent signals after 2 minutes on site
    const checkHighIntent = () => {
      const { pagesViewed, timeOnSite } = getSessionData();
      
      // High intent: 3+ pages viewed OR 2+ minutes on site OR returning visitor
      const isHighIntent = pagesViewed >= 3 || timeOnSite >= 120 || isReturningVisitor();
      
      if (isHighIntent) {
        trackHighIntentVisit(pagesViewed, timeOnSite);
      }
    };

    // Check after 2 minutes
    const timer = setTimeout(checkHighIntent, 120000);

    // Also check on page unload
    const handleBeforeUnload = () => {
      checkHighIntent();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};

/**
 * Hook for performance monitoring
 */
export const usePerformanceTracking = () => {
  useEffect(() => {
    initPerformanceTracking();
  }, []);
};

/**
 * Combined analytics hook for use in Layout/App
 */
export const useAnalytics = () => {
  usePageTracking();
  useHighIntentTracking();
  usePerformanceTracking();
};
