'use strict';
module.exports = (sequelize, DataTypes) => {
  class Role extends sequelize.Sequelize.Models{}
  Role.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role'
  });
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};