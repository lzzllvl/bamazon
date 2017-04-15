const prompt = require('prompt');

const customer = {
  displayProducts: function(conn, cb) {
    conn.query("SELECT * FROM products", cb);
  },



  getInput: function(cb) {
    prompt.start();
    prompt.get(['item', 'quantity'], cb);
  },



  makePurchase: function(connection, item, quantity, cb) {
    if(quantity > 0) {
      connection.query("SELECT * FROM products WHERE product_name = ?", [item], function(err, res) {
        if(err) throw err;
        let left = parseInt(res[0].stock_quantity) - parseInt(quantity);
        let cost = res[0].price;

        cb(item, left, cost, quantity);
        if(left >= 0) {
          connection.query("UPDATE products SET ? WHERE ?",[{stock_quantity: left}, {product_name: item}], function(err) {
            if(err) throw err;
            connection.end();
          });
      };
    });
    } else {
      console.log("Error: Quantity and/or Item is invalid.");
      connection.end();
    }
  }
}

module.exports = customer;
