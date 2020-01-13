import React from "react";
import "cross-fetch/polyfill";
import { AppProps } from "next/app";
// @ts-ignore: @types/graphql-react has no exported member 'GraphQLProvider'.
import { GraphQLProvider, GraphQLContext } from "graphql-react";
import { withGraphQLApp } from "next-graphql-react";

const App = ({
  Component,
  pageProps,
  graphql
}: AppProps<{}> & {
  readonly graphql: typeof GraphQLContext;
}) => (
  <GraphQLProvider graphql={graphql}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </GraphQLProvider>
);

export default withGraphQLApp(App);
