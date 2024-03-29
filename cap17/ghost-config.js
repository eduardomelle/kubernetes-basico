var path = require('path'), config;

config = {
    development: {
        url: 'http://localhost:2368',
        database: {
            client: 'mysql',
            connection: {
                host: 'mysql-service',
                port: 3306,
                user: 'root',
                password: 'root',
                database: 'ghost_db',
                charset: 'utf8'
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        },
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT, '/')
        }
    }
};

module.exports = config;