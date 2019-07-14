const supertest = require('supertest');
const env = require('dotenv').config();
const baseURL = require('./../../helper/base_url_details.js');

const baseAPI = supertest(baseURL.baseUrlApi.url);
const path = '/v2/checkout_url';

function postCheckout(generateOrderId, checkoutData){
    return baseAPI
    .post(path)
    .set('Content-Type', 'application/json')
    .send(checkoutData)
}

function postCheckoutWithoutHeader(){
    return baseAPI
    .post(path)
}

function postCheckoutExpiredOrderId(checkoutData){
    return baseAPI
    .post(path)
    .set('Content-Type', 'application/json')
    .send(checkoutData)
}

module.exports = {
    postCheckout,
    postCheckoutWithoutHeader,
    postCheckoutExpiredOrderId
}
