const express = require('express');
const router = express.Router();


//model routers

router.use('/results', require('./results'));
router.use('/registers', require('./registers'));


module.exports = router;