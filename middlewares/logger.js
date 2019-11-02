const chalk = require('chalk');
const moment = require('moment');

const logger = (req, res, next) => {
  console.log(`${chalk.white.bold.inverse(` ${req.method} `)} ${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()}`);
  next();
};

module.exports = logger;
