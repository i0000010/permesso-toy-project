'use client';

/**
 * RCC Apollo Client with SSR
 * Adopted from: https://www.apollographql.com/blog/using-apollo-client-with-next-js-13-releasing-an-official-library-to-support-the-app-router
 */

import {
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import {
  NextSSRInMemoryCache,
  SSRMultipartLink,
  NextSSRApolloClient
} from "@apollo/experimental-nextjs-app-support/ssr";
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';

export function makeClient() {

  const httpLink = new HttpLink({
      // https://studio.apollographql.com/public/spacex-l4uc6p/
      // uri: process.env.X_HASURA_GRAPHQL_URL,
      uri: "https://hip-quail-22.hasura.app/v1/graphql",
      headers: {
        // 'x-hasura-admin-secret': "Ym34dnZKn2NcESomb58lXhy9SBOcQusg9FoE4yqTRU4Q792xjWC1mw2HDPcisZ0G",
      }
  });

  const authLink = setContext((_, { headers }) => {
    const token = Cookies.get('session');
    console.log('token: ', token);

    return {
      headers: {
        ...headers,
        'Authorization': token ? `Bearer ${token}` : "",
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
            authLink.concat(httpLink),
            // httpLink,
          ])
        // : httpLink,
        : authLink.concat(httpLink),
  });
}


// import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//         uri: process.env.X_HASURA_GRAPHQL_URL,
//         headers: {
//             'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET!,
//         },
//     }),
//   });

//   "use client";
