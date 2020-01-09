import { useGraphQL } from 'graphql-react'

export const useQuery = <T>() => {
  // @TODO: make a params
  const skip = 0;
  const limit = 10;

  const { loading, cacheValue } = useGraphQL<T, {skip: number, limit: number}>({
    fetchOptionsOverride(options) {
      options.url = 'http://localhost:3000/api/graphql'
    },
    operation: {
      variables: { skip , limit },
      query:`
      query {
        experiences(skip: ${skip}, limit: ${limit}) {
          id
          title
          author
          remixed
        }
      }
      `,
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  })

  const data = cacheValue?.data
  const errors = {
    ...cacheValue?.httpError,
    ...cacheValue?.graphQLErrors
  }
  return { loading, data, errors }
}