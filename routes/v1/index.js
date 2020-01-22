const express = require('express');

const router = express.Router();

const usuarioRoutes = require('./usuario');
const categoriaRoutes = require('./categoria');

router.use((req, res, next) => {
  next();
});

router.use('/usuario', usuarioRoutes);
router.use('/categoria', categoriaRoutes);

module.exports = router;