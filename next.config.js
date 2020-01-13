// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
require("dotenv").config();

const withSass = require("@zeit/next-sass");
const { withGraphQLConfig } = require("next-graphql-react/server");

const config = {
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL
  },
  ...withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]"
    }
  })
};

// eslint-disable-next-line functional/no-expression-statement, functional/immutable-data
module.exports = withGraphQLConfig(config);
