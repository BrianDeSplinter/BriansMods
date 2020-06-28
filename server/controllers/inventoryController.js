module.exports = {
    getInventory:
        async (req, res) => {
            const db = req.app.get('db')

            const inventory = await db.products.find()

            res.status(200).send(inventory)
        },

    getProduct:
        async (req, res) => {
            const db = req.app.get('db')

            const {id} = req.params

            try{
                const [product] = await db.products.find({id})

                if(product){
                    res.status(200).send(product)
                } else {
                    res.status(404).send('Product not found')
                }
            } catch (error){
                res.sendStatus(500)
            }

        },
    
    addProduct:
        async (req, res) => {
            const db = req.app.get('db')

            const {name, image_url, price, status, merchant_id, category, description, notes} = req.body

            await db.add_product(name, image_url, price, status, merchant_id, category, description, notes)

            res.status(200).send('Product added Successfully')
        },

    updateProduct:
        async (req, res) => {
            const db = req.app.get('db')
            
            const {id} = req.params
            const {name, image_url, price, status, merchant_id, category, description, notes} = req.body
            const lastEdit = 'now()'

            await db.update_product(name, image_url, price, status, merchant_id, lastEdit, category, description, notes, id)

            res.status(200).send('Product Updated')
        },

    deleteProduct:
        async (req, res) => {
            const db = req.app.get('db')

            const {id} = req.params

            await db.products.destroy({id})

            res.status(200).send('Product Deleted')
        }
}