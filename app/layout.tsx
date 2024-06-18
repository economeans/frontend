import type { Metadata } from 'next';
import { ReactNode } from 'react';
import ApolloWrapper from '@/apollo';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import '@/sass/global.scss';

export const metadata: Metadata = {
  title: process.env.APP_TITLE,
  description: process.env.APP_DESCRIPTION,
  applicationName: process.env.APP_NAME,
  themeColor: '#000000',
  manifest: '/manifest.json',
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
