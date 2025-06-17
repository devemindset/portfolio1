
// app/layout.tsx
import './globals.css';
import { Roboto } from "next/font/google";
import AuthProviderWrapper from './providers/AuthProviderWrapper';

import ParallaxProviderWrapper from './providers/ParallaxProviderWrapper';
import { Toaster } from 'react-hot-toast';
import RecaptchaProviderWrapper from './providers/RecaptchaProviderWrapper';
import Footer from '@/components/Footer';

const roboto = Roboto({
  subsets: ["latin"],       // You can also use ["latin", "cyrillic", etc.] if needed
  // weight: ["400", "700"],   // Load regular and bold weights
  variable: "--font-roboto" // Optional: for CSS variable support
});



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        
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
          {children}
          <Footer />
          
        </ParallaxProviderWrapper>
      </AuthProviderWrapper>
      </RecaptchaProviderWrapper>
      </body>
    </html>
  );
}
