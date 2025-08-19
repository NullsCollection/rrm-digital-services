import type { Metadata } from 'next';
import { Orbitron, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { ThemeProvider, QueryProvider } from '@/components/providers';
import { MAIN_NAV_ITEMS } from '@/constants/navigation';

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rrmdigital.com'),
  title: 'RRM Digital Services | Future-Ready Websites, Apps & AI Solutions',
  description:
    'At RRM Digital Services, we render, refine, and mobilize your success. We design stunning websites, build powerful apps, and create AI solutions that turn ideas into reality, refine them for peak performance, and launch them for growth.',
  keywords:
    'RRM Digital Services, web development, app development, AI solutions, UI/UX design, scalable platforms, digital strategy, business growth, startup solutions, backend optimization, campaign strategy, future-ready technology, software development agency, custom websites, mobile apps, digital transformation, cloud solutions, API development, e-commerce development',
  authors: [{ name: 'RRM Digital Services' }],
  creator: 'RRM Digital Services',
  publisher: 'RRM Digital Services',
  category: 'technology',
  alternates: {
    canonical: 'https://rrmdigital.com',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
    yandex: 'your-yandex-verification-code', // Optional
    yahoo: 'your-yahoo-verification-code', // Optional
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rrmdigital.com',
    title: 'RRM Digital Services | Future-Ready Websites, Apps & AI Solutions',
    description:
      'We turn ideas into reality, refine them for perfection, and mobilize them for growth. Professional web development, mobile apps, and AI solutions for startups and enterprises.',
    siteName: 'RRM Digital Services',
    images: [
      {
        url: '/og-image.jpg', // Will be resolved to https://rrmdigital.com/og-image.jpg
        width: 1200,
        height: 630,
        alt: 'RRM Digital Services - Future-Ready Websites, Apps & AI Solutions',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rrmdigitalservices',
    creator: '@rrmdigitalservices',
    title: 'RRM Digital Services | Future-Ready Websites, Apps & AI Solutions',
    description:
      'We turn ideas into reality, refine them for perfection, and mobilize them for growth. Professional web development, mobile apps, and AI solutions.',
    images: ['/og-image.jpg'], // Will be resolved to full URL
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'theme-color': '#1a1a1a', // Replace with your brand color
    'color-scheme': 'dark light',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'RRM Digital',
    'application-name': 'RRM Digital Services',
    'msapplication-TileColor': '#1a1a1a', // Replace with your brand color
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Home',
      '@id': 'https://rrmdigital.com/#Home',
      name: 'RRM Digital Services',
      url: 'https://rrmdigital.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rrmdigital.com/logo.png',
        width: 512,
        height: 512,
      },
      description:
        'Future-Ready Websites, Apps & AI Solutions for businesses and startups',
      foundingDate: '2024',
      sameAs: [
        'https://linkedin.com/company/rrmdigitalservices',
        'https://twitter.com/rrmdigitalservices',
        'https://github.com/rrmdigitalservices',
        'https://facebook.com/rrmdigitalservices',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+63-919-095-0915',
        contactType: 'customer service',
        email: 'hello@rrmdigital.com',
        availableLanguage: ['English'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mandaluyong City, Philippines', // Replace with actual address
        addressLocality: 'Mandaluyong City',
        addressRegion: 'National Capital Region',
        postalCode: '1550',
        addressCountry: 'Philippines',
      },
      areaServed: 'Worldwide',
      knowsAbout: [
        'Web Development',
        'Desktop App Development',
        'AI Solutions',
        'UI/UX Design',
        'Web Hosting',
        'Graphic Design',
        'SEO Optimization',
        'Backend Development',
        'Frontend Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://rrmdigital.com/#website',
      url: 'https://rrmdigital.com',
      name: 'RRM Digital Services',
      description: 'Future-Ready Websites, Apps & AI Solutions',
      publisher: {
        '@id': 'https://rrmdigital.com/#organization',
      },
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://rrmdigital.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://rrmdigital.com/#service',
      name: 'Digital Development Services',
      provider: {
        '@id': 'https://rrmdigital.com/#organization',
      },
      serviceType: 'Web Development, Mobile App Development, AI Solutions',
      description:
        'Comprehensive digital solutions including web development, mobile apps, and AI integration',
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Development',
              description: 'Custom website development and design',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development',
              description: 'iOS and Android app development',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Solutions',
              description:
                'Artificial intelligence integration and development',
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Viewport Meta Tag */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Favicon and Apple Touch Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="PH" />
        <meta name="geo.placename" content="Philippines" />
        <meta name="ICBM" content="14.5995, 120.9842" />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Performance Hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className={`${orbitron.variable} ${poppins.variable} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
        >
          Skip to main content
        </a>

        <QueryProvider>
          <ThemeProvider>
            <Navbar items={MAIN_NAV_ITEMS} />
            <main id="main-content" className="min-h-screen">
              {children}
            </main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
