"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "krisna",
        profession: "Admin Micro",
        role: "admin",
        email: "krisnafirdaus@gmail.com",
        password: await bcrypt.hash("krisnafir", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "firdaus",
        profession: "Frontend Developer",
        role: "student",
        email: "firdaus@gmail.com",
        password: await bcrypt.hash("krisnafir", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
