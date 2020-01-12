export const experiencesQuery: string = `
  query($skip: Int, $limit: Int) {
    experiences(skip: $skip, limit: $limit) {
      id
      title
      author
      remixed
    }
  }
`;

export const createExperienceQuery: string = `
  mutation($title: String!, $author: String!) {
    createExperience(title: $title, author: $author) {
      title
    }
  }
`;
