const {ApolloServer, gql} = require("apollo-server");
const typeDefs = require('./schema/schemes');
const resolvers = require('./resolvers/resolvers');
const {GRAPHQL_PORT} = require('./configs/config');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen({port: GRAPHQL_PORT}).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});

const users = [
    {
        id: "1",
        name: "Adam Ondra",
        username: "@ada"
    },
    {
        id: "2",
        name: "Sharma ",
        username: "@sharma"
    }
];
