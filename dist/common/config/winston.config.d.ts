import * as winston from 'winston';
import * as winstonDaily from 'winston-daily-rotate-file';
export declare const winstonConfig: {
    transports: (winstonDaily | winston.transports.ConsoleTransportInstance)[];
};
export declare const winstonLogger: import("@nestjs/common").LoggerService;
