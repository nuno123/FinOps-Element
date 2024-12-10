import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/layout/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Element X - FinOps Dashboard',
  description: 'Cloud cost management and optimization platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full relative">
          <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80]">
            <Sidebar />
          </div>
          <main className="md:pl-72">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}