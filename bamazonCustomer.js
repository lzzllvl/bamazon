const prompt = require('prompt');

const customer = {
  purchaseUpdate: function(connection, quant, prodName, cb) {
    connection.query("UPDATE products SET ? WHERE ?",
                     [{stock_quantity: quant}, {product_name: prodName}],
                     cb);
  },
  getItem: function(cb) {
    prompt.start();
    prompt.get(['item'], cb);
  },
  getQuantity: function(cb) {
    prompt.start();
    prompt.get(['quantity'], cb);
  },
  makePurchase: function(connection, item, quantity, cb) {
    if(this.quantity && this.item){
      customerConnection.connection.query("SELECT * FROM products WHERE product_name = ?", this.item, cb);
    } else {
      console.log("Error: Quantity and/or Item is invalid.");
    }
  }
}

module.exports = customer;
