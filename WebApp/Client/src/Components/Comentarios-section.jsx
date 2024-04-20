import { useState } from "react";
import axios from "axios";
import  '../Styles//ComentarySection.css'

const ComentariosSection = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");

  const enviarComentario = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://formspree.io/dfargumero1701@gmail.com", {
        Nombre: nombre,
        Correo: correo,
        Comentario: comentario,
      });

      // Limpiar el formulario después del envío
      setNombre("");
      setCorreo("");
      setComentario("");

      alert("Comentario enviado con éxito");
    } catch (error) {
      alert(
        "Hubo un error al enviar el comentario. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <section className="Comentary-section" id="Comentary-section">
      <h2> Comentarios, peticiones o sugerencias aqui: </h2>
      <br/>      
      <form onSubmit={enviarComentario}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            <i className="bi-person mr-2"></i>       Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribe tu nombre"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            <i className="bi-envelope mr-2"></i>         Correo Electrónico:
          </label>
          <input
            type="email"
            className="form-control"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Escribe tu correo electrónico"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comentario" className="form-label">
            <i className="bi-chat-dots mr-2"></i> Comentario:
          </label>
          <textarea
            className="form-control"
            id="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Escribe tu comentario"
          />
        </div>
        <button type="submit" className="btn" id="BtnComentary">
          Enviar Comentario
        </button>
      </form>
    </section>
  );
};

export default ComentariosSection;
