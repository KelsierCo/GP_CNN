import express from 'express';

const routes = (upload) => {
  const router = express.Router();

  // Ruta para subir una imagen
  router.post('/upload', upload.single('image'), (req, res) => {
    res.send('Imagen subida correctamente');
  });

  return router;
};

export default routes;
