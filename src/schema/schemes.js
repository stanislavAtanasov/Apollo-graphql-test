const {gql} = require('apollo-server');

const {user, userQueries} = require('./definitions/userSchema');

const typeDefs = gql`
    ${user}

    type Query {
    ${userQueries},
    }

`;

module.exports = typeDefs;