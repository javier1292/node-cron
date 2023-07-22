const cron = require('node-cron');
const shell = require('shelljs');

// Schedule tasks to be run on the server.
cron.schedule('43 11 * * *', function() {
  console.log('Running cronjobs');
  shell.exec('php artisan schedule:run >> /dev/null 2>&1');
});