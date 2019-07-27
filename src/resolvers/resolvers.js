const userResolvers = require('./defenitions/userResolvers');

const resolvers = {
    Query: {
        fetchUserByName: userResolvers.fetchUserByName,
    },
    Mutation: {
        createUser: userResolvers.saveUser,

    }
};

module.exports = resolvers;
