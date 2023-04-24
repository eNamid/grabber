module.exports = {
    apps: [
      {
        name: 'first-app',
        script: 'service.js',
        watch: true,
        ignore_watch: ['node_modules', './data'],
        env: {
          NODE_ENV: 'development',
          MYSQL_DB: 'mydatabase',
          MYSQL_USER: 'dima',
          MYSQL_PASS: '543dimon543',
          MYSQL_HOST: 'localhost',
          PORT: 8080,
        }
      }, {
        name: 'grabber',
        script: './grabber.js',
        watch: true,
        ignore_watch: ['node_modules', './data'],
        instances: 1,
        cron_restart: '*/1 * * * *',
        autorestart: false,
        exec_mode: 'fork',
        env: {
          MYSQL_DB: 'mydatabase',
          MYSQL_USER: 'dima',
          MYSQL_PASS: '543dimon543',
          MYSQL_HOST: 'localhost',
        }
      }, {
        name: 'queue',
        script: './queue.js',
        watch: true,
        ignore_watch: ['node_modules', './data']
      }
    ],
  };