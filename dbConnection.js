const mysql = require('mysql');

const DBConnection = function(type) {
  if(this instanceof DBConnection) {
    this.type = type;

    switch(type) {
      case "customer":
        this.connectionMethods = require("./bamazonCustomer.js");
        break;
      case "supervisor":
        this.connectionMethods = require("./bamazonSupervisor.js");
        break;
      case "manager":
        this.connectionMethods = require("./bamazonManager.js");
        break;
      default:
        console.log("Connection Type Must Be Specified");
        return;
    }

    this.connection = mysql.createConnection({
    	host: "localhost",
    	port: 3306,
    	user: "root",
    	password: "mysqlworkbench",
    	database: "Bamazon"
    });

    let self = this;
    this.init = function() {
      self.connection.connect(err => {
        if(err) throw err;
      });
    };

  } else {
    return new DBConnection;
  }
}

module.exports = DBConnection;