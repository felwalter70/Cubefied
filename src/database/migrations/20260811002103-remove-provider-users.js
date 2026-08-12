'use strict';

/** @type {import('sequelize-cli').Migration} */
/* eslint-disable no-undef */
module.exports = {
    async up(queryInterface) {
        return queryInterface.removeColumn('users', 'provider');
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.addColumn('users', 'provider', {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        });
    },
};
