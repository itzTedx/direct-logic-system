# Table of Contents Feature

## Overview

The Table of Contents feature provides automatic navigation for service pages by extracting headings from MDX content and creating a clickable navigation sidebar.

## Features

- **Automatic Heading Extraction**: Extracts all headings (H1-H6) from MDX content
- **Smooth Scrolling**: Smooth scroll behavior when clicking on table of contents links
- **Active Section Highlighting**: Highlights the current section as you scroll through the content
- **Responsive Design**: Sticky sidebar that works on desktop and mobile
- **Back to Top Button**: Appears when scrolled down to quickly return to the top
- **Hierarchical Indentation**: Shows heading hierarchy with proper indentation

## Implementation

### Components

1. **TableOfContents** (`src/components/markdown/table-of-contents.tsx`)
   - Client-side component that handles scroll tracking and navigation
   - Uses Intersection Observer to track active sections
   - Provides smooth scrolling and back-to-top functionality

2. **MDX Utils** (`src/lib/mdx-utils.tsx`)
   - Server-side utilities for extracting headings from MDX content
   - Creates heading components with automatic ID generation
   - Provides slug generation for consistent anchor links

### Usage

The table of contents is automatically integrated into service pages at:
`src/app/what-we-offer/[category]/[service]/page.tsx`

```tsx
// Extract headings from MDX content
const headings = extractHeadings(content);
const headingComponents = createHeadingComponents();

// Add to MDXContent components
<MDXContent
  components={{
    Image: (props) => <Image {...props} className="rounded-md" />,
    ...headingComponents, // Adds IDs to all headings
  }}
  source={content}
/>

// Add to sidebar
<TableOfContents headings={headings} />
```

## Styling

The table of contents uses the existing design system:
- Sticky positioning with `top-24` to account for the fixed header
- Card component for consistent styling
- Primary color for active states
- Muted foreground for inactive states
- Proper spacing and typography

## Accessibility

- Uses semantic HTML with `<nav>` element
- Proper ARIA attributes for navigation
- Keyboard navigation support
- Screen reader friendly with descriptive link text

## Browser Support

- Modern browsers with Intersection Observer API support
- Graceful fallback for older browsers
- Smooth scrolling with CSS `scroll-behavior: smooth` 