require("dotenv").config();

const { withGraphQLConfig } = require("next-graphql-react/server");

const config = {
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL
  }
};

module.exports = withGraphQLConfig(config);
