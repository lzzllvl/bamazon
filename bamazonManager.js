const DBConnection = require('./dbConnection.js');
const prompt = require('prompt');


//protoype methods



//manager object

const managerConnection = DBConnection();
managerConnection.init("Manager");
const manager = {
  lowInventory: function() {

  },
  saleProducts: function() {
    managerConnection.displayProducts();
  },
  addInventory: function(productName, amount) {
    
  },
  addProduct: function(productObject) {

  }
}

module.exports = manager;