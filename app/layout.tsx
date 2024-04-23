'use client';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from '@/app/registry';
import ReduxProvider from '@/lib/providers/ReduxProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </ReduxProvider>
  );
}
