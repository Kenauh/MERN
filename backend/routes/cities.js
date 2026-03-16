const express = require('express');
const router = express.Router();
const cityModel = require('../model/cityModel');

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

/*get all cities*/
router.get('/all', (req, res) => {
  cityModel.find()
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

/*post city*/
router.post('/', (req, res) => {
  const nuevaCiudad = new cityModel({
    name: req.body.name,
    country: req.body.country
  });

  nuevaCiudad.save()
    .then(ciudad => {
      res.send(ciudad);
    })
    .catch(err => {
      res.status(500).send("Server error");
    });
});

module.exports = router;