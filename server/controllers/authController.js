const bcrypt = require('bcrypt')

module.exports = {
    login:
        async (req, res) => {
            const db = req.app.get('db')
            const {email, password} = req.body

            const user = await db.check_user(email)

            if(!user[0]){
                return res.status(403).send('Email or Password incorrect')
            } else {
                const authenticated = bcrypt.compareSync(password, user[0].password)
                if(authenticated){
                    req.user = {
                        userId: user[0].id,
                        email: user[0].email,
                        name: user[0].full_name
                    }
                    res.status(200).send(req.user)
                } else {
                    res.status(403).send('Username or Password incorrect')
                }
            }
        },

    register:
        async (req, res) => {
            const db = req.app.get('db')
            const {full_name, email, password} = req.body

            const existingUser = await db.check_user(email)

            if(existingUser[0]){
                return res.status(409).send('Account already exists with that email address')
            }

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            const newUser = await db.register_user([email, hash])

            req.user = {
                userId: newUser[0].id,
                email: newUser[0].email,
                name: newUser[0].full_name
            }

            res.status(200).send(req.user)
        }
}