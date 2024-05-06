
import type { CodegenConfig } from '@graphql-codegen/cli';
import './envConfig'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://hip-quail-22.hasura.app/v1/graphql": {
        headers: {
          'x-hasura-role': 'admin',
          'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET!
        },
      },
    },
  ],
  documents: "src/**/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    './src/generated/graphql.tsx': {
        plugins: [
            'typescript',
            'typescript-operations',
            'typescript-react-apollo',
        ],
        config: {
            skipTypename: false,
            withHooks: true,
            withHOC: false,
            withComponent: false,
        },
    },
    './graphql.schema.json': {
        plugins: ['introspection'],
    },
},
};

export default config;
