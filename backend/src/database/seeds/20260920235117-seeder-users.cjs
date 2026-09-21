'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert('users', [
            {
                name: 'felwalter1',
                email: 'felwalter1@gmail.com',
                password_hash: 'password1',
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete('users', null, {});
    },
};
