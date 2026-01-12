import { ReactNode, MouseEvent } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { 
  trackCTAClick, 
  trackExternalEngagement,
  type ExternalEngagementEvent 
} from '@/lib/analytics';

interface TrackedLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  ctaLabel?: string;
  children: ReactNode;
}

interface TrackedExternalLinkProps {
  href: string;
  platform?: ExternalEngagementEvent['platform'];
  ctaLabel?: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Tracked internal link component
 */
export const TrackedLink = ({ 
  to, 
  ctaLabel, 
  children, 
  onClick,
  ...props 
}: TrackedLinkProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (ctaLabel) {
      trackCTAClick(ctaLabel);
    }
    onClick?.(e);
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

/**
 * Tracked external link component
 */
export const TrackedExternalLink = ({
  href,
  platform = 'other',
  ctaLabel,
  children,
  className,
  target = '_blank',
  rel = 'noopener noreferrer',
  onClick,
}: TrackedExternalLinkProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    trackExternalEngagement(platform);
    if (ctaLabel) {
      trackCTAClick(ctaLabel);
    }
    onClick?.(e);
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};

/**
 * Copy to clipboard with tracking
 */
export const trackCopyAction = (content: string, type: 'email' | 'phone') => {
  navigator.clipboard.writeText(content);
  trackExternalEngagement(type);
};
