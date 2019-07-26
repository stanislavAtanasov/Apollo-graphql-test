fetchUserByName = (_source, {name}, {dataSources}) => {
    return dataSources.Repository.fetchUserByName(name);
};
saveUser = (_source, {user}, {dataSources}) => {
    return dataSources.Repository.saveUser(user);
};

module.exports = {
    fetchUserByName,
    saveUser
};
