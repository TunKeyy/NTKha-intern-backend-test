'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stores', [
      {
        id: 1,
        owner_id: 21,
        name: 'Rose',
        logo: 'logo1.png',
        address: 'UIT',
        phone: '0123456789',
        email: 'rose@gmail.com',
        updatedAt: "2023-06-21T13:06:05.203Z",
        createdAt: "2023-06-21T13:06:05.203Z",
      },
      // Thêm dữ liệu mẫu khác tại đây
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stores', null, {});
  }
};
