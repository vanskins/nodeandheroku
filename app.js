const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({
    name:"van alfred",
  })
});

app.post('/api/ninjas', (req, res) => {
  const { name, age, address } = req.body;
  console.log(name);
  res.send('success');
});

app.listen(process.env.port || 4000, () => {
  console.log('SERVER IS LISTENING FOR REQUEST');
});
