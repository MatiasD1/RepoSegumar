import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  
  const [{ name, email, message }, setState] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    // 1) Dispara el evento de conversión de Google Ads
    if (window.gtag_report_conversion) {
        window.gtag_report_conversion();
    }

    // 2) Envía el formulario por emailjs
    emailjs
      .sendForm("service_pfegfbb", "template_xqjuas7", e.target, "eT_lyfkkg2ZsiG33P")
      .then(
      (result) => {
        console.log(result.text);
        setSuccessMessage("Mensaje enviado con éxito.");
        e.target.reset();
        clearState();
      },
      (error) => {
        console.log(error.text);
        setErrorMessage("Error al enviar el mensaje. Inténtalo nuevamente.");
      }
    );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contáctenos</h2>
                <p>
                  Por favor complete el siguiente formulario para enviarnos un email y nos comunicaremos con usted lo antes posible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group half-width">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Nombre"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group half-width">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensaje"
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">Enviar Mensaje</button>
                {successMessage && <p className="success">{successMessage}</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
              </form>

            </div>
          </div>
          <div id="footer" className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Nuestros datos</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i>Dirección
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i>Teléfono
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i>Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
           
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
           <div className="social">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/share/1P3fvzFNM7/?mibextid=wwXIfr" target="_blank">
                      <img src="img/fb.png" alt="Facebook" className="redLogo" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/segumar_seguridad?igsh=YXd1bnNuMmhueHd4" target="_blank">
                      <img src="img/ig.png" alt="Instagram" className="redLogo" />
                    </a>
                  </li>
                </ul>
              </div>
          <p>
            &copy; 2025 Design by B-Logic{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
