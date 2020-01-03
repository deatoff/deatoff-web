import React from 'react'
import { useGraphQL } from 'graphql-react'
import { Props as ExperiencesProps, Experiences } from "./Experiences"

export const ExperiencesContainer = () => {
  
  const skip = 1;
  const limit = 1;
  
  const { loading, cacheValue } = useGraphQL<ExperiencesProps["experiences"], { skip:number, limit: number }>({
    fetchOptionsOverride(options) {
      options.url = 'http://localhost:3000/api/graphql'
    },
    // @see `const experiences` in `/pages/api/graphql`
    operation: {
      variables: { skip , limit },
      query:`
      query {
        experiences(skip: ${skip}, limit: ${limit}) {
          title
        }
      }
      `,
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  })
console.log(cacheValue)
  const experiences = cacheValue?.data ?? []
  const errors = {
    ...cacheValue?.httpError,
    ...cacheValue?.graphQLErrors
  }

  return (
    <Experiences 
      loading={loading}
      experiences={experiences} 
      errors={errors}
    />
  )
}
