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
    return queryInterface.bulkInsert('Menu_Packets', [{
        MenuId: 2,
        PacketId: 1,
        updatedAt: new Date,
        createdAt: new Date
      },{
        MenuId: 1,
        PacketId: 1,
        updatedAt: new Date,
        createdAt: new Date
      },{
        MenuId: 3,
        PacketId: 1,
        updatedAt: new Date,
        createdAt: new Date
      },{
        MenuId: 4,
        PacketId:2,
        updatedAt: new Date,
        createdAt: new Date 
      },{
        MenuId: 5,
        PacketId: 2,
        updatedAt: new Date,
        createdAt: new Date
      },{
        MenuId: 6,
        PacketId: 2,
        updatedAt: new Date,
        createdAt: new Date
      },{
        MenuId: 7,
        PacketId: 3,
        updatedAt: new Date,
        createdAt: new Date
      },{
        MenuId: 2,
        PacketId: 3,
        updatedAt: new Date,
        createdAt: new Date
      },{
        MenuId: 3,
        PacketId: 3,
        updatedAt: new Date,
        createdAt: new Date
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
