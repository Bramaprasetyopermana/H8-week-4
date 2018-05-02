const fs = require('fs');
var router = require('express').Router()

const Model = require('./../models');


//======== show customer ============
router.get('/', function(req, res) {
  Model.customer.findAll()
    .then(customerList => {
      res.render('customer', {
        customerData: customerList
      })
    })
})


    // ============== edit customer =============
    router.get('/edit/:id', function(req, res) {
      let idCustomer = req.params.id
      Model.customer.findOne({
          where: {
            id: idCustomer
          }
        })
        .then(function(dataId) {
          res.render('editCustomer', {
            customerId : dataId
          })
        })
    })

    router.post('/edit/:id', function(req, res) {
      let idCustomer = req.params.id
      // console.log("============",req.body)
      Model.customer.update({

        name: req.body.name,
        username: req.body.username,
        password:req.body.password,
        tinggi_badan :req.body.tinggi_badan,
        berat_badan:req.body.berat_badan,
        gender:req.body.gender,
        level_activity:req.body.level_activity,
        age:req.body.age

      },{
        where:{
          id:idCustomer
        }
      })
      .then(function(){
        res.redirect('/customer')
      })
    })

    //============== delete customer ===============
    router.get('/delete/:id',function(req,res){
      let deleteCustomerById = req.params.id
      Model.customer.destroy({
        where:{
          id : deleteCustomerById
        }
      })
      .then(function(){
        res.redirect('/customer')
      })
    })




    module.exports = router
