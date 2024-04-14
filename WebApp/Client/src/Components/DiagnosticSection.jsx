import '../Styles/DiagnosticSectionStyle.css'
import { Container } from 'react-bootstrap';
//import Image1 from '../img/Negative Icon.png';
//import Image2 from '../img/Positive Icon.png'; 



function DiagnosticSection() {
  return (
  <Container fluid>
    <h3>
      ¿Se puede dar acceso a más personas a los beneficios de la detección
      temprana del cáncer si se implementa un sistema capaz de hacer dicho
      diagnóstico?
    </h3>
    <section className="charge-image-section" id="Diagnostic-section">
      <div className="container">
        <p>
          Se ha planteado este proyecto en solución a este problema el cual
          nace de un proyecto de investigación generado en la Universidad 
          Distrital Fransisco Jose de Caldas 
        </p>
        <h3>
          <b>Diagnostíquese Aquí</b>
        </h3>
        <div className="upload-container">
          <div className="uploadbox-wrapper">
            <div className="vue-uploadbox-wrap br-8 position-relative bg-main-3 p-10 bg-lighten">
              <div className="d-flex br-8 fg-white h-75 w-100 bg-main-3 border-white border-dashed border-1 h-100">
                <div
                  className="w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-150"
                >
                  <div className="d-flex flex-column align-items-center font-size-125 py-3">
                    <i className="fa fa-cloud-upload-alt fa-5x vue-uploadbox-icon"></i>
                    <span className="px-1 text-center vue-uploadbox-drop-text">
                      Arrastra y suelta los archivos aquí
                    </span>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-light font-size-125 font-weight-bold text-nowrap vue-uploadbox-file-button position-static"
                    >
                      Seleccionar archivo
                    </button>
                    <button
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="btn btn-light dropdown-toggle dropdown-toggle-split border-left"
                    >
                      <i className="fa fa-chevron-down"></i>
                    </button>
                    <div className="dropdown-menu m-0 w-100 br-4 rounded-top-0 user-select-none">
                      <div className="dropdown-item px-0">
                        <span
                          id="DeviceUploadButton"
                          title="Upload From Device"
                          className="px-0 cursor-pointer dropdown-item d-flex text-indent-0 white-space-normal align-items-center"
                        >
                          <span className="px-75">
                            <i className="fa fa-folder-open"></i>
                          </span>
                          Desde el dispositivo
                        </span>
                      </div>
                      <div className="dropdown-divider"></div>
                      <div className="dropdown-item px-0">
                        <span
                          id="dropboxButton"
                          title="Elige uno o varios archivos de tu cuenta de Dropbox"
                          className="px-0 cursor-pointer dropdown-item d-flex text-indent-0 white-space-normal align-items-center"
                        >
                          <span className="px-75">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 43 40"
                              version="1.1"
                              width="15px"
                            >
                              <path
                                d="m12.5 0l-12.5 8.1 8.7 7 12.5-7.8-8.7-7.3zm-12.5 21.9l12.5 8.2 8.7-7.3-12.5-7.7-8.7 6.8zm21.2 0.9l8.8 7.3 12.4-8.1-8.6-6.9-12.6 7.7zm21.2-14.7l-12.4-8.1-8.8 7.3 12.6 7.8 8.6-7zm-21.1 16.3l-8.8 7.3-3.7-2.5v2.8l12.5 7.5 12.5-7.5v-2.8l-3.8 2.5-8.7-7.3z"
                                fill="#007EE5"
                              ></path>
                            </svg>
                          </span>
                          Desde Dropbox
                        </span>
                      </div>
                      <div className="dropdown-divider"></div>
                      <div className="dropdown-item px-0">
                        <span
                          id="gdriveButton"
                          title="Elige uno o varios archivos de tu cuenta de Google Drive"
                          className="px-0 cursor-pointer dropdown-item d-flex text-indent-0 white-space-normal align-items-center"
                        >
                          <span className="px-75">
                            <svg
                              width="15px"
                              viewBox="0 0 87.3 78"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
                                fill="#0066da"
                              ></path>
                              <path
                                d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
                                fill="#00ac47"
                              ></path>
                              <path
                                d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
                                fill="#ea4335"
                              ></path>
                              <path
                                d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
                                fill="#00832d"
                              ></path>
                              <path
                                d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
                                fill="#2684fc"
                              ></path>
                              <path
                                d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
                                fill="#ffba00"
                              ></path>
                            </svg>
                          </span>
                          Desde Google Drive
                        </span>
                      </div>
                      <div className="dropdown-divider"></div>
                      <div className="dropdown-item px-0">
                        <span
                          className="px-0 cursor-pointer dropdown-item d-flex text-indent-0 white-space-normal align-items-center"
                          id="externalUrlButton"
                          title="Introduce el enlace de un archivo que desees utilizar"
                        >
                          <span className="px-75">
                            <i className="fa fa-link"></i>
                          </span>
                          Desde URL
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="files-list files-list_v2 mb-0" id="fileuploadlist">
            <div className="files-list"></div>
          </div>
        </div>
      </div>
    </section>  
    <br/>
    <p>
      Genera tu diagnóstico ya por medio de nuestro Modelo Inteligente
      entrenado con más de 300 imágenes y con un porcentaje de acierto del
      73.3%
    </p>
    <h3>
      Diagnóstico Exitoso
    </h3>
    <h6>
      Su resultado es: 
    </h6>
    <Container style={
    {
      display:'flex',
      alignContent:'center',
      alignItems:'center',
      textAlign:'center', 
      justifyContent:'center'
    }  
    }>
    {/*
    <img
        src={Image1}
        alt='Im1'
        style={{
          width:200, 
        }}
    />
    <img
        src={Image2}
        alt='Im2'
        style={{
          width:200, 
        }}
    />
    */}   
    </Container>
  </Container>
  )
}

export default DiagnosticSection