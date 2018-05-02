const fs = require('fs');
var express = require('express')
var router = express()
const Model = require('./../models');

//========= show singer ===============
router.get('/', function(req, res) {
  Model.singer.findAll({
      include: [{
        model: Model.song
      }],order: [
        ['id', 'ASC']
      ]
    })
    .then(singers => {
      res.render('showSinger', {
        dataSinger: singers
      })
    })
})

//========== add singer =========
router.get('/add', function(req, res) {
  res.render('addSinger')
})

router.post('/add', function(req, res) {
  Model.singer.create({

    name: req.body.Name

  }).then(function() {
    res.redirect('/singers')
  })
  .catch(function(err){
    res.send('Incorrect input name')
  })
})
//============= edit singer ===========

router.get('/edit/:id', function(req, res) {
  let editSingerId = req.params.id
  Model.singer.findOne({

    where: {
      id: editSingerId
    }

  }).then(function(singerEdit) {
    res.render('editSinger', {
      singerEdit
    })
  })
})

router.post('/edit/:id', function(req, res) {
  let changeOrEditSinger = req.params.id
  Model.singer.update({

      name: req.body.Name

    }, {
      where: {
        id: changeOrEditSinger
      }
    })
    .then(function() {
      res.redirect('/singers')
    })
})

//============ delete singer ============
router.get('/delete/:id', function(req, res) {
  let deleteSinger = req.params.id
  Model.singer.destroy({
      where: {
        id: deleteSinger
      }
    })
    .then(function() {
      res.redirect('/singers')
    })
})




module.exports = router
