const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/ninjas', (req, res) => {
  res.send({
    type: 'GET'
  });
});

router.post('/ninjas', (req, res, next) => {
  Ninja.create(req.body).then((ninja) => {
    res.send(ninja);
  }).catch(next)
});

router.put('/ninjas/:id', (req, res) => {
  res.send({
    type: 'PUT'
  });
});

router.delete('/ninjas/:id', (req, res, next) => {
  const id = req.params.id;
  Ninja.remove({_id: id}).then((result) => {
    res.send(result);
  }).catch(next)
});

module.exports = router;
