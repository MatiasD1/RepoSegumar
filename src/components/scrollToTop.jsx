import { useLayoutEffect } from "react"; //para que no se muestre ningun frame aleatorio antes de redireccionar. Se ejecuta antes de que el navegador pinte la pantalla, así que el scroll ya está en 0,0 antes de renderizar el nuevo contenido.
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
};
