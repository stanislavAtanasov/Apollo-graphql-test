const usersTable = require('./embededDBConfiguration');

class DbEmbededRepository {
    async fetchUserByName(name) {
        return (await findOne({username: name})).result;
    }

    async saveUser(user) {
        return (await saveUserInternal({user})).result;
    }
}

//encapsulation
saveUserInternal = (user) => {
    return new Promise((resolve, reject) => {
        usersTable.insert(user.user, (err, result) => {
            if (err) return reject(err)
            console.log('Inserted', result, 'with id', result.id);
            resolve({success: true, result})
        })
    })
}
//encapsulation
findOne = (query) => {
    return new Promise((resolve, reject) => {
        usersTable.findOne(query, (err, result) => {
            if (err) return reject(err)

            resolve({success: true, result})
        })
    })
}
module.exports = DbEmbededRepository;