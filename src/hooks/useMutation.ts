import {
  useGraphQL,
  GraphQLOperation
} from "graphql-react";
import { GraphQLURL } from "../constants";

export const useMutation = <O, R>(
  operation: GraphQLOperation<O>
) => {
  const { load, loading } = useGraphQL<R, O>({
    fetchOptionsOverride(options) {
      // eslint-disable-next-line functional/no-expression-statement, functional/immutable-data, no-param-reassign
      options.url = GraphQLURL;
    },
    operation,
    loadOnMount: false,
    loadOnReload: false,
    loadOnReset: false,
    reloadOnLoad: true
  });

  return { load, loading };
};
