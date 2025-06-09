
// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from "next/font/google";
import AuthProviderWrapper from './providers/AuthProviderWrapper';
import Footer from '@/components/Footer';
import ParallaxProviderWrapper from './providers/ParallaxProviderWrapper';
import { Toaster } from 'react-hot-toast';
import RecaptchaProviderWrapper from './providers/RecaptchaProviderWrapper';

const roboto = Roboto({
  subsets: ["latin"],       // You can also use ["latin", "cyrillic", etc.] if needed
  weight: ["400", "700"],   // Load regular and bold weights
  variable: "--font-roboto" // Optional: for CSS variable support
});

export const metadata: Metadata = {
  // 👇 Obligatoire pour les URLs absolues (ex: og:image, og:url)
  metadataBase: new URL('https://validationflow.com'),

  // 🧠 Titre global SEO (max ~70 caractères)
  title: 'Validation Flow — Validate your ideas, fast',

  // ✍️ Description courte pour Google (~160 caractères)
  description:
    'Create a validation link in seconds. Modern, minimal, and frictionless way to get feedback or approval on your ideas from real users.',

  // 🌐 Open Graph (Facebook, LinkedIn, Slack...)
  openGraph: {
    title: 'Validation Flow — Validate your ideas, fast',
    description:
      'Test multiple ideas and get real feedback or emails from true users — freelancers, indie hackers, or startup founders.',
    url: 'https://validationflow.com',
    siteName: 'Validation Flow',
    images: [
      {
        url: '/og-image.png', // ✅ fichier généré et placé en production
        width: 1200,
        height: 630,
        alt: 'Validation Flow — Fast Idea Validation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 🐦 Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Validation Flow — Validate your ideas, fast',
    description:
      'Create a validation link in seconds. Collect feedback or emails from your real audience. No signups. No fluff.',
    images: ['/og-image.png'],
  },

  // 🧩 Favicon et icônes
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        {/* Favicon classique */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />

        {/* iOS / Apple */}
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />

        {/* android */}
        <link rel="icon" type="image/png" sizes="192x192" href="android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="android-chrome-512x512.png" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:image" content="/og-image.png" />
      </head>
      <body className={roboto.className}>
        <RecaptchaProviderWrapper>
        <AuthProviderWrapper>
        <ParallaxProviderWrapper>

          <Toaster
          
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
          {children}
          <Footer />
          
        </ParallaxProviderWrapper>
      </AuthProviderWrapper>
      </RecaptchaProviderWrapper>
      </body>
    </html>
  );
}
