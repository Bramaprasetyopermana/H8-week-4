'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('singers', [
        {
        name: 'Alicia Keys',
        createdAt :new Date(),
        updatedAt:new Date()
      },
      {
        name:'Jason Mraz',
        createdAt :new Date(),
        updatedAt:new Date()

      },
      {
        name:'Michael Jackson',
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
