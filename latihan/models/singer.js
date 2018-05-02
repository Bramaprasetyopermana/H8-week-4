'use strict';
module.exports = (sequelize, DataTypes) => {
  var singer = sequelize.define('singer', {
    name: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: ["^[a-z]+$", 'i']
        }
      }
    }
  }, {
    // hooks: {
    //   beforeValidate: (singer, options) => {
    //     singer.lastName = '';
    //   }
    // }
  });
  singer.associate = function(models) {
    // associations can be defined here
    singer.belongsTo(models.song, {
      foreignKey: 'SongId'
    })
  };
  return singer;
};
