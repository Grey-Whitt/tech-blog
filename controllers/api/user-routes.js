const router = require('express').Router();
const  User = require("../../models/User");



router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users
router.post('/', (req, res) => {
    // expects {username: 'user1', email: 'user1@gmail.com', password: '1234'}
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => {
           
            res.json(dbUserData);
            
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router