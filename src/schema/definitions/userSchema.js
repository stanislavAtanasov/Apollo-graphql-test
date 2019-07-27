const user = `
 type user {
    id: ID!
    username: String
    mail: String
 }`;

const userInput = `
input userInput {
    id: ID!
    username: String!
    mail: String!
}`;

const userQueries = `
    fetchUserByName(name: String!): user ,
`;

const userMutations = `
    createUser(user: userInput!): user,
`;
module.exports = {
    user,
    userInput,
    userQueries,
    userMutations,
};