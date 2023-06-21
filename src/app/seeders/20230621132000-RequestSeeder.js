'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('JobRequests', [
      {
        id: 1,
        store_id: 1,
        freelancer_id: 20,
        request_type: 'freelancer',
        status: 'Đang chờ',
        updatedAt: "2023-06-21T13:06:05.203Z",
        createdAt: "2023-06-21T13:06:05.203Z",
      },
      // Thêm dữ liệu mẫu khác tại đây
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('JobRequests', null, {});
  }
};