import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import Navigation from './Components/Navigation';
import ComentariosSection from './Components/Comentarios-section'; 
import Footer from './Components/Footer';
import CCarousel from './Components/CCarousel'; 
import FileUpload from './Components/FileUpload';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importa estilos de Bootstrap Icons

function App() {
  return (
    <div className="App">
        {/* Sección 1: Encabezado */}
        <Navigation/>
        <video muted autoPlay loop preload="auto">
          <source src='../public/video/BackVideo.mp4' type='video/mp4'/>
          Tu navegador no soporta la reproducción de videos
        </video>
        <div className='capa'></div>
        <Container fluid style={{ width: '100vw', marginTop: '4rem'}} id="Diagnostic-section">
        <Container fluid style={{ height: '100vh' }}>
          <Row className="h-100">
              <h1>Diagnostico de Cancer de mama Online</h1>
              <h6>Con el fin de obtener el grado académico en la Universidad Distrital Francisco José de Caldas</h6>
            <Col className="h-100 d-flex align-items-top justify-content-center">  
              {/* Sección 2: Petición de Imagen y Tutorial */}
              <FileUpload/>
            </Col>
          </Row>
        </Container>
        {/* Sección 1: Información sobre Cáncer de Mama */}
        
        <Container fluid id = "Information-section">  
          <CCarousel/>
        </Container>
        <Container fluid className='Comentary-container' id="Comentary-section" style={{paddingTop:'1rem'}}>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <ComentariosSection/>
            </Col>
          </Row>
        </Container>
        </Container>
        {/* Footer */}
        <Footer/>
      </div>
  );
}

export default App;
