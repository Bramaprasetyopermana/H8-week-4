const fs = require('fs');
var router = require('express').Router()

const Model = require('./../models');
const bcrypt = require('bcrypt')

router.get('/',function(req,res){
    res.render('login')
    })

router.post('/', (req,res) => {
    Model.customer.findOne({where: {username: req.body.username}}).then(user => {
        if(user){
            // console.log(user)
            bcrypt.compare(req.body.password, user.password, function(err, password) {
                    if(password){
                        req.session.customer_id =  user.id;
                        req.session.username = user.username;
                        req.session.height = user.tinggi_badan;
                        req.session.weight = user.berat_badan;
                        req.session.activity = user.level_activity;
                        req.session.gender = user.gender;
                        req.session.age = user.age
                       // req.session.level = 'user';
                       res.redirect(`/customer/${user.id}/packet`)
                    //    Model.customer.update({
                    //         BMI: bmi_counter({ weight: req.session.weight, height: req.session.height}),
                    //         BMR: bmr_counter({
                    //         gender: req.session.gender,
                    //         weight: req.session.weight, //in kilograms
                    //         height: req.session.height/100, //in meters
                    //         age: req.session.age,
                    //         activityLevel : req.session.activity
                    //             })
                    //         },{where : {id: req.session.customer_id}}).then(res.redirect(`/customer/${user.id}/packet`))
                     } else {
                        res.render('login',{ error: {message: 'Incorrect email/password'}})
                    }
                })
            // let password = bcrypt.compareSync(req.body.password, user.password)
        
        } else {
            res.render('login',{ error: {message: 'Incorrect email/password'}})
            
        }
    })
    
})


module.exports = router