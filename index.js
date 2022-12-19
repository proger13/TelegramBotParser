
const axios = require('axios');
const banks = [185, 75, 62, 64, 379, 63]

async function a() {

    const result = await axios({
        url: 'https://api2.bybit.com/spot/api/otc/item/list',
        method: 'POST',
        headers: {
            Connection: 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: 'tokenId=USDT&currencyId=RUB&side=1&size=30&page=1',
    }
    )
    const orders = result.data.result.items.filter(function (order) {
        return order.payments.some(r => banks.includes(r))
    })


    const order = orders.find(function(order) {
        return +order.lastQuantity > 1000
    })
    console.log(order.price)
}
a()


