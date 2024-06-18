import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { ReactNode } from 'react';
import '@/sass/global.scss';
import ApolloWrapper from '@/apollo';

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
        <Header />
        <ApolloWrapper>
          <main>{children}</main>
        </ApolloWrapper>
        <Footer />
      </body>
    </html>
  );
}
