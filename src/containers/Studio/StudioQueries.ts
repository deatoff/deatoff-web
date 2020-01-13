export const piecesQuery: string = `
  query($skip: Int, $limit: Int) {
    userPieces(skip: $skip, limit: $limit) {
      id
      title
      author
    }
  }
`;

export const createPieceQuery: string = `
  mutation($title: String!, $author: String!) {
    createPiece(title: $title, author: $author) {
      title
    }
  }
`;
