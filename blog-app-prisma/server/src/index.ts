import { ApolloServer } from "apollo-server";
import { Query } from "./resolvers/Query";
import { Mutation } from "./resolvers/Mutation";
import { typeDefs } from "./schema";
import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export interface Context {
    prisma: PrismaClient<
        Prisma.PrismaClientOptions,
        never,
        Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
    >
}

const server = new ApolloServer({ typeDefs, resolvers: { Query, Mutation }, context: { prisma } })

server.listen().then (({ url }) => {
    console.log(`Server ready on ${url}`)
})