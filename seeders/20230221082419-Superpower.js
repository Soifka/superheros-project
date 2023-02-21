'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('superpowers',
    [
      {
        "description": "flight",
        "created_at": "2023-02-21 10:26:30",
        "updated_at": "2023-02-21 10:26:30"
      },
      {
        "description": "superhuman strength",
        "created_at": "2023-02-21 10:26:30",
        "updated_at": "2023-02-21 10:26:30"
      },
      {
        "description": "durability",
        "created_at": "2023-02-21 10:26:30",
        "updated_at": "2023-02-21 10:26:30"
      },
      {
        "description": "prodigious speed",
        "created_at": "2023-02-21 10:26:30",
        "updated_at": "2023-02-21 10:26:30"
      }
    ], {}
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
