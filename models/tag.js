'use strict';
module.exports = (sequelize, DataTypes) => {
  class Tag extends sequelize.Sequelize.Models{}

  Tag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag'
  });
  Tag.associate = function(models) {
    // associations can be defined here
  };
  return Tag;
};