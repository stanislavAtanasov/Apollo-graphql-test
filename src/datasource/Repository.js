const DbEmbededRepository = require('./embededDB/DbEmbededRepository');

class Repository {


    constructor() {
        this.repository = createRepository();
    }

    async fetchUserByName(name) {
        return this.repository.fetchUserByName(name);
    }
}

createRepository = () => {
    let repository = new DbEmbededRepository();
    return repository;
}

module.exports = Repository;