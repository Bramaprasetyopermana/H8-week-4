const route = require('express').Router()
const Model = require('../models/index')

route.get('/', (req,res)=>{
    Model.Menu.findAll({order:[['id','ASC']]})
    .then(menus => {
        res.render('menu', {menus: menus})
    })
})
//add
route.get('/add', (req,res) => {
    res.render('add-menu')
})

route.post('/add', (req,res) => {
    Model.Menu.create({
        name: `${req.body.name}`,
        calories: req.body.calories,
        price: req.body.price
    }) 
    .then (result =>{
        res.redirect('/menus')
    })
    .catch (err =>{
        res.send(err)
    })
})
//edit
route.get('/edit/:id', (req,res) =>{
    Model.Menu.findById(req.params.id).then(menu => {
        res.render('edit-menu', {
            menu: menu
        })
    })
})

route.post('/edit/:id', (req,res)=>{
    Model.Menu.update({
        name: `${req.body.name}`,
        calories: req.body.calories,
        price: req.body.price
    },{where: {id: req.params.id}})
    .then(result => {
        res.redirect('/menus')
    })
    .catch (err =>{
        res.send(err)
    })
})
//delete
route.get('/delete/:id',(req,res) => {
    Model.Menu.destroy({where: {id: req.params.id}})
    res.redirect('/menus')
})

module.exports = route