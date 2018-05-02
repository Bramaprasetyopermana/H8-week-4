const fs = require('fs');
var express = require('express')
var router = express()

router.get('/', (req, res) =>
res.render('home',{data:'Welcome to Sony Music ID'}))




module.exports = router
