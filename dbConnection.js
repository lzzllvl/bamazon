const mysql = require('mysql');

const DBConnection = function(type) {
  if(this instanceof DBConnection) {
    this.type = type;

    switch(type) {
      case "customer":
        this.connectionMethods = require("./bamazonCustomer.js");
        console.log(this.connectionMethods);
        break;
      case "supervisor":
        this.connectionMethods = require("./bamazonSupervisor.js");
        console.log(this.connectionMethods);
        break;
      case "manager":
        this.connectionMethods = require("./bamazonManager.js");
        console.log(this.connectionMethods);
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
        console.log(`Connected as ${self.type} on Thread: ${self.connection.threadId}`);
      });
    };

  } else {
    return new DBConnection;
  }
}

// DBConnection.prototype.displayProducts = function() {
//   let conn = this.connection;
//   conn.query("SELECT * FROM products", function(err, res) {
//     if(err) throw err;
//     console.log(res);
//   });
// };


module.exports = DBConnection;