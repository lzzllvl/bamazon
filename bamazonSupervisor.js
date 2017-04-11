const DBConnection = require('./dbConnection.js');
const prompt = require('prompt');

//prototype methods

//supervisor object
const supervisorConnection = DBConnection();
supervisorConnection.init("Supervisor");

const supervisor = {
  
}

module.exports = supervisor;