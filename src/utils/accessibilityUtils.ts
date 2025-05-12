import React, { AriaRole } from 'react';

// Utility to generate consistent ARIA attributes
export const generateAriaProps = (
  role?: AriaRole, 
  label?: string, 
  description?: string
) => {
  const props: React.HTMLAttributes<HTMLElement> = {};

  if (role) {
    (props as React.AriaAttributes)['role'] = role;
  }

  if (label) {
    (props as React.AriaAttributes)['aria-label'] = label;
  }

  if (description) {
    (props as React.AriaAttributes)['aria-describedby'] = description;
  }

  return props;
};

// Utility to ensure proper heading hierarchy
export const createHeadingComponent = (
  level: 1 | 2 | 3 | 4 | 5 | 6, 
  children: React.ReactNode, 
  className?: string,
  additionalProps?: React.HTMLAttributes<HTMLHeadingElement>
) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return React.createElement(
    HeadingTag, 
    {
      className,
      ...additionalProps
    }, 
    children
  );
};

// Color contrast utility
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string) => {
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
  };

  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

// Accessibility color validation
export const validateColorContrast = (
  foreground: string, 
  background: string, 
  minimumRatio: number = 4.5
): boolean => {
  return getContrastRatio(foreground, background) >= minimumRatio;
};

// Keyboard navigation utility
export const createKeyboardNavigation = (
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
}); 