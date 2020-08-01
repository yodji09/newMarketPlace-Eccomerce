'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Models{}
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    address: DataTypes.STRING,
    money: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: {
      type: DataTypes.INTEGER,
      refferences: {
        models: 'Roles',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }
  }, {
    sequelize,
    modelName: 'User'
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};