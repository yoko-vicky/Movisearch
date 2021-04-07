import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <Link to="/">
      <span className="footer__logo">
        MoviSearch
      </span>
    </Link>
    <div className="footer__copyright">
      <Link to="https://github.com/yocosaka" target="_blank" rel="noreferrer">&copy; Yoko Saka</Link>
    </div>
  </footer>
);

export default Footer;
