import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import emailjs from "emailjs-com";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imagesDesktop = [
  "img/Slide1Escritorio.png",
  "img/Slide2Escritorio.png",
  "img/Slide3Escritorio.png",
];

const imagesTablet = [
  "img/Slide1Tablet.png",
  "img/Slide2Tablet.png",
  "img/Slide3Tablet.png",
];

const imagesMobile = [
  "img/Slide1Movil.png",
  "img/Slide2Movil.png",
  "img/Slide3Movil.png",
];

const Carrusel = () => {
  const [images, setImages] = useState(imagesDesktop);

  // Estados del formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [codigo, setCodigo] = useState('');
  const [aceptaPolitica, setAceptaPolitica] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

   const form = useRef();

  useEffect(() => {
    const updateImages = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width > height) {
        setImages(imagesDesktop);
      } else if (width <= 767) {
        setImages(imagesMobile);
      } else {
        setImages(imagesTablet);
      }
    };

    updateImages();
    window.addEventListener('resize', updateImages);
    return () => window.removeEventListener('resize', updateImages);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispara el evento de conversión de Google Ads
    if (window.gtag_report_conversion) {
        window.gtag_report_conversion();
    }

    if (!nombre || !telefono || !codigo || !aceptaPolitica) {
      setError('Por favor, completá todos los campos y aceptá la política.');
      setMensaje('');
      return;
    }

    setMensaje('¡Gracias! Te contactaremos pronto.');
    setError('');
    setNombre('');
    setTelefono('');
    setCodigo('');
    setAceptaPolitica(false);

    emailjs.sendForm("service_pfegfbb", "template_pm684gi", form.current, "eT_lyfkkg2ZsiG33P")
    .then((result) => {
      console.log(result.text);
      setMensaje("Formulario enviado correctamente.");
      setError('');
      setNombre('');
      setTelefono('');
      setCodigo('');
      setAceptaPolitica(false);
    }, (error) => {
      console.log(error.text);
      setError("Ocurrió un error al enviar.");
      setMensaje('');
    });
  };

  return (
    <div className="carruselContainer">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} className="imgCarrusel" alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="formularioCarrusel">
        <p>
          <strong>Cotizá gratis tu alarma.</strong><br />
          Llamá al <a className='formularioNumero' 
                      href="https://wa.me/542236852201" 
                      target="_blank"
                      rel="noopener noreferrer"
          >2236 85-2201</a><br />
          O dejá tus datos, nosotros te llamamos:
        </p>

        <form ref={form} onSubmit={handleSubmit} className="formCarrusel-horizontal">
          <input
            type="text"
            name="nombre"
            className="formCarrusel-input"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <div className="formCarrusel-prefixedInput">
            <span className="formCarrusel-prefix">15 -</span>
            <input
              type="text"
              name="telefono"
              className="formCarrusel-phoneInput"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <div className="formCarrusel-telefono">
            <input
              type="text"
              name="codigo"
              className="formCarrusel-codigoNum"
              placeholder="Código de área"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>

          <button type="submit" className="formCarrusel-button">Enviar</button>
        </form>

        <div className="formCarrusel-checkbox">
          <input
            type="checkbox"
            checked={aceptaPolitica}
            onChange={(e) => setAceptaPolitica(e.target.checked)}
          />
          <label>
            He leído y acepto la <a className='formCarruselPolitica' href="#">política de privacidad</a>.
          </label>
        </div>

        {error && <p style={{ color: '#ff0116' }}>{error}</p>}
        {mensaje && <p style={{ color: '#25d366' }}>{mensaje}</p>}
      </div>
    </div>
  );
};

export default Carrusel;
