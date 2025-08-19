'use client';

import { HERO_CONTENT } from '@/constants/content';
import Button from '@/components/ui/Button';
import FloatingElements from '@/components/ui/FloatingElements';
import GlowBackground from '@/components/ui/GlowBackground';
import { cn } from '@/lib/utils';
import { HeroProps } from './Hero.types';
import { useScrollReveal, getRevealClasses } from '@/hooks/useScrollReveal';

export default function HeroSection({ className }: HeroProps) {
  const { elementRef: titleRef, isRevealed: isTitleRevealed } =
    useScrollReveal<HTMLHeadingElement>();
  const { elementRef: subtitleRef, isRevealed: isSubtitleRevealed } =
    useScrollReveal<HTMLHeadingElement>();
  const { elementRef: buttonRef, isRevealed: isButtonRevealed } =
    useScrollReveal<HTMLParagraphElement>();

  return (
    <section className={cn('section relative mb-8', className)}>
      {/* Background Glowing Effect - inside hero section */}
      <GlowBackground variant="hero" color="secondary" intensity="medium" />

      {/* Floating Elements */}
      <FloatingElements />

      <div className="container-content relative z-20">
        <div className="text-center">
          <h4
            ref={titleRef}
            className={getRevealClasses(
              'heading-4',
              isTitleRevealed,
              'fade-in'
            )}
          >
            We Build
          </h4>
          <h2
            ref={subtitleRef}
            className={getRevealClasses(
              'heading-2',
              isSubtitleRevealed,
              'slide-up'
            )}
          >
            <span className="block">DIGITAL EXPERIENCES</span>
            <span className="block">That Matters</span>
          </h2>
          <p
            ref={buttonRef}
            className={getRevealClasses(
              'mt-6 text-sm max-w-2xl leading-relaxed text-[var(--text-secondary)] sm:text-base sm:leading-8 mx-auto',
              isButtonRevealed,
              'fade-in'
            )}
          >
            {HERO_CONTENT.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a href="#contact">
              <Button
                size="md"
                className="cursor-pointer group font-body glow-button bg-[var(--btn-hero-bg)] hover:bg-[var(--btn-hero-bg)]"
                style={{
                  animation: 'float-smooth 3s ease-in-out infinite',
                }}
              >
                {HERO_CONTENT.ctaPrimary}
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
