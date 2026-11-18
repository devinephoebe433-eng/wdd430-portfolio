import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio / 2026',
  description: 'A focused portfolio of thoughtful web projects and technical experiments.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
