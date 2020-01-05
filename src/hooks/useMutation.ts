import { useGraphQL } from 'graphql-react'

export const useMutation = (query) => {
  const { load, loading } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = 'http://localhost:3000/api/graphql'
    },
    //@ts-ignore
    operation: {
      query,
    },
    loadOnMount: false,
    loadOnReload: false,
    loadOnReset: false,
    reloadOnLoad: true,
  })
  
  return { load, loading }
}