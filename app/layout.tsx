'use client';

import client from '@/apollo';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import '@/sass/global.scss';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/assets/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/icons/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ApolloProvider client={client}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
