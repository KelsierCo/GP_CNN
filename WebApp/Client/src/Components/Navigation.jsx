import { Navbar, Nav } from 'react-bootstrap';
import '../Styles/NavigationStyle.css';

function Navigation() {
  return (
    <Navbar id = 'Nav' className='fixed-top justify-content-center bg-dark navbar-transparent' variant="dark">
      <Navbar.Brand href="#home">Cáncer de Mama</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#Diagnostic-section">Diagnóstico</Nav.Link>
        <Nav.Link href="#Information-section">Información</Nav.Link>
        <Nav.Link href="#Comentary-section">Comentarios</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
