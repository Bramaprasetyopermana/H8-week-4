'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [{
      name: 'Nasi Goreng Ayam',
      calories: 400,
      price: 15000
    },{
      name: 'Nasi Goreng Telur',
      calories: 350,
      price: 13000
    },{
      name: 'Bubur Ayam',
      calories: 220 ,
      price: 10000
    }])
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
