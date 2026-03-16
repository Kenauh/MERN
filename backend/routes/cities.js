const express = require('express');
const router = express.Router();

// Ruta de prueba
router.get('/test', (req, res) => {
  res.send({ msg: 'Cities test route.' })
});

module.exports = router;