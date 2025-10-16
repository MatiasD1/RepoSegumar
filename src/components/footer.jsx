import React from "react";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container text-center">
        <div className="social">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/share/1P3fvzFNM7/?mibextid=wwXIfr"
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
                href="https://www.instagram.com/segumar_seguridad?igsh=YXd1bnNuMmhueHd4"
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
