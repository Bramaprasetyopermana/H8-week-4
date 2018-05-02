const app = require('express').Router();
const db = require('../models/index.js')


app.get('/', (req,res)=>{
    req.session.customer_id = null
    res.redirect('/login')
})
module.exports = app;