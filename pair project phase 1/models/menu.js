'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
    Menu.belongsToMany(models.Packet,{ through: models.Menu_Packet })
  };
  return Menu;
};