import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../img/Carousel/CarouselImage1.jpeg';
import Image2 from '../img/Carousel/CarouselImage2.jpeg';
import Image3 from '../img/Carousel/CarouselImage3.jpeg';
import Image4 from '../img/Carousel/CarouselImage4.jpeg';
import Image5 from '../img/Carousel/CarouselImage5.jpg';
import { Container, Row, Col } from 'react-bootstrap';


function CCarousel() {
  return (
    <Container full style = {{height: '80vh', width: '100wv'}}>
      <h3>Algunos Datos Importantes</h3>
      <br/>
      <Carousel >
        <Carousel.Item>
            <Row>
              <Col md={7}>
                <img
                  className='d-block w-100'
                  src={Image1}
                  alt='Im1'
                />
              </Col>
              <Col md={5}>
                <div style={{ padding: '1rem' }}>
                  <h3>Cancer de mama, ¿Qué es?</h3>
                  <p>
                    Las mamas constan de tres partes principales: lobulillos, conductos y tejido conectivo. Los lobulillos son las glándulas que producen leche. Los conductos son los tubos que transportan la leche al pezón. El tejido conectivo (formado por tejido fibroso y adiposo) rodea y sostiene todas las partes de la mama.
                    El cáncer de mama es una enfermedad en la cual las células de la mama se multiplican sin control. Existen distintos tipos de cáncer de mama. El tipo de cáncer de mama depende de qué células de la mama se vuelven cancerosas.
                    La mayoría de los cánceres de mama comienzan en los conductos o en los lobulillos. El cáncer de mama puede diseminarse fuera de la mama a través de los vasos sanguíneos y los vasos linfáticos. Cuando el cáncer de mama se disemina a otras partes del cuerpo, se dice que ha hecho metástasis.
                  </p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={7}>
                  <img
                    className='d-block w-100'
                    src={Image2}
                    alt='Im2'
                  />
                </Col>
                <Col md={5}>
                  <div style={{ padding: '1rem' }}>
                    <h3>¿Cuáles son los síntomas del cáncer de mama?</h3>
                    <p>
                      Los signos de advertencia del cáncer de mama pueden ser distintos en cada persona. Algunas personas no tienen ningún tipo de signos o síntomas.
                    </p>
                    <p>Algunas señales de advertencia del cáncer de mama son:</p>
                    <ul>
                      <li>Un bulto nuevo en la mama o la axila (debajo del brazo).</li>
                      <li>Aumento del grosor o hinchazón de una parte de la mama.</li>
                      <li>Irritación o hundimientos en la piel de la mama.</li>
                      <li>Enrojecimiento o descamación en la zona del pezón o la mama.</li>
                      <li>Hundimiento del pezón o dolor en esa zona.</li>
                      <li>Secreción del pezón, que no sea leche, incluso de sangre.</li>
                      <li>Cualquier cambio en el tamaño o la forma de la mama.</li>
                      <li>Dolor en cualquier parte de la mama.</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={7}>
                  <img
                    className='d-block w-100'
                    src={Image3}
                    alt='Im3'
                  />
                </Col>
                <Col md={5}>
                  <h3>¿Cómo se diagnostica el cáncer de mama?</h3>
                  <p>
                    Los médicos suelen utilizar pruebas adicionales para detectar o diagnosticar el cáncer de mama. Quizás remitan a las mujeres a un especialista en mamas o a un cirujano. Esto no significa que ellas tengan cáncer ni que necesiten una cirugía. Estos médicos son expertos en el diagnóstico de problemas mamarios.
                  </p>
                  <ul>
                    <li>
                      Ultrasonido mamario. Una máquina que usa ondas de sonido para producir imágenes, llamadas sonogramas, de áreas dentro de la mama.
                    </li>
                    <li>
                      Mamografía de diagnóstico. Si usted tiene algún problema en la mama —como un bulto— o si un área de la mama se ve anormal en una mamografía de detección, el médico puede indicarle que se 
                    </li>
                    <li>
                        Imagen por resonancia magnética (IRM) de las mamas. Un tipo de escaneo del cuerpo que usa un imán conectado a una computadora. La resonancia magnética creará imágenes detalladas de áreas dentro de la mama.  
                    </li>
                    <li>
                        Biopsia. Esta es una prueba en la que se extirpa tejido o se saca líquido de la mama para estudiarse bajo el microscopio o para hacer más pruebas. Existen distintos tipos de biopsias (por ejemplo, aspiración con aguja fina, biopsia con aguja gruesa o biopsia abierta).  
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={7}>
                  <img
                    className='d-block w-100'
                    src={Image4}
                    alt='Im4'
                  />
                </Col>
                <Col md={5}>
                  <h3>¿Cuáles son los factores de riesgo del cáncer de mama?</h3>
                  <p>
                    Algunos estudios han demostrado que el riesgo de tener cáncer de mama se debe a una combinación de factores. Los principales factores que influyen en el riesgo de una persona incluyen ser mujer y hacerse mayor. La mayoría de los cánceres de mama se detectan en mujeres de 50 años o más.  
                  </p>
                  <p>
                    Algunas mujeres tienen cáncer de mama aunque no tengan ningún otro factor de riesgo conocido. Tener un factor de riesgo no significa que la persona tendrá la enfermedad, y no todos los factores de riesgo tienen el mismo efecto. La mayoría de las mujeres tienen algunos factores de riesgo, pero la mayoría de las mujeres no tienen cáncer de mama. Hable con su médico sobre las maneras en que puede disminuir el riesgo y acerca de las pruebas de detección de esta enfermedad.
                  </p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col md={7}>
                  <img
                    className='d-block w-100'
                    src={Image5}
                    alt='Im5'
                  />
                </Col>
                <Col md={5}>
                  <h3>Avances y desafíos de la gestión del riesgo de los casos de cáncer de mama</h3>
                  <p>
                    Uno de los principales retos en el control del cáncer de mama en Colombia es lograr la detección temprana. En el 2022, el resultado se mantuvo en el rango de cumplimiento medio en el país, sin embargo, es importante destacar el incremento del 6,18% en el porcentaje de las mujeres en las que se detectó la enfermedad en estadios tempranos con respecto al periodo anterior. En la región Central y en Bogotá, D.C. se alcanzó la meta de cumplimiento, sin embargo, regiones como la Caribe y en la Amazonía-Orinoquía deben continuar trabajando en la detección precoz de los casos de cáncer de mama.
                  </p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
      </Carousel>
    </Container>
  );
} 

export default CCarousel;

