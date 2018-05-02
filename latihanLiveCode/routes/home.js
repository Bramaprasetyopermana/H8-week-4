const fs = require('fs');
var express = require('express')
var router = express()
// const Model = require('./../models');




router.get('/', (req, res) => res.send('Welcome to Hacktiv8!'))

module.exports =router
