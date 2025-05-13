import React, { 
  memo, 
  lazy, 
  Suspense, 
  useState, 
  useRef, 
  ReactNode, 
  ComponentType, 
  ComponentProps
} from 'react';

// Memoize components to prevent unnecessary re-renders
export const memoize = <T extends ComponentType<any>>(
  Component: T
): T => {
  const MemoizedComponent = memo(Component);
  return MemoizedComponent as T;
};

// Lazy load components to reduce initial bundle size
export const lazyLoad = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>, 
  fallback?: ReactNode
) => {
  const LazyComponent = lazy(importFunc);
  
  return (props: ComponentProps<T>) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Limit rendering of large lists
export const VirtualList = <T,>({
  items, 
  renderItem, 
  itemHeight = 50, 
  visibleItems = 10
}: {
  items: T[], 
  renderItem: (item: T, index: number) => ReactNode,
  itemHeight?: number,
  visibleItems?: number
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleItems, items.length);

  const visibleData = items.slice(startIndex, endIndex);

  return (
    <div 
      ref={containerRef}
      style={{ 
        height: `${visibleItems * itemHeight}px`, 
        overflowY: 'auto' 
      }}
      onScroll={(e) => setScrollTop((e.target as HTMLDivElement).scrollTop)}
    >
      <div style={{ height: `${items.length * itemHeight}px`, position: 'relative' }}>
        {visibleData.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              position: 'absolute', 
              top: `${(startIndex + index) * itemHeight}px`,
              height: `${itemHeight}px`,
              width: '100%'
            }}
          >
            {renderItem(item, startIndex + index)}
          </div>
        ))}
      </div>
    </div>
  );
}; 