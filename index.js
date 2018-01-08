const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://vanskins:vansabacajan1212@ds245357.mlab.com:45357/ninjago');
// mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static('public'))

app.use(bodyParser.json());
//initialize routes
app.use('/api', routes);
// error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(422).send({ error: err.message });
});
app.listen(process.env.port || 4000, () => {
  console.log('SERVER IS LISTENING FOR REQUEST');
});