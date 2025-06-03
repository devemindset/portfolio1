// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from "next/font/google";
import AuthProviderWrapper from './providers/AuthProviderWrapper';
// import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  subsets: ["latin"],       // You can also use ["latin", "cyrillic", etc.] if needed
  weight: ["400", "700"],   // Load regular and bold weights
  variable: "--font-roboto" // Optional: for CSS variable support
});

export const metadata: Metadata = {
  title: 'Snap Validate',
  // description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthProviderWrapper>
          {/* <Header /> */}
          {children}
          <Footer />
          </AuthProviderWrapper>
      </body>
    </html>
  );
}
