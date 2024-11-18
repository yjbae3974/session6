import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Logger } from 'winston';
import { User } from 'src/users/user.entity';
export declare class LoggerMiddleware implements NestMiddleware {
    private readonly logger;
    constructor(logger: Logger);
    use(req: Request & {
        user?: User;
    }, res: Response, next: NextFunction): void;
}
