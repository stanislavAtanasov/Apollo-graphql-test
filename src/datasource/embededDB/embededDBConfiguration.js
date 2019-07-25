const Datastore = require('nedb');

//todo to remove or to fix it
const db = {};
const path = require('path');

const usersTable = new Datastore({
    filename: 'users.db',
    autoload: true,
    onload: err => {
        if (err) {
            console.error('Problem while loading DB!', err)
        }
        usersTable.find({}, (err, result) => {
            console.log(result);
        })
    },
    timestampData: true

});

module.exports = usersTable;