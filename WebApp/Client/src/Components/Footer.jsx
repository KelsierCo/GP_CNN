import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image1 from '../img/ULogo.png'

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Información de Contacto</h3>
            <p>
              <FaMapMarkerAlt /> <strong>Dirección:</strong> Bogotá, Colombia
            </p>
            <p>
              <FaEnvelope /> <strong>Correo Electrónico:</strong> dfargumeroc@udistrital.edu.co
            </p>
            <p>
              <FaEnvelope /> <strong>Correo Electrónico:</strong> cmorenor@udistrital.edu.co
            </p>
            <p>
              <FaPhone /> <strong>Teléfono:</strong> +57 324 2844688
            </p>
            <p>  
              <FaPhone /> <strong>Teléfono:</strong> +57 319 3592764
            </p>
          </div>
          <div className="col-md-6">
            <h3>Síguenos en Redes Sociales</h3>
            <div className="d-flex justify-content-center">
              <a href="URL_DE_TU_FACEBOOK" className="text-white me-3">
                <FaFacebook size={30} />
              </a>
              <a href="URL_DE_TU_TWITTER" className="text-white me-3">
                <FaTwitter size={30} />
              </a>
              <a href="URL_DE_TU_INSTAGRAM" className="text-white">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center">
        Información tomada de:{' '}
        <a href="https://www.cdc.gov/spanish/cancer/breast/statistics/index.htm">Centro para el control y la prevención de enfermedades</a> y{' '}
        <a href="https://www.dane.gov.co/files/operaciones/EEVV/pres-EEVV-ITrim2023.pdf">DANE EEVV</a>
        <p className='mt-4 text-center'> Proyecto llamado: CLASIFICACION DE IMÁGENES DIAGNOSTICAS DEL CANCER DE MAMA POR MEDIO DE REDES NEURONALES CONVOLUCIONALES </p>
        <p className='mt-4 text-center'> Realizado por: Danniel Argumero y Carlos Moreno Estudiantes de Sistematización de Datos</p>
        <img
          src={Image1}
          alt='Im1'
          style={{ width: 100, height: 100}}
        />
      </p>
    </footer>
  );
};

export default Footer;
