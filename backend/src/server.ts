import app from './app.js';
import { env } from './config/env.js';

const startServer = (): void => {
  try {
    app.listen(env.PORT, () => {
      console.warn(`
╔════════════════════════════════════════╗
║   Zahlé Luxe Store - Backend API      ║
╚════════════════════════════════════════╝

🚀 Server running on port ${env.PORT}
🌍 Environment: ${env.NODE_ENV}
📍 Health check: http://localhost:${env.PORT}${env.API_PREFIX}/health
      `);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: Error) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

startServer();

