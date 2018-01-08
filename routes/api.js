const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/ninjas', (req, res, next) => {
  // Ninja.find().then((ninjas) => {
  //   res.send(ninjas);
  // }).catch(next)
  Ninja.geoNear(
    {type: 'Point', coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    {maxDistance: 1000000, spherical: true}).then((result) => {
      res.send(result)
    }).catch(next)
});

router.post('/ninjas', (req, res, next) => {
  Ninja.create(req.body).then((ninja) => {
    res.send(ninja);
  }).catch(next)
});

router.put('/ninjas/:id', (req, res, next) => {
  const id = req.params.id;
  Ninja.findOneAndUpdate({ _id: id }, {
    $set: req.body
  }).then(() => {
    Ninja.findOne({ _id: id }).then((result) => {
      res.send(result);
    }).catch(next)
  }).catch(next) 
});
// "_id" : ObjectId("5a523636946012210c843c23"),
router.delete('/ninjas/:id', (req, res, next) => {
  const id = req.params.id;
  Ninja.remove({_id: id}).then((result) => {
    res.send(result);
  }).catch(next)
});

module.exports = router;
