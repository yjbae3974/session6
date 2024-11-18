"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonLogger = exports.winstonConfig = void 0;
const fs = require("fs");
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
const winstonDaily = require("winston-daily-rotate-file");
const cwd = process.cwd();
const logDir = `${cwd}/logs`;
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}
const dailyOption = (level) => {
    return {
        level,
        datePattern: 'YYYY-MM-DD',
        dirname: `${cwd}/logs`,
        filename: `%DATE%.${level}.log`,
        maxFiles: '10d',
        zippedArchive: true,
        format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike(process.env.NODE_ENV, {
            colors: false,
            prettyPrint: true,
        })),
    };
};
exports.winstonConfig = {
    transports: [
        new winston.transports.Console({
            level: 'http',
            format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike(process.env.NODE_ENV, {
                colors: true,
                prettyPrint: true,
            }), winston.format.colorize()),
        }),
        new winstonDaily(dailyOption('info')),
        new winstonDaily(dailyOption('warn')),
        new winstonDaily(dailyOption('error')),
    ],
};
exports.winstonLogger = nest_winston_1.WinstonModule.createLogger(exports.winstonConfig);
//# sourceMappingURL=winston.config.js.map