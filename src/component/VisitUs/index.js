import { useState } from "react";
import {
  FaLocationDot,
  FaPhone,
  FaInstagram,
} from "react-icons/fa6";

import "./index.css";

function VisitUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="visit-us"
      id="contact"
      aria-labelledby="visit-title"
    >
      {/* Heading */}
      <div className="visit-us__heading">
        <p className="visit-us__eyebrow">
          <span />
          Visit us
          <span />
        </p>

        <h2 id="visit-title">
          Come See Them In Person
        </h2>
      </div>

      <div className="visit-us__layout">
        {/* LEFT SIDE */}
        <div className="visit-us__location">
          <div className="visit-us__map">
            <iframe
              title="Anvika Jewellery store location"
              src="https://www.google.com/maps?q=Banjara%20Hills%2C%20Hyderabad&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Details */}
          <div className="visit-us__details">

            <div className="visit-us__detail-item">
              <div className="visit-us__icon">
                <FaLocationDot />
              </div>

              <p>
                Road No 10, Banjara Hills,
                Hyderabad 500034
              </p>
            </div>

            <div className="visit-us__detail-item">
              <div className="visit-us__icon">
                <FaPhone />
              </div>

              <p>
                <a href="tel:+919573121917">
                  +91 9573121917
                </a>
              </p>
            </div>

            <div className="visit-us__detail-item">
              <div className="visit-us__icon">
                <FaInstagram />
              </div>

              <p>
                <a
                  href="https://www.instagram.com/anvika.jewellery"
                  target="_blank"
                  rel="noreferrer"
                >
                  anvika.jewellery
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          className="enquiry-form"
          onSubmit={handleSubmit}
        >
          <h3>Send an Enquiry</h3>

          <p>
            Tell us what you are looking for —
            we reply within a day.
          </p>

          <label>
            Name
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
            />
          </label>

          <label>
            Phone
            <input
              type="tel"
              name="phone"
              required
              autoComplete="tel"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="3"
              required
            />
          </label>

          <button type="submit">
            {submitted
              ? "Enquiry sent"
              : "Send enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default VisitUs;