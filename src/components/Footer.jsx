import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <img src="/Logo.webp" alt="Saral Infosoft" />
          <p>
            Helping businesses grow with Website Development,
            Video Production and Social Media Marketing.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#portfolio">Portfolio</Link>
          <Link to="/#case-study">Case Study</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-services">
          <h3>Services</h3>
          <p>Website Development</p>
          <p>Video Production</p>
          <p>Social Media Marketing</p>
        </div>

        <div className="footer-contact">
          <h3>Connect</h3>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/saralinfosoft/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/saral_infosoft/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/saral-infosoft/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=%2B918879591324&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Saral Infosoft. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;