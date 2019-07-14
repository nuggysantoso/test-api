const responseMessageCode = require('./../../helper/responseMessageAndCode.json')

const scenario = ({
    getSuccess: {
        successPostCheckout: 'Should Success Post Checkout',
    },
    getFailed: {
        failedPostCheckoutWithoutHeader: {
            Desc: 'Should Failed Post Checkout Without Header'
        },
        failedPostCheckoutWithExpiredOrderId: {
            Desc : 'Should Failed Post Checkout With Expired Order Id'
        }
    },
});

module.exports = {
    scenario,
};
