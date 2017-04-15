
const DBConnection = require('./dbConnection.js');



function makePurchaseCallback(err, res) {
  let left = res[0].stock_quantity - self.quantity;
  let cost = res[0].price;
  if(left >= 0){
    customerConnection.purchaseUpdate(left, self.item);
    console.log(`Purchase Complete: ${self.quantity} of ${self.item} for ${self.quantity * cost}`);
  } else {
    console.log("We apologize, we have an insufficient stock quantity for your request...");
  }
};

let customerConnection = new DBConnection("customer");
customerConnection.init();
//customerConnection.displayProducts();
