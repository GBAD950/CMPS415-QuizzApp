const winston = require('winston');

const logger = winston.createLogger({
    level: winston.config.npm.levels,
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    exitOnError: true,
    transports: [
        new winston.transports.Console({
            level: 'info',
            colorize: true,
            prettyPrint: true
        }),
        new winston.transports.File({ filename: 'logfile.log' }),
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'uncaughtExceptions.log' }),
        new winston.transports.Console({
            colorize: true,
            prettyPrint: true
        })
    ]
});

process.on('unhandedledRejection', (ex) => {
    throw(ex);
});

module.exports = logger;
