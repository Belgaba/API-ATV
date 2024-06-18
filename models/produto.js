'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};