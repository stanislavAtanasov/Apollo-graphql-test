const {ApolloServer, gql} = require("apollo-server");
const typeDefs = require('./schema/schemes');
const resolvers = require('./resolvers/resolvers');
const {GRAPHQL_PORT} = require('./configs/config');
const Repository = require('./datasource/Repository');
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {Repository: new Repository()}
    },
});

server.listen({port: GRAPHQL_PORT}).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});

