'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: 20,
        username: "ntkha@gmail.com",
        full_name: "Nguyễn Tuấn Kha",
        phone: "0375627330",
        email: "ntkha@gmail.com",
        password: "123456",
        date_of_birth: "2023-01-07T00:00:00.000Z",
        avatar: "avatar.jpg",
        gender: "male",
        identify_code: "",
        is_verify: true,
        user_type: "freelancer",
        updatedAt: "2023-06-21T13:06:05.203Z",
        createdAt: "2023-06-21T13:06:05.203Z",
        address: "UIT"
      },
      {
        id: 21,
        username: "kha@gmail.com",
        full_name: "Tuấn Kha",
        phone: "0375627330",
        email: "kha@gmail.com",
        password: "123456",
        date_of_birth: "2023-01-07T00:00:00.000Z",
        avatar: "avatar.jpg",
        gender: "male",
        identify_code: "f49ffa06-4faf-4855-8c0f-5335b47ec899",
        is_verify: true,
        user_type: "owner",
        updatedAt: "2023-06-21T13:06:05.203Z",
        createdAt: "2023-06-21T13:06:05.203Z",
        address: null
      },
      // Thêm dữ liệu mẫu khác tại đây
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};