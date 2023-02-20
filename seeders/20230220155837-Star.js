'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stars', 
    [
      {
        "nickname": "Wonder Woman",
        "real_name": "Diana Prince",
        "description": "Beautiful as Aphrodite, wise as Athena, swifter than Hermes, and stronger than Hercules, Princess Diana of Themyscira fights for peace in Man's World.",
        "catchphrase": "I will fight for those who cannot fight for themselves.",
        "created_at": "2023-02-20 18:18:45",
        "updated_at": "2023-02-20 18:18:45"
      },
      {
        "nickname": "Iron Man",
        "real_name": "Tony Stark",
        "description": "Anthony Edward Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist.",
        "catchphrase": "I am Iron Man",
        "created_at": "2023-02-20 18:18:45",
        "updated_at": "2023-02-20 18:18:45"
      },
      {
        "nickname": "Superman",
        "real_name": "Clark Kent",
        "description": "He was sent to Earth and raised as Clark Kent by human foster parents, Martha and Jonathan Kent. As an adult, Superman became the protector of Earth, working at the Daily Planet as Clark Kent alongside his partner and wife Lois Lane.",
        "catchphrase": "Taking Lives Is Something I Definitely Find Offensive!",
        "created_at": "2023-02-20 18:18:45",
        "updated_at": "2023-02-20 18:18:45"
      }
    ], {}
    )
  },

  // Этот метод (down) практически никогда не используется, его можно вообще удалить -->
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
