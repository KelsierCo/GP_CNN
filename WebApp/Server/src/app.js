import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 3000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN;
const ALLOWED_METHODS = process.env.ALLOWED_METHODS.split(',');
const ALLOWED_HEADERS = process.env.ALLOWED_HEADERS.split(',');

app.use(express.json());
app.use(cors({
  origin: ALLOWED_ORIGIN,
  methods: ALLOWED_METHODS,
  allowedHeaders: ALLOWED_HEADERS
}));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
