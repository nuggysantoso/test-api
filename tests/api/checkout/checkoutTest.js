const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
chai.use(require('chai-subset'));

const mocha = require('mocha');
const coMocha = require('co-mocha');

coMocha(mocha);
const checkoutSchema = require('./../../helper/schema/checkout/checkout_schema.json');
const checkoutSchemaWithoutHeader = require('./../../helper/schema/checkout/checkout_without_header_schema.json');
const checkout = require('./../../page-objects/checkout/checkout.js');
const checkoutTestData = require('./../../helper/test-data/checkout/checkout_test_data.js');
const checkoutTescase = require('./../../testcases/checkout/checkout_testcases.js')
const globalFunc = require('./../../page-objects/globalFunction.js');
const responseMessageCode = require('./../../helper/responseMessageAndCode.json');

describe.only('Checkout API Test', () =>{
    it(`${checkoutTescase.scenario.getSuccess.successPostCheckout}`, async () => {
        const response = await checkout.postCheckout(globalFunc.generateCheckoutData(), checkoutTestData.checkoutData);
        expect(response.status).to.equal(responseMessageCode.successOk);
        expect(response.body).to.be.jsonSchema(checkoutSchema.checkoutSchema);
    });

    it(`${checkoutTescase.scenario.getFailed.failedPostCheckoutWithoutHeader.Desc}`, async () => {
        const response = await checkout.postCheckoutWithoutHeader();
        expect(response.body).to.be.jsonSchema(checkoutSchemaWithoutHeader.checkoutSchemaWithoutHeader);
    });

    it(`${checkoutTescase.scenario.getFailed.failedPostCheckoutWithExpiredOrderId.Desc}`, async () => {
        checkoutTestData.checkoutData.transaction_details.order_id = "KD14721";
        console.log(checkoutTestData.checkoutData.transaction_details.order_id);
        const response = await checkout.postCheckoutExpiredOrderId(checkoutTestData.checkoutData);
        expect(response.body).to.be.jsonSchema(checkoutSchemaWithoutHeader.checkoutSchemaWithoutHeader);
    });
});
