"use client";

import {
  ApolloLink,
  HttpLink,
  split
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { getMainDefinition } from '@apollo/client/utilities';
import { 
  getViewerToken 
} from "@/lib/firebase/client/auth";


function makeClient() {
  const httpLink = new HttpLink({
      // https://studio.apollographql.com/public/spacex-l4uc6p/
      uri:  process.env.NEXT_PUBLIC_X_HASURA_GRAPHQL_URL!,
      headers: {}
  });

  const authLink = setContext(async () => {
    const token = await getViewerToken();
    console.log("viewer token: ", token);
  
    if (!token) {
      return {
        headers: {},
      };
    }
  
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  });


  const createWSLink = () => {
    return new WebSocketLink(
      new SubscriptionClient(process.env.NEXT_PUBLIC_X_HASURA_WEBSOCKET_URL!, {
        lazy: true,
        reconnect: true,
        connectionParams: async () => {
          const token = await getViewerToken()

          if (!token) {
            return {
              headers: {},
            }
          }
          return {
            headers: {
              authorization: token ? `Bearer ${token}` : '',
            },
          }
        },
      })
    )
  }

  // Use the split function to send data to each link
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  createWSLink(),
  httpLink
);

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            authLink,
            splitLink,
          ])
        : ApolloLink.from([authLink, splitLink]),
        // : createWSLink(),
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}