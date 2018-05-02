const route = require('express').Router()
const Model = require('../models/index')

route.get('/login',function(req,res){
	res.render('adminLogin')
})

route.get('/database',function(req,res) {
	res.render("listDatabase")
})



module.exports =route;