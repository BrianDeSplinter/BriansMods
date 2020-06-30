module.exports = {
    getCart:
        (req, res) => {
            // if(req.session.user) {
            //     res.status(200).send(req.session.cart)
            // } else {
            //     res.sendStatus(200)
            // }
        },
    
    addCart:
        (req, res) => {
            // const {cart} = req.body
            // req.session.user = {
            //     cart: cart
            // }
            // res.send(200).send(req.session.user)
    }
}