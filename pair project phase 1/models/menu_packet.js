'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu_Packet = sequelize.define('Menu_Packet', {
    MenuId: DataTypes.INTEGER,
    PacketId: DataTypes.INTEGER
  }, {});
  Menu_Packet.associate = function(models) {
    // associations can be defined here
  };
  return Menu_Packet;
};