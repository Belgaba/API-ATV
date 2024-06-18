module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Produtos', [
      {
        nome: 'Produto 1',
        descricao: 'Descrição do Produto 1',
        preco: 10.0,
        quantidade: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Produto 2',
        descricao: 'Descrição do Produto 2',
        preco: 20.0,
        quantidade: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};
