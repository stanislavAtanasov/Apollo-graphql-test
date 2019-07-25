const usersTable = require('./embededDBConfiguration');


class DbEmbededRepository {
    //todo to add interface
    async fetchUserByName(name) {
        return (await this.findOne({name: name})).result;
    }

    async findOne(query) {
        return new Promise((resolve, reject) => {
            usersTable.findOne(query, (err, result) => {
                if (err) return reject(err)

                resolve({success: true, result})
            })
        })
    }
}

module.exports = DbEmbededRepository;