'use client';

import { HttpLink } from '@apollo/client';
import { ApolloNextAppProvider, ApolloClient, InMemoryCache } from '@apollo/experimental-nextjs-app-support';
import { PropsWithChildren } from 'react';

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.API_URL,
    fetchOptions: { cache: 'no-store' },
  });
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}
export default function ApolloWrapper({ children }: PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
