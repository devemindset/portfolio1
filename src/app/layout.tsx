// app/layout.tsx
import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import "bootstrap-icons/font/bootstrap-icons.css"
import PageLoader from '../components/ui/PageLoader';


// --- Fonts ---
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Modele',
  description: 'My awesome Next.js app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body >
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
