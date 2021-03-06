'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    menu_type: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Menu.associate = function(models) {
    Menu.belongsTo(models.Restaurant,{
      foreignKey:'restaurantId'
    })
  };
  return Menu;
};
