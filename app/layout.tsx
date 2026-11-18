import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Devine Phoebe Nabugobero | Software Developer',
  description: 'The professional portfolio of Devine Phoebe Nabugobero, a software developer who enjoys reading, travelling, and building for the web.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
