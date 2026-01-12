import { ReactNode, forwardRef, useEffect, useRef, useState } from 'react';
import { trackSectionView } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface TrackedSectionProps {
  sectionName: string;
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div' | 'article';
  id?: string;
  threshold?: number;
}

/**
 * A wrapper component that automatically tracks when the section becomes visible
 */
const TrackedSection = forwardRef<HTMLElement, TrackedSectionProps>(
  ({ 
    sectionName, 
    children, 
    className, 
    as: Component = 'section',
    id,
    threshold = 0.3 
  }, forwardedRef) => {
    const internalRef = useRef<HTMLElement>(null);
    const ref = (forwardedRef as React.RefObject<HTMLElement>) || internalRef;
    const [hasTracked, setHasTracked] = useState(false);

    useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasTracked) {
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
    }, [sectionName, threshold, hasTracked, ref]);

    return (
      <Component
        ref={ref as any}
        id={id}
        className={cn(className)}
        data-section={sectionName}
      >
        {children}
      </Component>
    );
  }
);

TrackedSection.displayName = 'TrackedSection';

export default TrackedSection;
