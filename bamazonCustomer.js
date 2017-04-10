const DBConnection = require('./dbConnection.js');
const prompt = require('prompt');

DBConnection.prototype.displayProducts = function(){
  let conn = this.connection;
  conn.query("SELECT * FROM products", function(err, res){
    if(err) throw err;
    console.log(res);
  });
};


const customer = {

}

module.exports = customer; 
