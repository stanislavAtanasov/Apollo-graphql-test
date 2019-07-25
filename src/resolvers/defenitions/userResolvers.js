fetchUserByName = (_source, {name}, {dataSources}) => {
    return dataSources.Repository.fetchUserByName(name);
};

module.exports = {
    fetchUserByName,
};
