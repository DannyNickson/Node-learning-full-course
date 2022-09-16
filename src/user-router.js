const Router = require('../framework/Router')

const router = new Router()

const users = [
    { id: 1, name: "Danny" },
    { id: 2, name: "Vicky" }
]

router.get('/users', (req, res) => {
    res.end(JSON.stringify(users));
})

router.get('/users', (req, res) => {
    res.end(JSON.stringify(users));
})

module.exports = router;