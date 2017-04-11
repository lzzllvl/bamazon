const mysql = require('mysql');

const DBConnection = function() {
  if(this instanceof DBConnection) {
    let self = this;
    this.connection = mysql.createConnection({
    	host: "localhost",
    	port: 3306,
    	user: "root",
    	password: "mysqlworkbench",
    	database: "Bamazon"
    });

    this.init = function(type) {
      self.connection.connect(err => {
        if(err) throw err;
        console.log(`Connected as ${type} on Thread: ${connection.threadId}`);
      });
    };
  } else {
    return new DBConnection;
  }
}

module.exports = DBConnection;