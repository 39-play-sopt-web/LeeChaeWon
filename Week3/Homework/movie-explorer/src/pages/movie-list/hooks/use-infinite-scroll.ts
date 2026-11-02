import { useEffect, useRef } from 'react';

interface UseInfiniteScrollOptions {
  onIntersect: () => void;
  enabled: boolean;
  rootMargin?: string;
}

export const useInfiniteScroll = ({
  onIntersect,
  enabled,
  rootMargin = '200px',
}: UseInfiniteScrollOptions) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;

    if (!target || !enabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { rootMargin },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [onIntersect, enabled, rootMargin]);

  return targetRef;
};