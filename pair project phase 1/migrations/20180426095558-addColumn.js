'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.addColumn(
      'customers',
      'gender',
      Sequelize.STRING
    );

    queryInterface.addColumn(
      'customers',
      'age',
      Sequelize.INTEGER
    );

    queryInterface.addColumn(
      'customers',
      'level_activity',
      Sequelize.STRING
    );

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
