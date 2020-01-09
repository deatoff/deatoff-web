import { useGraphQL } from 'graphql-react'

export const useMutation = (operation) => {
  const { load, loading } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = 'http://localhost:3000/api/graphql'
    },
    //@ts-ignore
    operation,
    loadOnMount: false,
    loadOnReload: false,
    loadOnReset: false,
    reloadOnLoad: true,
  })
  
  return { load, loading }
}