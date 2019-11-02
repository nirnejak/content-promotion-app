const express = require('express');
const chalk = require('chalk');
const moment = require('moment');
const cors = require('cors');

const config = require('./config');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi there');
});

app.listen(config.PORT, () => {
  console.log(chalk.green(`Server Started at PORT: ${config.PORT}`));
});
