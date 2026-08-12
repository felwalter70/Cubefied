'use strict';

/** @type {import('sequelize-cli').Migration} */
/* eslint-disable no-undef */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.addColumn('contacts', 'status', {
            type: Sequelize.ENUM('ACTIVE', 'ARCHIVED'),
            defaultValue: 'ACTIVE',
            allowNull: false,
        });
    },

    async down(queryInterface) {
        return queryInterface.sequelize.transaction(async transaction => {
            await queryInterface.removeColumn('contacts', 'status', { transaction });
            await queryInterface.sequelize.query('DROP TYPE enum_contacts_status', { transaction });
        });
    },
};
