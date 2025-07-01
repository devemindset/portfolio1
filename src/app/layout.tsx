
// app/layout.tsx
import './globals.css';
import { Roboto } from "next/font/google";
import "react-datepicker/dist/react-datepicker.css";
import AuthProviderWrapper from './providers/AuthProviderWrapper';

import ParallaxProviderWrapper from './providers/ParallaxProviderWrapper';
import { Toaster } from 'react-hot-toast';
import RecaptchaProviderWrapper from './providers/RecaptchaProviderWrapper';
import Footer from '@/components/Footer';
import PageLoader from '@/components/ui/PageLoader';
import { Metadata } from 'next';


const roboto = Roboto({
  subsets: ["latin"],       // You can also use ["latin", "cyrillic", etc.] if needed
  // weight: ["400", "700"],   // Load regular and bold weights
  variable: "--font-roboto" // Optional: for CSS variable support
});

export const metadata: Metadata = {
  // 👇 Obligatoire pour les URLs absolues (ex: og:image, og:url)
  metadataBase: new URL('https://timetallyapp.devmona.com'),

  // 🧠 Titre global SEO (max ~70 caractères)
  title: 'TimeTally — Simple & Clear Time Tracking for Freelancers',

  // ✍️ Description courte pour Google (~160 caractères)
  description:
    'Track your time, generate beautiful PDF reports, and impress your clients — all in one lightweight tool, made for freelancers and solo workers.',

  keywords: [
    'TimeTally',
    'time tracking for freelancers',
    'freelance time reports',
    'client reports PDF',
    'generate reports',
    'track sessions',
    'freelance productivity',
    'freelance tools',
    'project time tracking',
    'track time with client',
    'create client reports',
  ],

  // 🌐 Open Graph (Facebook, LinkedIn, Slack...)
  openGraph: {
    title: 'TimeTally — Simple & Clear Time Tracking for Freelancers',
    description:
      'Stop wasting time. Track your sessions, create clear client-ready reports, and boost your professional image.',
    url: 'https://timetallyapp.devmona.com',
    siteName: 'TimeTally',
    images: [
      {
        url: '/og-image.png', // ✅ fichier à placer en prod
        width: 1200,
        height: 630,
        alt: 'TimeTally — Clean Time Reports for Freelancers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 🐦 Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'TimeTally — Simple & Clear Time Tracking for Freelancers',
    description:
      'Track your work, log sessions, and generate professional reports — without the complexity. Try TimeTally now.',
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
          duration: 5000,
        }}
      />
          <PageLoader />
          {children}
          <Footer />
          
        </ParallaxProviderWrapper>
      </AuthProviderWrapper>
      </RecaptchaProviderWrapper>
      </body>
    </html>
  );
}
