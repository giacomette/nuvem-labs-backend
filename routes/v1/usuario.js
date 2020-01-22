const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  next()
});


let usuarios = [
  {
    id: 1,
    nome: 'Roberto'
  },
  {
    id: 2,
    nome: 'Gustavo Piccin'
  }
]

router.get('/', (req, res) => {
  res.json(usuarios)
})

router.get(':id', (req, res) => {
  const usuario = usuarios.find(user => user.id === Number(req.params.id));
  res.json(usuario)
})

router.post('/', (req, res) => {

  const { body } = req;

  if (!body.nome) {
    return res.status(422).json({ message: 'nome invalido' });
  }

  const usuario = {
    id: 3,
    nome: body.nome
  };

  usuarios.push(usuario)

  res.json(usuario)
})

router.put(':id', (req, res) => {

  const { body, params } = req;

  const usuario = usuarios.find(user => user.id === Number(params.id));

  usuario.nome = body.nome;

  usuarios.forEach((item, index) => {

    if (item.id === usuario.id) {
      usuarios[index] = usuario;
    }

  })

  res.json(usuario)
})

router.delete(':id', (req, res) => {

  const { params } = req;

  usuarios = usuarios.filter(user => user.id !== Number(params.id));

  res.json()
})


module.exports = router;