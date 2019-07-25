const userResolvers = require('./defenitions/userResolvers');

const resolvers = {
    Query: {
        fetchUser: userResolvers.fetchUser,
    },
};

module.exports = resolvers;
