'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = <T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
  } = options;

  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsRevealed(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isRevealed };
};

// Utility function to add reveal classes
export const getRevealClasses = (
  baseClass: string,
  isRevealed: boolean,
  variant: string = 'default'
) => {
  const classes = [baseClass, 'reveal-on-scroll'];

  if (variant !== 'default') {
    classes.push(variant);
  }

  if (isRevealed) {
    classes.push('revealed');
  }

  return classes.join(' ');
};
