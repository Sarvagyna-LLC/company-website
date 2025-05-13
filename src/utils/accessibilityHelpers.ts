import React from 'react';

// Accessibility Attribute Generator
export const accessibilityAttributes = {
  // Generate ARIA attributes with type safety
  aria: (props: {
    role?: string;
    label?: string;
    description?: string;
    controls?: string;
    expanded?: boolean;
  }) => {
    const ariaProps: Record<string, string | boolean> = {};

    if (props.role) ariaProps['role'] = props.role;
    if (props.label) ariaProps['aria-label'] = props.label;
    if (props.description) ariaProps['aria-describedby'] = props.description;
    if (props.controls) ariaProps['aria-controls'] = props.controls;
    if (props.expanded !== undefined) ariaProps['aria-expanded'] = props.expanded;

    return ariaProps;
  },

  // Ensure semantic heading hierarchy
  heading: (level: 1 | 2 | 3 | 4 | 5 | 6, text: string, className?: string) => {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    return React.createElement(HeadingTag, { className }, text);
  },

  // Keyboard interaction utilities
  keyboard: {
    // Standard keyboard interaction handler
    handler: (
      onEnter?: () => void, 
      onEscape?: () => void
    ) => ({
      onKeyDown: (e: React.KeyboardEvent) => {
        switch (e.key) {
          case 'Enter':
            onEnter?.();
            break;
          case 'Escape':
            onEscape?.();
            break;
        }
      }
    }),

    // Tabindex management
    focusManagement: {
      // Make an element focusable
      makeFocusable: (tabIndex: number = 0) => ({
        tabIndex,
        role: 'button'
      }),

      // Trap focus within a container
      trapFocus: (containerRef: React.RefObject<HTMLElement>) => {
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key !== 'Tab') return;

          const focusableElements = containerRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );

          if (!focusableElements?.length) return;

          const first = focusableElements[0] as HTMLElement;
          const last = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey && document.activeElement === first) {
            last.focus();
            e.preventDefault();
          } else if (!e.shiftKey && document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        };

        React.useEffect(() => {
          const current = containerRef.current;
          current?.addEventListener('keydown', handleKeyDown);
          return () => current?.removeEventListener('keydown', handleKeyDown);
        }, [containerRef]);
      }
    }
  },

  // Color contrast utilities
  contrast: {
    // Calculate luminance of a color
    luminance: (color: string): number => {
      const rgb = parseInt(color.slice(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >>  8) & 0xff;
      const b = (rgb >>  0) & 0xff;
      
      const [rr, gg, bb] = [r, g, b].map(c => {
        c /= 255;
        return c <= 0.03928 
          ? c / 12.92 
          : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * rr + 0.7152 * gg + 0.0722 * bb;
    },

    // Calculate contrast ratio
    ratio: (color1: string, color2: string): number => {
      const l1 = accessibilityAttributes.contrast.luminance(color1);
      const l2 = accessibilityAttributes.contrast.luminance(color2);
      
      const lighter = Math.max(l1, l2);
      const darker = Math.min(l1, l2);
      
      return (lighter + 0.05) / (darker + 0.05);
    },

    // Check if colors meet WCAG contrast requirements
    isAccessible: (
      foreground: string, 
      background: string, 
      level: 'AA' | 'AAA' = 'AA'
    ): boolean => {
      const ratio = accessibilityAttributes.contrast.ratio(foreground, background);
      return level === 'AA' 
        ? ratio >= 4.5 
        : ratio >= 7;
    }
  }
}; 