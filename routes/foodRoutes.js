const router = require('express').Router();
const data = require('../public/data.js');


router.get('/soups', (req, res) => {
    res.json(data.soups).status(200)
});

router.get('/salads', (req, res) => {
    res.json(data.salads).status(200)
});



module.exports = router;