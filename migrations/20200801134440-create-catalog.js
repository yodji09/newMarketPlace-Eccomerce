'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Catalogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER,
        refferences: {
          model: 'Categories',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      product_gender: {
        type: Sequelize.STRING
      },
      product_size: {
        type: Sequelize.STRING
      },
      tagsId: {
        type: Sequelize.INTEGER,
        refferences: {
          model: 'Tags',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      urlId: {
        type: Sequelize.INTEGER,
        refferences: {
          model: 'Urls',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Catalogs');
  }
};