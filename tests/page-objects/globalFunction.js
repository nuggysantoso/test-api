const { expect } = require('chai');
let checkoutData = require('./../helper/test-data/checkout/checkout_test_data.js')

function compareResponseBodyDataItemsWithJsonSchema(responseBodyDataArray, jsonSchema){
  for(item in responseBodyDataArray){
    expect(responseBodyDataArray[item]).to.be.jsonSchema(jsonSchema);
  }
}

function generateRandomNumber(size){
  let randomNumber = "";
  let possible = "0123456789";

  for (let i = 0; i < size; i++){
    randomNumber += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return randomNumber;
}

function generateCheckoutData(){
  checkoutData.checkoutData.transaction_details.order_id = 'KD' + generateRandomNumber(6);
}

module.exports = {
  compareResponseBodyDataItemsWithJsonSchema,
  generateRandomNumber,
  generateCheckoutData
}
