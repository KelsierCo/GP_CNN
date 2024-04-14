// Manejador de la subida de imágenes
export const uploadImage = (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .send("Error: No se ha proporcionado ningún archivo para subir");
  }
  res.status(200).send("Imagen subida correctamente");
  console.log(req.file);
};
