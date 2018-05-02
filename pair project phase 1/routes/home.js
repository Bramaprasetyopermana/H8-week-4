const fs = require('fs');
var router = require('express').Router()
const Model = require('./../models');
const bcrypt = require('bcrypt')
let saltRounds = 10


router.get('/',function(req,res){
res.render('home')
})

//======================================
// router.post('/',function(req,res,next){
//   //res.send(req.body)
//   let loginName = req.body.username
//   let loginPassword = req.body.password
// Model.customer.findOne({
//   where:{
//     username:loginName,
//     password:loginPassword
//   }
// })
// .then(result=>{
//   //Model.customer.findOne()
//   //res.send(result)
//   res.redirect(`/customer/${result.id}/packet/`)
// })
// })
//========================================
router.get('/customer/:id/packet/', function(req,res) {
  Model.Packet.findAll({include:Model.Menu}).then(dataPackets=> {
    Model.customer.findById(req.session.customer_id).then(dataCustomer=> {
      //res.send(`-----${dataCustomer.BMR}`)

      res.render('paketCustomerMenu',{dataPackets:dataPackets,customerId:req.session.customer_id,dataCustomer:dataCustomer })
    })

    //res.send(dataPackets)
      
  })
  
})
  
router.get('/customer/packet/:id2/view/',function(req,res) {
  //res.send(req.params.id2)
  Model.Packet.findOne({where:{id:req.params.id2},include:Model.Menu} ).then(dataPacket=> {
  //res.send(dataPacket)
  //res.send(dataPacket)
    res.render('viewMenu',{dataPacket:dataPacket})
  })
})


router.get('/customer/:id/packet/:id2', (req,res) => {
  res.send('Pembelian berhasil')
})


router.get('/register',function(req,res){
  res.render('registerForm')
})

router.post('/register',function(req,res){
  bcrypt.hash(req.body.password,saltRounds,function (err, hash) {
    Model.customer.create({
      name: req.body.name,
      username: req.body.username,
      password: hash,
      tinggi_badan :req.body.tinggi_badan,
      berat_badan:req.body.berat_badan,
      gender:req.body.gender,
      level_activity:req.body.level_activity,
      age:req.body.age
    })
    .then(function(){
      res.redirect('/login')
    })
  })
  
})





module.exports = router
