const route = require('express').Router()
const Model = require('../models/index')



route.get('/',function(req,res){
	Model.Packet.findAll({include:Model.Menu}).then(Menu_Packet=>{
		// res.send(Menu_Packet)
		res.render("packet",({Menu_Packet:Menu_Packet}))
	})
})

route.get('/addPacket',function(req,res) {
	Model.Menu.findAll().then(dataMenus=> {
		res.render("add-packet",{dataMenus:dataMenus})
	})
})

route.post('/addPacket',function(req,res){
	Model.Packet.create({name:req.body.name}).then(
		Model.Packet.findAll({order: [['id', 'DESC']]})).then(result =>{
			Model.Menu_Packet.create({
				PacketId: result.id,
				MenuId: req.body.menu1
			}).then(
			Model.Menu_Packet.create({
				PacketId: result.id,
				MenuId: req.body.menu2
			}).then(
			Model.Menu_Packet.create({
				PacketId: result.id,
				MenuId: req.body.menu3
			}))
			) 
		}).then(res.redirect('/packets'))
})

route.get('/:id/edit',function(req,res) {
	Model.Menu.findAll().then(dataMenus=> {
		Model.Packet.findById(req.params.id).then(dataPacket =>{
			res.render("edit-packet",{dataMenus:dataMenus,dataPacket:dataPacket})	
		})
		
	})
})

route.post('/:id/edit',function(req,res) {
	
	Model.Menu_Packet.findAll({where : {PacketId: req.params.id}}).then( menuPacket=>{
		// res.send(menuPacket)
		Model.Menu_Packet.update({
			MenuId: req.body.menu1
		},{where:{
			PacketId: req.params.id,
			MenuId: menuPacket[0].MenuId 
		}}).then(
		Model.Menu_Packet.update({
			MenuId: req.body.menu2
		},{where:{
			PacketId: req.params.id,
			MenuId: menuPacket[1].MenuId 
		}}).then(
		Model.Menu_Packet.update({
			MenuId: req.body.menu3
		},{where:{
			PacketId: req.params.id,
			MenuId: menuPacket[2].MenuId 
		}}).then(
		res.redirect('/packets')
		)
		)
		)
	})
})

route.get('/:id/delete',function(req,res) {
	Model.Packet.destroy({where:{id:req.params.id}}).then(
		Model.Menu_Packet.destroy({where:{PacketId:req.params.id}})
		).then(res.redirect("/packets"))
})

//========================================//
// router.get('/:id/buy',function(req,res) {
// 	Model.
// })





module.exports=route