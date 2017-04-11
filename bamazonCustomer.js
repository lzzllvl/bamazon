const DBConnection = require('./dbConnection.js');
const prompt = require('prompt');

DBConnection.prototype.displayProducts = function() {
  let conn = this.connection;
  conn.query("SELECT * FROM products", function(err, res) {
    if(err) throw err;
    console.log(res);
  });
};

DBConnection.prototype.purchaseUpdate = function(quant, prodName) {
  this.connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: quant},
                                                          {product_name: prodName}],
                                                          function(err){
                                                            if(err) throw err;
                                                          });
}

const customerConnection = DBConnection();
customerConnection.init("Customer");
const customer = {
  getItem: function() {
    customerConnection.displayProducts();
    var self = this;
    prompt.start();
    prompt.get(['item'], function(err, result) {
      self.item = result.item;
    });
  },
  getQuantity: function() {
    var self = this;
    prompt.start();
    prompt.get(['quantity'], function(err, result) {
      self.quantity = parseInt(result.quantity);
    });
  },
  makePurchase: function() {
    if(this.quantity && this.item){
      var self = this;
      customerConnection.connection.query("SELECT * FROM products WHERE product_name = ?", self.item, function(err, res) {
        let left = res[0].stock_quantity - self.quantity;
        if(left >= 0){
          customerConnection.purchaseUpdate(left, self.item);
        } else {
          console.log("We apologize, we have an insufficient stock quantity for your request...");
        }
      });
    } else {
      console.log("Error: Quantity and/or Item is invalid.");
    }
  }
}

module.exports = customer;
