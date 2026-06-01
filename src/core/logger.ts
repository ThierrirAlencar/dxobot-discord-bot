import { mkdirSync } from "fs";
import path from "path";
import winston from "winston";
import { APLICATION_DEPLOY_LEVEL } from "./env";

const LOG_ROOT = path.resolve(process.cwd(), "logs");
const ERROR_LOG_DIR = path.join(LOG_ROOT, "errors");
const COMBINED_LOG_FILE = path.join(LOG_ROOT, "combined.log");

mkdirSync(ERROR_LOG_DIR, { recursive: true });

const logFormat = winston.format.combine(
    winston.format.label({ label: `dxobot-${APLICATION_DEPLOY_LEVEL}` }),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.printf(({ level, message, label, timestamp, placeat, stack }) => {
        const safeMessage = typeof message === "string"
            ? message
            : message instanceof Error
                ? message.message
                : JSON.stringify(message, null, 2);

        const location = placeat ? ` [at:${placeat}]` : "";
        const stackDetails = stack ? `\n${stack}` : "";

        return `${timestamp} [${label}] ${level}: ${safeMessage}${location}${stackDetails}`;
    })
);

const defaultLevel = ["dev", "development"].includes(APLICATION_DEPLOY_LEVEL) ? "debug" : "info";

export const WinstonLogger = winston.createLogger({
    level: defaultLevel,
    format: logFormat,
    transports: [
        new winston.transports.File({
            filename: path.join(ERROR_LOG_DIR, `${new Date().toISOString()}.error.log`),
            level: "error",
        }),
        new winston.transports.File({
            filename: COMBINED_LOG_FILE,
        }),
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                logFormat
            ),
        }),
    ],
});

export type LoggerMeta = {
    atFile?: string;
    details?: Record<string, unknown>;
};

export class Logger {
    private readonly winstonLogger = WinstonLogger;
    private readonly isDev = ["dev", "development"].includes(APLICATION_DEPLOY_LEVEL);

    private buildMetadata(meta?: LoggerMeta) {
        if (!meta) return undefined;

        return {
            placeat: meta.atFile,
            ...meta.details,
        };
    }

    public debug(message: string, meta?: LoggerMeta): void {
        this.winstonLogger.debug(message, this.buildMetadata(meta));
    }

    public info(message: string, meta?: LoggerMeta): void {
        this.winstonLogger.info(message, this.buildMetadata(meta));
    }

    public warn(message: string, meta?: LoggerMeta): void {
        this.winstonLogger.warn(message, this.buildMetadata(meta));
    }

    public error(error: Error, meta?: LoggerMeta): void {
        this.winstonLogger.error(error.message, {
            ...this.buildMetadata(meta),
            stack: error.stack,
        });

        if (this.isDev) {
            throw error;
        }
    }

    public log(message: string, meta?: LoggerMeta): void {
        this.info(message, meta);
    }
}

export const logger = new Logger();;