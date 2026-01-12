# Umami Analytics Integration

## Overview

This project uses [Umami](https://umami.is/) for privacy-friendly, GDPR-compliant website analytics. All tracking is done without cookies and respects Do Not Track (DNT) headers.

## Setup

### Environment Variables

Add these to your `.env` file:

```env
VITE_UMAMI_SCRIPT_URL=https://your-umami-instance.com/script.js
VITE_UMAMI_WEBSITE_ID=your-website-id-here
```

### Getting Your Credentials

1. Set up your Umami instance (self-hosted or cloud)
2. Add your website in the Umami dashboard
3. Get the tracking script URL and website ID from Settings → Websites

## Event Reference

### Core Events

| Event Name | Description | Properties |
|------------|-------------|------------|
| `cta_click` | CTA button clicks | `label`, `page` |
| `portfolio_view` | Project card views | `project_name`, `project_category` |
| `contact_attempt` | Contact interactions | `method` (form/email/calendly/phone), `page` |
| `lead_submission` | Form submissions | `form_type` (contact/consultation/newsletter), `page` |
| `section_view` | Section visibility | `section_name`, `page` |
| `external_engagement` | External link clicks | `platform` (github/linkedin/email/phone), `page` |
| `high_intent_visit` | High-intent behavior | `pages_viewed`, `time_on_site` |
| `page_performance` | Load time tracking | `load_time`, `page`, `is_slow` |
| `slow_page_load` | Slow pages (>3s) | `load_time`, `page` |

### Funnel Events

| Event Name | Stage |
|------------|-------|
| `funnel_landing` | User lands on homepage |
| `funnel_portfolio_view` | User views a project |
| `funnel_cta_click` | User clicks a CTA |
| `funnel_contact_submission` | User submits contact form |

## Components

### TrackedLink

Internal links with CTA tracking:

```tsx
import { TrackedLink } from '@/components/TrackedLink';

<TrackedLink to="/contact" ctaLabel="Hero CTA">
  Get In Touch
</TrackedLink>
```

### TrackedExternalLink

External links with engagement tracking:

```tsx
import { TrackedExternalLink } from '@/components/TrackedLink';

<TrackedExternalLink 
  href="https://github.com/username" 
  platform="github"
  ctaLabel="View GitHub"
>
  GitHub
</TrackedExternalLink>
```

### TrackedSection

Automatic visibility tracking for sections:

```tsx
import TrackedSection from '@/components/TrackedSection';

<TrackedSection sectionName="services" className="py-16">
  {/* Section content */}
</TrackedSection>
```

## Hooks

### useAnalytics

Combined hook for Layout component:

```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

const Layout = ({ children }) => {
  useAnalytics(); // Handles page views, high-intent, performance
  return <>{children}</>;
};
```

### useCTATracking

Manual CTA tracking:

```tsx
import { useCTATracking } from '@/hooks/useAnalytics';

const Component = () => {
  const { trackCTA } = useCTATracking();
  
  return (
    <Button onClick={() => trackCTA('Custom CTA')}>
      Click Me
    </Button>
  );
};
```

### useContactTracking

Contact form tracking:

```tsx
import { useContactTracking } from '@/hooks/useAnalytics';

const ContactForm = () => {
  const { trackAttempt, trackSubmission } = useContactTracking();
  
  const handleSubmit = () => {
    trackSubmission('contact');
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
};
```

### usePortfolioTracking

Portfolio engagement:

```tsx
import { usePortfolioTracking } from '@/hooks/useAnalytics';

const ProjectCard = ({ project }) => {
  const { trackProject } = usePortfolioTracking();
  
  const handleView = () => {
    trackProject(project.name, project.category);
  };
  
  return <Card onClick={handleView}>...</Card>;
};
```

### useSectionVisibility

Custom section tracking:

```tsx
import { useSectionVisibility } from '@/hooks/useSectionVisibility';

const Section = () => {
  const { ref, isVisible } = useSectionVisibility({
    sectionName: 'testimonials',
    threshold: 0.5,
  });
  
  return <section ref={ref}>...</section>;
};
```

## Privacy & Compliance

### Features

- ✅ **No cookies** - Umami doesn't use cookies
- ✅ **IP anonymization** - Enabled by default
- ✅ **DNT respect** - Skips tracking if Do Not Track is enabled
- ✅ **No PII** - Never collects personally identifiable information
- ✅ **GDPR compliant** - No consent banner required

### Footer Disclosure

The footer includes a privacy-friendly analytics disclosure:

> "This site uses privacy-friendly analytics that respects your privacy."

## Conversion Funnel

Track the user journey:

```
Landing Page → Portfolio View → CTA Click → Contact Submission
     ↓              ↓              ↓              ↓
funnel_landing  funnel_portfolio  funnel_cta   funnel_contact
```

### Analyzing the Funnel

In your Umami dashboard:
1. Go to Events
2. Filter by `funnel_*` events
3. Compare conversion rates between stages

## High-Intent Signals

Automatically detected behaviors:

| Signal | Trigger |
|--------|---------|
| Multiple page views | 3+ pages in session |
| Extended session | 2+ minutes on site |
| Returning visitor | Visit within 7 days |

## Performance Monitoring

Tracked automatically:
- Page load times (via Navigation API)
- Slow page loads (>3 seconds)

## Demo Mode

When environment variables are not set:
- Events are logged to console (prefixed with `[Analytics Demo]`)
- No data is sent to Umami
- Useful for development and testing

## Best Practices

1. **CTA Labels** - Use consistent, descriptive labels
2. **Section Names** - Use lowercase, hyphenated names (e.g., `services-section`)
3. **Funnel Events** - Track all stages for complete funnel analysis
4. **External Links** - Always specify the platform for engagement tracking

## Troubleshooting

### Events not appearing in dashboard

1. Check environment variables are set
2. Verify Umami instance is running
3. Check browser console for errors
4. Ensure DNT is not enabled in browser

### Demo mode when production expected

1. Verify `.env` variables are loaded
2. Restart the dev server after adding variables
3. Check for typos in variable names
