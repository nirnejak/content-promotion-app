const express = require('express');
const chalk = require('chalk');
const cors = require('cors');

const config = require('./config');
const logger = require('./middleware/logger');

const app = express();

// Logger
app.use(logger);
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hi there');
});

app.listen(config.PORT, () => {
  console.log(chalk.green(`Server Started at PORT: ${config.PORT}`));
});
