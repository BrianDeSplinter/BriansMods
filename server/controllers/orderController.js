module.exports = {
    addItems: 
        async (req, res) => {
            const db = req.app.get('db')

            const {items} = req.body
            //const {orderId, productId, quantity, total} = req.body
            
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