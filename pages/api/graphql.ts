import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro';
import { getDbService } from '../../src/queries/db.service';
import { IFindAllGroupsResult } from '../../src/queries/queries.queries';

const typeDefs = gql`
  type Group {
    id: String!
    name: String!
    description: String!
    image: String!
    users: [UserGroup!]!
  }

  type UserGroup {
    role: String!
    user: User!
  }

  type User {
    id: String!
    name: String!
    email: String!
    bio: String!
    description: String!
    linkedin: String
    twitter: String
    github: String
  }

  type Query {
    groups: [Group!]!
    hello: String!
  }
`;

const resolvers = {
  Query: {
    groups: async () => {
      return (await getDbService()).findAllGroups();
    },
    hello: () => 'World',
  },
  Group: {
    users: async (group: IFindAllGroupsResult) => {
      const users = await (await getDbService()).findUsersInGroup(group.id);
      return users.map((user) => ({
        role: user.role,
        user: user,
      }));
    },
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default new ApolloServer({ schema }).createHandler({
  path: '/api/graphql',
});
