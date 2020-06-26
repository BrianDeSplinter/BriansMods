module.exports = {
    addItems: 
        async (req, res) => {
            const db = req.app.get('db')

            const {orderId, productId, quantity, total} = req.body
            await db.add_order_items(orderId, productId, quantity, total)

            res.sendStatus(200)
        },
    
    addOrder:
        async (req, res) => {
            const db = req.app.get('db')

            const {user, total} = req.body
            const status = 'pending'

            const id = await db.add_order(user, total, status)

            res.status(200).send(id)
        }
}











// {
//     "orderId": 5,
//     "productId": 1,
//     "quantity": 1,
//     "total": 479
// }
// {
//     "orderId": 5,
//     "productId": 2,
//     "quantity": 1,
//     "total": 95
// }
// {
//     "orderId": 5,
//     "productId": 3,
//     "quantity": 1,
//     "total": 349.99
// }