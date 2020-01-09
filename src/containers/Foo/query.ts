export const createExperience = () => `
  mutation($title: String!, $author: String!) {
    createExperience(title: $title, author: $author) {
      title
    }
  }
`