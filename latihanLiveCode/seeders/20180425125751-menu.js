'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Menus', [
        {
        name: 'Fried Chicken',
        menu_type: 'Food',
        rating:4,
        price:30000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Coke',
        menu_type: 'Drink',
        rating:3,
        price:15000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Burger',
        menu_type: 'Food',
        rating:5,
        price:45000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'French Fries',
        menu_type: 'Food',
        rating:3,
        price:25000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lemon Tea',
        menu_type: 'Drink',
        rating:5,
        price:12000,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Beef Teriyaki',
        menu_type: 'food',
        rating:4,
        price:35000,
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
