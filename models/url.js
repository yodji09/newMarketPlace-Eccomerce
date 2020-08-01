'use strict';
module.exports = (sequelize, DataTypes) => {
  class Url extends sequelize.Sequelize.Models{}

  Url.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Url'
  });
  Url.associate = function(models) {
    // associations can be defined here
  };
  return Url;
};