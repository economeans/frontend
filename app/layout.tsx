import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import ApolloWrapper from '@/apollo';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import '@/sass/global.scss';

export const metadata: Metadata = {
  title: process.env.APP_TITLE,
  description: process.env.APP_DESCRIPTION,
  applicationName: process.env.APP_NAME,
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <ApolloWrapper>
          <main>{children}</main>
        </ApolloWrapper>
        <Footer />
      </body>
    </html>
  );
}
