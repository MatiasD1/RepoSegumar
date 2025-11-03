import React from "react";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container text-center">
        <div className="social">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/segumarseguridad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/fb.png"
                  alt="Icono de Facebook"
                  className="redLogo"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/segumar_seguridad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/ig.png"
                  alt="Icono de Instagram"
                  className="redLogo"
                />
              </a>
            </li>
          </ul>
        </div>
        <p>&copy; 2025 Design by B-Logic</p>
      </div>
    </footer>
  );
};
