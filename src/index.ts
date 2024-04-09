import { createYoga } from "graphql-yoga";
import MemberSchema from "./schemas/MemberSchema";

const Member = createYoga({
    schema: MemberSchema,
});

const server = Bun.serve({
    fetch: Member,
})

console.info(
    `Server is running on ${new URL(
        Member.graphqlEndpoint,
        `http://${server.hostname}:${server.port}`
    )}`
)