'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Restaurants', [
        {
        name: 'Hokben',
        address: 'Depok',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kfc',
        address: 'Jakarta Selatan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mcd',
        address: 'Bojong',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
