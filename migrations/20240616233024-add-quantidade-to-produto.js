module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Produtos', 'quantidade', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Produtos', 'quantidade');
  }
};
