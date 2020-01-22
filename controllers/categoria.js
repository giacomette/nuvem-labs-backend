const { Categoria } = require('../database/models');

async function criar(req) {

  const categoria = await Categoria.create(req.body);

  return categoria;
}

async function excluir(req) {

  await Categoria.destroy({
    where: {
      id: req.params.id
    }
  });

  return null;
}

async function listar(req) {

  const categorias = await Categoria.findAll();

  return categorias;
}

module.exports = {
  criar,
  listar,
  excluir
}