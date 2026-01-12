import { useEffect, useRef, useCallback, useState } from 'react';
import { trackSectionView } from '@/lib/analytics';

interface UseSectionVisibilityOptions {
  sectionName: string;
  threshold?: number;
  trackOnce?: boolean;
}

/**
 * Hook for tracking when a section becomes visible in the viewport
 */
export const useSectionVisibility = ({
  sectionName,
  threshold = 0.5,
  trackOnce = true,
}: UseSectionVisibilityOptions) => {
  const ref = useRef<HTMLElement>(null);
  const [hasTracked, setHasTracked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);

          if (entry.isIntersecting && (!trackOnce || !hasTracked)) {
            trackSectionView(sectionName);
            setHasTracked(true);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [sectionName, threshold, trackOnce, hasTracked]);

  return { ref, isVisible, hasTracked };
};

/**
 * Hook for creating a tracked section wrapper
 */
export const useTrackedSection = (sectionName: string) => {
  const { ref, isVisible } = useSectionVisibility({
    sectionName,
    threshold: 0.3,
    trackOnce: true,
  });

  return { sectionRef: ref, isVisible };
};

/**
 * Higher-order component helper for section tracking
 */
export const createSectionTracker = (sectionName: string) => {
  return () => useSectionVisibility({ sectionName });
};
