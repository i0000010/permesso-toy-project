import 'server-only';
import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    // cache: new InMemoryCache(),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            posts: {
              merge(existing = [], incoming) {
                return incoming;
              },
            },
          },
        },
      },
    }),
    link: new HttpLink({
        uri: process.env.X_HASURA_GRAPHQL_URL,
        headers: {
            'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET!,
            'x-hasura-role': 'admin',
        },
    }),
  });
});