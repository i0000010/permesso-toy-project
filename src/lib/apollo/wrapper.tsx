"use client";

import {
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { 
  getViewerToken 
} from "@/lib/firebase/client/auth";


const HASURA_GRAPHQL_URL = "https://hip-quail-22.hasura.app/v1/graphql";

function makeClient() {
  const httpLink = new HttpLink({
      // https://studio.apollographql.com/public/spacex-l4uc6p/
      uri: HASURA_GRAPHQL_URL,
      headers: {
          // 'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET!,
          // 'x-hasura-admin-secret': 'Ym34dnZKn2NcESomb58lXhy9SBOcQusg9FoE4yqTRU4Q792xjWC1mw2HDPcisZ0G'
      }
  });

  const authLink = setContext(async () => {
    const token = await getViewerToken();
    console.log("viewer token: ", token);
  
    if (!token) {
      return {};
    }
  
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            authLink,
            httpLink,
          ])
        : ApolloLink.from([authLink, httpLink]),
        // : ApolloLink.from([httpLink]),
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}