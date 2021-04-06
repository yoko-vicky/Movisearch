import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <Link to="/">
      <p className="footer__logo">
        MoviSearch
      </p>
    </Link>
    <div className="footer__copyright">
      <a href="https://github.com/yocosaka" target="_blank" rel="noreferrer">&copy; Yoko Saka</a>
    </div>
  </footer>
);

export default Footer;
