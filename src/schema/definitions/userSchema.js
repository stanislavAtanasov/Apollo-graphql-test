const user = `
 type user {
    id: ID!
    username: String
    mail: String
 }`;

const userQueries = `
 fetchUserByName(name: String!): user ,
`;

module.exports = {
    user,
    userQueries,
};