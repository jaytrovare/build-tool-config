const log = require('./log');

module.exports = function exec(type, commands, message) {
  Promise.all(commands)
    .then(() => {
      log.success(type, message);
    })
    .catch((error) => {
      log.error(type, `Failed to execute: ${error.message}`);

      process.exitCode = 1;
    });
};
