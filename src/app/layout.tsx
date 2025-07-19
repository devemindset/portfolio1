
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
  metadataBase: new URL('https://timetallyapp.site'),

  title: 'TimeTallyApp Track Time. Prove Your Work. Stay in Control.',

  description:
    'Track your time, generate clear reports, and protect your professional image. TimeTally helps freelancers and small teams handle even the toughest clients.',

  keywords: [
    'TimeTallyApp',
    'timetallyapp',
    "time tally app",
    'time tracking',
    'generate time reports',
    'PDF client report',
    'track project work',
    'proof of work',
    'handle toxic clients',
    'freelancer tools',
    'work session tracker',
    'reporting app',
    'client transparency',
    'professional time tracker'
  ],

  openGraph: {
    title: 'TimeTallyApp Track Time. Prove Your Work. Stay in Control.',
    description:
      'Whether your client is great or hard to deal with — TimeTally helps you track sessions, log effort, and stay protected with transparent reports.',
    url: 'https://timetallyapp.site',
    siteName: 'TimeTally',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TimeTallyApp Clean Time Reports for Professionals',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'TimeTallyApp Track Time. Prove Your Work. Stay in Control.',
    description:
      'A time tracker made for freelancers and professionals. Generate transparent reports, avoid misunderstandings, and handle even toxic clients with confidence.',
    images: ['/og-image.png'],
  },

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
