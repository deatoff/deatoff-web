import { useGraphQL, GraphQLOperation } from "graphql-react";
import { GraphQLURL } from "../constants";

export const useQuery = <O, R>(operation: GraphQLOperation<O>) => {
  // #TODO: How to prevent a rerender in this hook ?
  const { loading, cacheValue } = useGraphQL<R, O>({
    fetchOptionsOverride(options) {
      // eslint-disable-next-line functional/no-expression-statement, functional/immutable-data, no-param-reassign
      options.url = GraphQLURL;
    },
    operation,
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true
  });

  const data = cacheValue?.data;
  const errors = {
    ...cacheValue?.httpError,
    ...cacheValue?.graphQLErrors
  };
  return {
    loading,
    data,
    errors
  };
};
