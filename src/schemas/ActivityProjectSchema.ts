import { createSchema } from "graphql-yoga";
import ActivityProjectService from "../services/ActivityProjectService";


const activityProjectService = new ActivityProjectService();

const ActivityProjectSchema = createSchema({
  typeDefs: /* GraphQL */ `
        type ActivityProject {
            codigo: String!
            name: String!
            description: String!
            status: String!
            methodology: String!
            creationDate: String!
            startDate: String!
            finalDate: String!
        }

        type Query {
            getActivityProjectByName(name: String!): ActivityProject
        }

        type Mutation{
          createActivityProject(activityProject: ActivityProjectInput!): ActivityProject
        }
      `,
  resolvers: {
    Query: {
      getActivityProjectByName: async (_, {name }) => {
        return await activityProjectService.getActivityProjectByName(name);
      },
    },
    Mutation: {
      createActivityProject: async (_, { codigo, name, description, status, methodology, creationDate, startDate, finalDate }) => {
        return await activityProjectService.createActivityProject({codigo, name, description, status, methodology, creationDate, startDate, finalDate});
      },
    },
  },
});
export default ActivityProjectSchema;