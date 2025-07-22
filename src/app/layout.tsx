// app/layout.tsx
import './globals.css';
import { Roboto } from 'next/font/google';
import type { Metadata } from 'next';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700'], // Active si tu veux gérer les poids
});

export const metadata: Metadata = {
  title: 'My App',
  description: 'My awesome Next.js app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
