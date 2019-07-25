fetchUser = (_source, _args, {dataSources}) => {

    return users[0];
};

module.exports = {
    fetchUser,
};

const users = [
    {
        id: "1",
        name: "Adam Ondra",
        username: "@ada"
    },
    {
        id: "2",
        name: "Sharma ",
        username: "@sharma"
    }
];
