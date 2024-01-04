// Footer.js
import React from 'react';
import '../../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Prva kolona */}
          <div className="col-md-3">
            <h5>Kontakt</h5>
            <p>Mobilni: 123-456-789</p>
            <p>Email: info@example.com</p>
          </div>

          {/* Druga kolona */}
          <div className="col-md-3">
            <h5>Radno vreme</h5>
            <p>Radnim danima: 9:00 - 17:00</p>
            <p>Vikendom: 10:00 - 14:00</p>
          </div>

          {/* Treća kolona */}
          <div className="col-md-3">
            <h5>Lokacija</h5>
            <p>123 Example Street</p>
            <p>City, Country</p>
          </div>

          {/* Četvrta kolona */}
          <div className="col-md-3">
            <h5>Google Map</h5>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d307.55508582019786!2d21.583746631164487!3d42.83117209396642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1704287408109!5m2!1sen!2srs"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
