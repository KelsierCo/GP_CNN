import dotenv from 'dotenv';
dotenv.config(); // Cargar variables de entorno desde un archivo .env

const config = {
  port: process.env.PORT || 4000,
  database: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'mydatabase'
  },
  // Otras variables de entorno que necesites configurar
};

export default config;
