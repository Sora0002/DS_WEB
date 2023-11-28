const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/apiRouter.js');
const webRouter = require('./routes/webRouter.js');

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

const db = "mongodb+srv://Sora_co:2002@DS.rlpuuab.mongodb.net/"
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
app.set('view engine', 'pug'); // Set the view engine to Pug

app.use('/api', apiRouter);
app.use('/', webRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
