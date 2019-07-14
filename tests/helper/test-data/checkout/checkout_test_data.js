let orderdId;

const checkoutData = {
    "server_key":"8tLHIx8V0N6KtnSpS9Nbd6zROFFJH7",
    "payment_type":"30_days",
    "tokenize_user": false,
    "client_user_key": "randy@finaccel.co",
    "user_token" : "XXXX-XXXX",
    "transaction_details": {
        "amount":6505000,
        "order_id":`${orderdId}`,
        "items": [
            {
                "id":"BB12345678",
                "name":"iPhone 5S",
                "price":6000000,
                "type":"Smartphone",
                "url":"http://merchant.com/cellphones/iphone5s_64g",
                "quantity":1
            },
            {
                "id":"AZ14565678",
                "name":"Hailee Sneakers Blink Silver",
                "price":250000,
                "url":"http://merchant.com/fashion/shoes/sneakers-blink-shoes",
                "type":"Sneakers",
                "quantity":2,
                "parent_type":"SELLER",
                "parent_id":"SELLER456"
            },
            {
                "id":"taxfee",
                "name":"Tax Fee",
                "price":1000,
                "quantity":1
            },
            {
                "id":"shippingfee",
                "name":"Shipping Fee",
                "price":9000,
                "quantity":1,
                "parent_type":"SELLER",
                "parent_id":"SELLER456"
            },
            {
                "id":"discount",
                "name":"Discount",
                "price":5000,
                "quantity":1
            }
        ]
    },
    "sellers":[
        {
            "id":"SELLER123",
            "name":"Sunrise",
            "email": "sunrise@gmail.com",
            "url":"https://onlineshop/seller/sunrise",
            "address" : {
                "first_name":"Irfan",
                "last_name":"Sutandro",
                "address":"Jalan Tentara Pelajar no 49",
                "city":"Jakarta Utara",
                "postal_code":"12960",
                "phone":"08123456789",
                "country_code":"IDN"
            }
        },
        {
            "id":"SELLER456",
            "name":"Toko Bagus",
            "email": "tokobagus@gmail.com",
            "url":"https://onlineshop/seller/tokobagus",
            "address" : {
                "first_name":"Toto",
                "last_name":"Wahyuni",
                "address":"Jalan Krici raya IX",
                "city":"Jakarta Selatan",
                "postal_code":"12960",
                "phone":"08123456789",
                "country_code":"IDN"
            }
        }
    ],
    "customer_details": {
        "first_name":"Oemang",
        "last_name":"Tandra",
        "email":"alie@satuduatiga.com",
        "phone":"081513114262"
    },
    "billing_address": {
        "first_name":"Oemang",
        "last_name":"Tandra",
        "address":"Jalan Teknologi Indonesia No. 25",
        "city":"Jakarta",
        "postal_code":"12960",
        "phone":"081513114262",
        "country_code":"IDN"
    },
    "shipping_address": {
        "first_name":"Oemang",
        "last_name":"Tandra",
        "address":"Jalan Teknologi Indonesia No. 25",
        "city":"Jakarta",
        "postal_code":"12960",
        "phone":"081513114262",
        "country_code":"IDN"
    },
    "metadata": {
        "ip_address":"192.168.88.1",
        "user_agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0"
    },
    "push_uri":"https://api.merchant.com/push",
    "back_to_store_uri":"https://merchant.com"
}

module.exports = {
    checkoutData
}