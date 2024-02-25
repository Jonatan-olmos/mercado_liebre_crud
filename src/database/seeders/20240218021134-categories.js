'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     
      await queryInterface.bulkInsert('Categories', [{
        name: 'visited',
        image: null
      }], {});
  
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('People', null, {});
     
  }
};
