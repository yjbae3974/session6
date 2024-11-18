"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
const nest_winston_1 = require("nest-winston");
let LoggerMiddleware = class LoggerMiddleware {
    constructor(logger) {
        this.logger = logger;
    }
    use(req, res, next) {
        const startTime = Date.now();
        const { method, originalUrl: url, params, query, body, headers, ip } = req;
        const originalSend = res.send;
        res.send = function (responseBody) {
            const statusCode = res.statusCode;
            res.send = originalSend;
            res.send(responseBody);
            const duration = Date.now() - startTime;
            const userInfo = req.user ? req.user.username : 'Anonymous';
            const logMessage = `${method} ${url} ${statusCode} ${ip} ${duration}ms ${userInfo}\n[REQUEST] Params: ${JSON.stringify(params)} Query: ${JSON.stringify(query)} Body: ${JSON.stringify(body)} Headers: ${JSON.stringify(headers)}\n[RESPONSE] Status:${statusCode}\nBody: ${responseBody}`;
            if (statusCode >= 400 && statusCode < 500)
                this.logger.warn(logMessage);
            else if (statusCode >= 500)
                this.logger.error(logMessage);
            else
                this.logger.info(`${method} ${url} ${statusCode} ${ip} ${duration}ms ${userInfo}\n[REQUEST] Params: ${JSON.stringify(params)} Query: ${JSON.stringify(query)} Body: ${JSON.stringify(body)}`);
        }.bind(this);
        next();
    }
};
exports.LoggerMiddleware = LoggerMiddleware;
exports.LoggerMiddleware = LoggerMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [winston_1.Logger])
], LoggerMiddleware);
//# sourceMappingURL=logger.middleware.js.map