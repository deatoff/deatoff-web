/**
 * @why should we use fastify-gql adapter on the server?
 * 
 * @see 
 * https://www.nearform.com/blog/how-to-use-graphql-in-react-using-hooks/
 * https://github.com/nearform/graphql-hooks-workshop/tree/master/exercises
 */
import { ApolloServer, gql, UserInputError } from 'apollo-server-micro';

// Util
const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// MockData
export const experiences = [
  { id: "E9969866435", title: 'ανcιλλαε ηασ', author: "foo", remixed: false },
  { id: "E8448280933", title: 'qθεμ μοvετ οφφιcιισ ναμ τε', author: "bar", remixed: true },
  { id: "E8684468611", title: 'εξ qθι σολθμ εvερτι, αδ', author: "baz", remixed: false },
]

const typeDefs = gql`
  type Mutation {
    createExperience(title: String!, author: String!): Experience
    updateExperience(id: ID!, title: String, author: String, remixed: Boolean): Experience
  }
  type Query {
    experiences(skip: Int, limit: Int): [Experience]
  }
  type Experience {
    id: ID!
    title: String,
    author: String,
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
     * @param { title, author } : args
     */
    createExperience(_, { title, author }) {
      if (title === 'foo') {
        throw new UserInputError('Form Arguments invalid', {
          invalidFields: ["title"],
        });
      }
      const experience = { 
        id: `E${Math.floor(Math.random() * Math.floor(9684468611))}`, 
        title,
        author, 
        remixed: false 
      }
      experiences.push(experience)
      return experience
    },
    async updateExperience(_, { id, title, author, remixed }) {
      await timeout(2000);
      const idx = experiences.findIndex(experience => experience.id === id)
      const constexperience  = { id, title, author, remixed }
      experiences[idx] = {...experiences[idx], ...constexperience}
      return experiences[idx]
    }
  }
}

const apolloServer = new ApolloServer({ 
  typeDefs, 
  resolvers,
  // https://github.com/apollographql/apollo-server/issues/3264#issuecomment-529697336
  plugins: [
    {
      requestDidStart() {
        return {
          didEncounterErrors(requestContext) {
            requestContext.response.http.headers.set('Has-Errors', '1');
          }
        }
        
      },
      
    }
  ]
});
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