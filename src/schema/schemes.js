const {gql} = require('apollo-server');

const {user, userInput, userQueries, userMutations} = require('./definitions/userSchema');

const typeDefs = gql`
    ${user}
    ${userInput}

    type Query {
    ${userQueries},
    }
    type Mutation {
    ${userMutations},
    }
`;

module.exports = typeDefs;