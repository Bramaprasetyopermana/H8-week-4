'use strict';
module.exports = (sequelize, DataTypes) => {
  var Packet = sequelize.define('Packet', {
    name: DataTypes.STRING
  }, {});
  Packet.associate = function(models) {
    // associations can be defined here
    Packet.belongsToMany(models.Menu,{ through: models.Menu_Packet })
  };
  return Packet;
};