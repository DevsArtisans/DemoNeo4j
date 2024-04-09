import type { Member } from "../models/Member";

type Query = {
    getMemberByEmail(email: String): Member
}

type Mutation = {
    createMember(name:String!,email: String!, role:String!): Member
}