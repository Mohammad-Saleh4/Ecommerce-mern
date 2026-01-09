import { Request, Response, NextFunction } from 'express';
import { isDevelopment } from '../config/env.js';

export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err.message || 'Internal Server Error';

  const errorResponse = {
    success: false,
    message,
    ...(isDevelopment && { stack: err.stack }),
  };

  console.error('Error:', {
    statusCode,
    message,
    path: req.path,
    method: req.method,
    ...(isDevelopment && { stack: err.stack }),
  });

  res.status(statusCode).json(errorResponse);
};

export const notFoundHandler = (
  req: Request,
  res: Response,
  _next: NextFunction
): void => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
};

