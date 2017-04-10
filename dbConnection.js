const mysql = require('mysql');

const DBConnection = () => {
  if(this instanceof DBConnection) {
    let self = this;
    this.connection = mysql.createConnection({
    	host: "localhost",
    	port: 3306,
    	user: "root",
    	password: "mysqlworkbench",
    	database: "playlist"
    });

    this.init = function() {
      self.connection.connect(err => {
        if(err) throw err;
        console.log("Connected on Thread: " + connection.threadId);
      });
    };
  } else {
    return new DBConnection;
  }
}

module.exports = DBConnection;