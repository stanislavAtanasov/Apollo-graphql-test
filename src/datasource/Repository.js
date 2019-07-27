const DbEmbededRepository = require('./embededDB/DbEmbededRepository');

class Repository {

    constructor() {
        this.repository = createRepository();
    }

    async fetchUserByName(name) {
        return this.repository.fetchUserByName(name);
    }

    async saveUser(user) {
        return this.repository.saveUser(user);
    }
}

createRepository = () => {
    let repository = new DbEmbededRepository();
    return repository;
}

module.exports = Repository;