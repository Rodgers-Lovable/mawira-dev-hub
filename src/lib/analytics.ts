/**
 * Umami Analytics Integration
 * Privacy-friendly, GDPR-compliant analytics
 * 
 * Environment Variables Required:
 * - VITE_UMAMI_SCRIPT_URL: URL to the Umami tracking script
 * - VITE_UMAMI_WEBSITE_ID: Your Umami website ID
 */

// Configuration from environment variables
export const UMAMI_CONFIG = {
  scriptUrl: import.meta.env.VITE_UMAMI_SCRIPT_URL || '',
  websiteId: import.meta.env.VITE_UMAMI_WEBSITE_ID || '',
};

// Check if Umami is configured
export const isUmamiConfigured = (): boolean => {
  return Boolean(UMAMI_CONFIG.scriptUrl && UMAMI_CONFIG.websiteId);
};

// Check if Do Not Track is enabled
export const isDNTEnabled = (): boolean => {
  if (typeof window === 'undefined') return false;
  return navigator.doNotTrack === '1' || 
         (window as any).doNotTrack === '1';
};

// Check if Umami is available on window
const getUmami = (): any => {
  if (typeof window !== 'undefined' && (window as any).umami) {
    return (window as any).umami;
  }
  return null;
};

// ==========================================
// EVENT TYPES & INTERFACES
// ==========================================

export interface CTAClickEvent {
  label: string;
  page: string;
}

export interface PortfolioViewEvent {
  project_name: string;
  project_category: string;
}

export interface ContactAttemptEvent {
  method: 'form' | 'email' | 'calendly' | 'phone';
  page: string;
}

export interface LeadSubmissionEvent {
  form_type: 'contact' | 'consultation' | 'newsletter';
  page: string;
}

export interface SectionViewEvent {
  section_name: string;
  page: string;
}

export interface ExternalEngagementEvent {
  platform: 'github' | 'linkedin' | 'email' | 'phone' | 'other';
  page: string;
}

export interface HighIntentVisitEvent {
  pages_viewed: number;
  time_on_site: number; // in seconds
}

export interface PerformanceEvent {
  load_time: number; // in milliseconds
  page: string;
  is_slow: boolean;
}

// ==========================================
// CORE TRACKING FUNCTIONS
// ==========================================

/**
 * Track a custom event with Umami
 */
export const trackEvent = (eventName: string, properties?: Record<string, any>): void => {
  // Respect Do Not Track
  if (isDNTEnabled()) {
    console.debug('[Analytics] DNT enabled, skipping event:', eventName);
    return;
  }

  const umami = getUmami();
  
  if (umami && isUmamiConfigured()) {
    try {
      umami.track(eventName, properties);
      console.debug('[Analytics] Event tracked:', eventName, properties);
    } catch (error) {
      console.error('[Analytics] Failed to track event:', error);
    }
  } else {
    // Demo mode - log to console for development
    console.debug('[Analytics Demo] Event:', eventName, properties);
  }
};

/**
 * Track page view (called automatically by Umami, but can be triggered manually for SPAs)
 */
export const trackPageView = (url?: string): void => {
  if (isDNTEnabled()) return;

  const umami = getUmami();
  
  if (umami && isUmamiConfigured()) {
    try {
      umami.track(url || window.location.pathname);
    } catch (error) {
      console.error('[Analytics] Failed to track page view:', error);
    }
  } else {
    console.debug('[Analytics Demo] Page view:', url || window.location.pathname);
  }
};

// ==========================================
// CTA TRACKING
// ==========================================

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (label: string, page?: string): void => {
  trackEvent('cta_click', {
    label,
    page: page || window.location.pathname,
  } as CTAClickEvent);
};

// ==========================================
// PORTFOLIO TRACKING
// ==========================================

/**
 * Track portfolio project views
 */
export const trackPortfolioView = (projectName: string, projectCategory: string): void => {
  trackEvent('portfolio_view', {
    project_name: projectName,
    project_category: projectCategory,
  } as PortfolioViewEvent);
};

// ==========================================
// CONTACT TRACKING
// ==========================================

/**
 * Track contact attempts (form opens, email clicks, etc.)
 */
export const trackContactAttempt = (method: ContactAttemptEvent['method'], page?: string): void => {
  trackEvent('contact_attempt', {
    method,
    page: page || window.location.pathname,
  } as ContactAttemptEvent);
};

/**
 * Track successful form submissions
 */
export const trackLeadSubmission = (formType: LeadSubmissionEvent['form_type'], page?: string): void => {
  trackEvent('lead_submission', {
    form_type: formType,
    page: page || window.location.pathname,
  } as LeadSubmissionEvent);
};

// ==========================================
// SECTION VISIBILITY TRACKING
// ==========================================

/**
 * Track when users scroll to key sections
 */
export const trackSectionView = (sectionName: string, page?: string): void => {
  trackEvent('section_view', {
    section_name: sectionName,
    page: page || window.location.pathname,
  } as SectionViewEvent);
};

// ==========================================
// EXTERNAL ENGAGEMENT TRACKING
// ==========================================

/**
 * Track clicks on external links
 */
export const trackExternalEngagement = (platform: ExternalEngagementEvent['platform'], page?: string): void => {
  trackEvent('external_engagement', {
    platform,
    page: page || window.location.pathname,
  } as ExternalEngagementEvent);
};

// ==========================================
// HIGH INTENT TRACKING
// ==========================================

/**
 * Track high-intent visitor behavior
 */
export const trackHighIntentVisit = (pagesViewed: number, timeOnSite: number): void => {
  trackEvent('high_intent_visit', {
    pages_viewed: pagesViewed,
    time_on_site: timeOnSite,
  } as HighIntentVisitEvent);
};

// ==========================================
// PERFORMANCE TRACKING
// ==========================================

/**
 * Track page load performance
 */
export const trackPerformance = (loadTime: number, page?: string): void => {
  const isSlow = loadTime > 3000; // 3 seconds threshold
  
  trackEvent('page_performance', {
    load_time: loadTime,
    page: page || window.location.pathname,
    is_slow: isSlow,
  } as PerformanceEvent);

  // Also track as separate event if slow
  if (isSlow) {
    trackEvent('slow_page_load', {
      load_time: loadTime,
      page: page || window.location.pathname,
    });
  }
};

// ==========================================
// FUNNEL TRACKING HELPERS
// ==========================================

/**
 * Conversion funnel stages
 * Landing → Portfolio View → CTA Click → Contact Submission
 */
export const FUNNEL_STAGES = {
  LANDING: 'funnel_landing',
  PORTFOLIO_VIEW: 'funnel_portfolio_view', 
  CTA_CLICK: 'funnel_cta_click',
  CONTACT_SUBMISSION: 'funnel_contact_submission',
} as const;

export const trackFunnelStage = (stage: keyof typeof FUNNEL_STAGES, metadata?: Record<string, any>): void => {
  trackEvent(FUNNEL_STAGES[stage], {
    ...metadata,
    page: window.location.pathname,
    timestamp: Date.now(),
  });
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Get current page path
 */
export const getCurrentPage = (): string => {
  return typeof window !== 'undefined' ? window.location.pathname : '';
};

/**
 * Initialize performance tracking
 */
export const initPerformanceTracking = (): void => {
  if (typeof window === 'undefined') return;

  // Track page load time when the page is fully loaded
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        trackPerformance(loadTime);
      }
    }, 0);
  });
};

/**
 * Session storage keys for tracking
 */
export const STORAGE_KEYS = {
  PAGES_VIEWED: 'analytics_pages_viewed',
  SESSION_START: 'analytics_session_start',
  LAST_VISIT: 'analytics_last_visit',
} as const;

/**
 * Get or initialize session data
 */
export const getSessionData = () => {
  const pagesViewed = parseInt(sessionStorage.getItem(STORAGE_KEYS.PAGES_VIEWED) || '0', 10);
  const sessionStart = parseInt(sessionStorage.getItem(STORAGE_KEYS.SESSION_START) || Date.now().toString(), 10);
  const lastVisit = localStorage.getItem(STORAGE_KEYS.LAST_VISIT);
  
  return {
    pagesViewed,
    sessionStart,
    lastVisit: lastVisit ? parseInt(lastVisit, 10) : null,
    timeOnSite: Math.floor((Date.now() - sessionStart) / 1000),
  };
};

/**
 * Update session data
 */
export const updateSessionData = (): void => {
  const current = getSessionData();
  
  // Initialize session start if not set
  if (!sessionStorage.getItem(STORAGE_KEYS.SESSION_START)) {
    sessionStorage.setItem(STORAGE_KEYS.SESSION_START, Date.now().toString());
  }
  
  // Increment pages viewed
  sessionStorage.setItem(STORAGE_KEYS.PAGES_VIEWED, (current.pagesViewed + 1).toString());
  
  // Update last visit in localStorage
  localStorage.setItem(STORAGE_KEYS.LAST_VISIT, Date.now().toString());
};

/**
 * Check if this is a returning visitor (within 7 days)
 */
export const isReturningVisitor = (): boolean => {
  const { lastVisit } = getSessionData();
  if (!lastVisit) return false;
  
  const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
  return lastVisit > sevenDaysAgo;
};
