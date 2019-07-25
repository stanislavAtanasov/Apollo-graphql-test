const user = `
 type user {
    id: ID!
    username: String
    mail: String
 }`;

const userQueries = `
 fetchUser(id: ID!): user ,
`;

module.exports = {
    user,
    userQueries,
};