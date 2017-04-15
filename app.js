const DBConnection = require('./dbConnection.js');

function makePurchaseCallback(item, left, cost, quant) {
  if(left >= 0) {
    console.log(`Purchase Complete: You bought ${item}(${quant}) for $${quant * cost}`);
  } else {
    console.log("We apologize, we have an insufficient stock quantity for your request...");
  }
};



let db = new DBConnection("customer");
db.init();
db.connectionMethods.displayProducts(db.connection, function(err, res) {
  if(err) throw err;
  let logStr = "ALL BAMAZON PRODUCTS\n================================\n";
  res.forEach(val => {
    logStr += `Product: ${val.product_name}, `
            + `Price: ${val.price.toFixed(2)}, `
            + `In Stock: ${val.stock_quantity}\n\n`;
  })
  console.log(logStr);
  db.connectionMethods.getInput(function(err, res) {
      if (err) throw err;
      db.connectionMethods.makePurchase(db.connection, res.item, res.quantity, makePurchaseCallback);
    });
});



