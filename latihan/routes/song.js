const fs = require('fs');
var express = require('express')
var router = express()
const Model = require('./../models');

router.get('/',function(req,res){
  Model.song.findAll({order:[['id','ASC']]})

  .then(function(songData){
    res.render('showSong',{
      songs :songData
    })
  })

})

router.get('/add',function(req,res){
  res.render('addSong')
})

router.post('/add',function(req,res){
  Model.song.create({
    title:req.body.Title
  })
  .then(function(){
    res.redirect('/songs')
  })
})
module.exports = router
