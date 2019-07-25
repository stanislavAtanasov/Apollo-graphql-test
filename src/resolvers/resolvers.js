const userResolvers = require('./defenitions/userResolvers');

const resolvers = {
    Query: {
        fetchUserByName: userResolvers.fetchUserByName,
    },
};

module.exports = resolvers;
