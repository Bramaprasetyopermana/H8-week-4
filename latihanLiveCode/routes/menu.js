const fs = require('fs');
var express = require('express')
var router = express()
const Model = require('./../models');


//============== show Menu==========
router.get('/', function(req, res) {
  Model.Menu.findAll({include:[{model:Model.Restaurant}],order:[['id','ASC']]})
    .then(function(menu) {
      // res.send(menu)
      res.render('showMenu', {
        listMenu: menu
      })
    })
})


//============== add menu ===========
router.post('/', function(req, res) {
  Model.Menu.create({

      name: req.body.name,
      menu_type: req.body.menu_type,
      rating: req.body.rating,
      price: req.body.price

    })
    .then(function() {
      res.redirect('/menus')
    })
})

//=============== find menu id ===========
router.get('/:id/edit', function(req, res) {
  let editId = req.params.id
  Model.Menu.findOne({
      where: {
        id: editId
      }
    })
    .then(function(id) {
      res.render('editMenu', {
        menuId: id
      })
    })
})

//============ edit menu id ==============
router.post('/:id/edit', function(req, res) {
  let menuEdit = req.params.id
  Model.Menu.update({
      name: req.body.name,
      menu_type: req.body.menu_type,
      rating: req.body.rating,
      price: req.body.price
    }, {
      where: {
        id: menuEdit
      }
    })
    .then(function() {
      res.redirect('/menus')
    })
})

// ============== delete =======
router.get('/:id/delete',function(req,res){
  let deleteId =req.params.id
  Model.Menu.destroy({
    where:{
      id:deleteId
    }
  })
  .then(function(){
    res.redirect('/menus')
  })
})

module.exports = router
