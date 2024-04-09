import { createSchema } from "graphql-yoga"
import TeamService from "../services/TeamService";

const teamService = new TeamService()

const TeamSchema = createSchema({
  typeDefs: /* GraphQL */ `
        type Team {
            name: String!
            description: String!
            leader: String!
        }

        type Query {
          getTeamByName(name: String!): Team
          getTeamsByUserEmail(email: String!): [Team]
        }
        type Mutation{
          createTeam(name:String!,description: String!, leader:String!): Team    
        }
      `,
  resolvers: {
    Query: {
      getTeamByName: async(_,{name}) =>{
        return await teamService.getTeamByName(name)
      },
      getTeamsByUserEmail: async(_,{email}) =>{
        return await teamService.getTeams(email)
      },
    },
    Mutation: {
      createTeam: async(_,{name,description,leader}) =>{
        return await teamService.createTeam({name,description,leader})
      },
    }
  },
});

export default TeamSchema;