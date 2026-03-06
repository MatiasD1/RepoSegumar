import { useState } from "react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xkoqnzdd", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSuccessMessage("Postulación enviada con éxito.");
      setErrorMessage("");
      e.target.reset();
      clearState();
    } else {
      setErrorMessage("Error al enviar. Inténtalo nuevamente.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="postulacion-wrapper">
      <div className="postulacion-container">

        <div className="">
          <h2 className="postulacionTitulo">Postulación</h2>
         {/* <p className="postulacionTexto">Completá el formulario y adjuntá tu CV.</p>*/}
        </div>

        <form onSubmit={handleSubmit} className="postulacion-form">

          {/* asunto del email */}
          <input
            type="hidden"
            name="_subject"
            value="Nueva Postulación - Segumar"
          />

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Nombre y Apellido"
              className="form-control"
              required
              value={name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              required
              value={email}
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
              value={phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="area"
              placeholder="Área de interés"
              className="form-control"
              required
              value={area}
              onChange={handleChange}
            />
            <input type="text" name="_gotcha" style={{display:"none"}} />
          </div>

          <textarea
            name="message"
            rows="4"
            placeholder="Contanos sobre tu experiencia"
            className="form-control"
            required
            value={message}
            onChange={handleChange}
          ></textarea>

          <input
            type="url"
            name="cv_link"
            placeholder="Link a tu CV (Google Drive, Dropbox, etc.)"
            className="form-control"
            required
          />

         

          <button type="submit" className="btn btn-custom btn-lg">
            Enviar
          </button>

          {successMessage && <p className="success">{successMessage}</p>}
          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};