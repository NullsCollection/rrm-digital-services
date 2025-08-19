'use client';

import { PROCESS_STEPS } from '@/constants/content';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ProcessProps } from './Process.types';
import { getStepNumber } from './Process.utils';
import { useScrollReveal, getRevealClasses } from '@/hooks/useScrollReveal';

export default function ProcessSection({ className }: ProcessProps) {
  const { elementRef: titleRef, isRevealed: isTitleRevealed } =
    useScrollReveal<HTMLHeadingElement>();
  const { elementRef: badgesRef, isRevealed: isBadgesRevealed } =
    useScrollReveal<HTMLDivElement>();
  const { elementRef: stepsRef, isRevealed: isStepsRevealed } =
    useScrollReveal<HTMLDivElement>();
  const { elementRef: ctaRef, isRevealed: isCtaRevealed } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section id="process" className={cn('section section-compact', className)}>
      <div className="container-content">
        {/* Two-column layout for title and badges */}
        <div className="flex flex-row items-end gap-8 lg:gap-12 mb-16">
          {/* Left column: Title and badges */}
          <div ref={titleRef} className="lg:w-auto">
            <h3
              className={getRevealClasses(
                'heading-3 text-left',
                isTitleRevealed,
                'slide-up'
              )}
            >
              How We Work
            </h3>

            {/* Badge Navigation */}
            <div
              ref={badgesRef}
              className="mt-4 flex flex-wrap items-center gap-3 lg:gap-4"
            >
              {['Clarity', 'Structure', 'Results'].map((badge, index) => (
                <Badge
                  key={`process-${badge}-${index}`}
                  size="md"
                  className={getRevealClasses(
                    'font-body',
                    isBadgesRevealed,
                    `stagger-${index + 1}`
                  )}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right column: Solid line */}
          <div className="flex-1 flex items-end">
            <div className="h-0.5 w-full bg-[var(--accent-primary)]"></div>
          </div>
        </div>

        {/* Process Steps Grid */}
        <div ref={stepsRef} className="mt-16">
          <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <Card
                key={step.id}
                variant="elevated"
                className={getRevealClasses(
                  'card-effect group relative transition-all duration-300',
                  isStepsRevealed,
                  `stagger-${index + 1}`
                )}
              >
                <span className="floating-elements">
                  <span className="small-rect-1"></span>
                  <span className="small-rect-2"></span>
                  <span className="small-rect-3"></span>
                  <span className="small-rect-4"></span>
                </span>
                <CardContent className="card-content p-6 sm:p-7 lg:p-8 text-left">
                  <div className="mb-4">
                    <h2 className="font-orbitron text-[var(--accent-primary)]">
                      {String(getStepNumber(step.id)).padStart(2, '0')}
                    </h2>
                  </div>
                  <h5 className="heading-5 mb-3">{step.title}</h5>
                  <p className="font-body text-[var(--text-secondary)]">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div ref={ctaRef} className="mt-12 sm:mt-14">
          <div
            className={getRevealClasses(
              'bg-[var(--bg-card)] rounded-2xl p-6 sm:p-7 lg:p-8 border border-[var(--border-primary)]',
              isCtaRevealed,
              'slide-up'
            )}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-7 lg:gap-8 text-center lg:text-left">
              {/* Profile images and text - grouped together */}
              <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-5 lg:gap-6">
                {/* Circular profile images */}
                <div className="flex -space-x-4">
                  <Image
                    src="/images/avatar/chris.jpg"
                    alt="Chris - Team Member"
                    className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] object-cover"
                    width={50}
                    height={50}
                    loading="eager"
                  />
                  <Image
                    src="/images/avatar/robert.jpg"
                    alt="Robert - Team Member"
                    className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] object-cover"
                    width={50}
                    height={50}
                    loading="eager"
                  />
                  <Image
                    src="/images/avatar/raffy.jpg"
                    alt="Raffy - Team Member"
                    className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] object-cover"
                    width={50}
                    height={50}
                    loading="eager"
                  />
                  <Image
                    src="/images/avatar/mark.jpg"
                    alt="Mark - Team Member"
                    className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)] object-cover"
                    width={50}
                    height={50}
                    loading="eager"
                  />
                </div>

                {/* Text */}
                <div>
                  <h5 className="font-body text-[var(--text-primary)] text-base sm:text-lg">
                    Build with Teams That Don&apos;t Compromise on Quality
                  </h5>
                </div>
              </div>

              {/* Button */}
              <div>
                <Button
                  variant="primary"
                  size="md"
                  className="group font-body cursor-pointer"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Connect with us</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
