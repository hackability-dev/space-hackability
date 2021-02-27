import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro';
import { Group, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
    groups: () => {
      return prisma.group.findMany();
    },
    hello: () => 'World',
  },
  Group: {
    users: (group: Group) => {
      return prisma.userGroup.findMany({
        where: {
          group_id: group.id,
        },
        include: {
          user: true,
        },
      });
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
