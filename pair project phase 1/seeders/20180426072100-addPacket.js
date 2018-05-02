'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Packets', [{
        name: 'Paket A',
        createdAt: new Date,
        updatedAt: new Date
      },{
        name: 'Paket B',
        createdAt: new Date,
        updatedAt: new Date
      },{
        name: 'Paket C',
        createdAt: new Date,
        updatedAt: new Date
      
      }], {});

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
