'use strict';
module.exports = (sequelize, DataTypes) => {
  class Catalog extends sequelize.Sequelize.Models{}

  Catalog.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    categoryId: {
      type: DataTypes.INTEGER,
      refferences: {
        models: 'Categories',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    product_gender: DataTypes.STRING,
    product_size: DataTypes.STRING,
    tagsId: {
      type: DataTypes.INTEGER,
      refferences: {
        models: 'Tags',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    urlId: {
      type: DataTypes.INTEGER,
      refferences: {
        models: 'Urls',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Catalog'
  });
  Catalog.associate = function(models) {
    // associations can be defined here
  };
  return Catalog;
};