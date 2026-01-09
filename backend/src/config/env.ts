import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

interface EnvConfig {
  NODE_ENV: string;
  PORT: number;
  API_PREFIX: string;
  MONGODB_URI: string;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  CORS_ORIGIN: string;
}

const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

const getOptionalEnvVar = (key: string, defaultValue: string): string => {
  return process.env[key] || defaultValue;
};

export const env: EnvConfig = {
  NODE_ENV: getOptionalEnvVar('NODE_ENV', 'development'),
  PORT: parseInt(getOptionalEnvVar('PORT', '5000'), 10),
  API_PREFIX: getOptionalEnvVar('API_PREFIX', '/api'),
  MONGODB_URI: getEnvVar('MONGODB_URI'),
  JWT_SECRET: getEnvVar('JWT_SECRET'),
  JWT_EXPIRES_IN: getOptionalEnvVar('JWT_EXPIRES_IN', '7d'),
  CORS_ORIGIN: getOptionalEnvVar('CORS_ORIGIN', 'http://localhost:5173'),
};

export const isDevelopment = env.NODE_ENV === 'development';
export const isProduction = env.NODE_ENV === 'production';

