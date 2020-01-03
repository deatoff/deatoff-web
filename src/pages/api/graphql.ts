/**
 * @why should we use fastify-gql adapter on the server?
 * 
 * @see 
 * https://www.nearform.com/blog/how-to-use-graphql-in-react-using-hooks/
 * https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises
 */
import { ApolloServer, gql } from 'apollo-server-micro';

// MockData
export const experiences = [
  { id: "E9969866435", title: 'ανcιλλαε ηασ', remixed: false },
  { id: "E8448280933", title: 'qθεμ μοvετ οφφιcιισ ναμ τε', remixed: true },
  { id: "E8684468611", title: 'εξ qθι σολθμ εvερτι, αδ', remixed: false },
]

const typeDefs = gql`
  type Mutation {
    createExperience(title: String!): Experience
  }
  type Query {
    experiences(skip: Int, limit: Int): [Experience]
  }
  type Experience {
    id: ID!
    title: String,
    remixed: Boolean
  }
`;

const resolvers = {
  Query: {
    /**
     * @param _: parent
     * @param { skip = 0, limit }: args
     * @param param2: context
     */
    experiences (_, { skip = 0, limit }) {
      return limit ?
      experiences.slice(skip, skip + limit) :
      experiences.slice(skip)
    },
  },
  Mutation: {
    /**
     * @param _: parent 
     * @param { title } : args
     */
    createExperience(_, { title }) {
      const experience = { id: `E${Math.floor(Math.random() * Math.floor(9684468611))}`, title, remixed: false }
      experiences.push(experience)
      return experience
    },
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers });
/**
 * GraphQL endpoint with apollo-server-micro doesn't work
 * https://github.com/zeit/next.js/issues/7777#issuecomment-509412222
 */
export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });