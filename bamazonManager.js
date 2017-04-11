const DBConnection = require('./dbConnection.js');
const prompt = require('prompt');


//protoype methods


//manager object

const managerConnection = DBConnection();
managerConnection.init("Manager");
const manager = {

}

module.exports = manager;