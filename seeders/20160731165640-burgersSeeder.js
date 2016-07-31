'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('burgers', [
      {
      burger_name: 'Plain Ole Burger',
      devoured: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    burger_name: 'Veggie Burger',
    devoured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
  burger_name: 'P-I-Z-Z-A Buger',
  devoured: false,
  createdAt: new Date(),
  updatedAt: new Date()
  },
  {
  burger_name: 'Chli Cheese Burger',
  devoured: true,
  createdAt: new Date(),
  updatedAt: new Date()
},
  ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    queryInterface.removeIndex('burgers', null, {});
    queryInterface.bulkDelete('burgers', null, {});
  }
};
