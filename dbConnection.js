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
        self.type = type;
        console.log(`Connected as ${type} on Thread: ${connection.threadId}`);
      });
    };
  } else {
    return new DBConnection;
  }
}

DBConnection.prototype.displayProducts = function() {
  let conn = this.connection;
  conn.query("SELECT * FROM products", function(err, res) {
    if(err) throw err;
    console.log(res);
  });
};

module.exports = DBConnection;