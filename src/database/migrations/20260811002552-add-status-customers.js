'use strict';

/** @type {import('sequelize-cli').Migration} */
/* eslint-disable no-undef */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.addColumn('customers', 'status', {
            type: Sequelize.ENUM('ACTIVE', 'ARCHIVED'),
            defaultValue: 'ACTIVE',
            allowNull: false,
        });
    },

    async down(queryInterface) {
        return queryInterface.sequelize.transaction(async transaction => {
            await queryInterface.removeColumn('customers', 'status', { transaction });
            await queryInterface.sequelize.query('DROP TYPE enum_customers_status', { transaction });
        });
    },
};
