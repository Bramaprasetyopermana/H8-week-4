'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('songs', [
        {
          title:'Versace On The Floor',
          createdAt :new Date(),
          updatedAt:new Date()
      },
      {
        title:'Ben',
        createdAt :new Date(),
        updatedAt:new Date()
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
