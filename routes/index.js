const express = require('express');
const router  = express.Router();
const Home = require('../models/Home');

/* GET home page */
router.get('/', (req, res, next) => {
res.render('index');
});



module.exports = router;
