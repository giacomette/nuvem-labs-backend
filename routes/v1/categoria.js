const express = require('express');
const router = express.Router();

const { criar, listar, excluir } = require('../../controllers/categoria');

router.use((req, res, next) => {
  next()
});

router.get('/', async (req, res) => {
 
  const result = await listar(req);

  res.json(result)
})

router.post('/', async (req, res) => {

  const { body } = req;

  if (!body.nome) {
    return res.status(422).json({ message: 'nome invalido' });
  }

  const result = await criar(req);

  res.json(result)
})
 

router.delete('/:id', async (req, res) => {

  const result = await excluir(req);

  res.json(result)
})


module.exports = router;