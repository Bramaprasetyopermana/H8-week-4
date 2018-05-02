'use strict';
module.exports = (sequelize, DataTypes) => {
  var song = sequelize.define('song', {
    title: DataTypes.STRING
  }, {});
  song.associate = function(models) {
    // associations can be defined here
    // song.hasMany(models.singer,{foreignKey :'SongId'})
  };
  return song;
};
