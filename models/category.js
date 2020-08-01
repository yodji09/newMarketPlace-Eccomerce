'use strict';
module.exports = (sequelize, DataTypes) => {
  class Category extends sequelize.Sequelize.Models{}

  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category'
  });
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};