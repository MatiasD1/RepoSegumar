import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  area: "",
  message: "",
};

export const Postulacion = () => {
  const [{ name, email, phone, area, message }, setState] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pfegfbb",
        "template_xqjuas7", // ideal crear uno nuevo para RRHH
        e.target,
        "eT_lyfkkg2ZsiG33P"
      )
      .then(
        () => {
          setSuccessMessage("Postulación enviada con éxito.");
          setErrorMessage("");
          e.target.reset();
          clearState();
        },
        () => {
          setErrorMessage("Error al enviar. Inténtalo nuevamente.");
          setSuccessMessage("");
        }
      );
  };

  return (
    <div className="postulacion-wrapper">
      <div className="postulacion-container">

        <div className="section-title text-center">
          <h2>Postulación</h2>
          <p>Completá el formulario y adjuntá tu CV.</p>
        </div>

        <form onSubmit={handleSubmit} className="postulacion-form">

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Nombre y Apellido"
              className="form-control"
              required
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              className="form-control"
              required
              onChange={handleChange}
            />

            <input
              type="text"
              name="area"
              placeholder="Área de interés"
              className="form-control"
              required
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            rows="4"
            placeholder="Contanos sobre tu experiencia"
            className="form-control"
            required
            onChange={handleChange}
          ></textarea>

          <input
            type="file"
            name="cv"
            className="form-control"
            accept=".pdf,.doc,.docx"
            required
          />

          <button type="submit" className="btn btn-custom btn-lg">
            Enviar Postulación
          </button>

          {successMessage && <p className="success">{successMessage}</p>}
          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};