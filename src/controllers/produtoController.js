const { Produto } = require('../models');

const criarProduto = async (req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const obterProduto = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      res.status(200).json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const atualizarProduto = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      await produto.update(req.body);
      res.status(200).json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletarProduto = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      await produto.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    criarProduto,
    listarProdutos,
    obterProduto,
    atualizarProduto,
    deletarProduto,
  };