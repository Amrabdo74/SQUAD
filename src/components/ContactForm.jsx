import React, { useRef } from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { FaAddressBook, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [langClass, setLangClass] = useState("en");
  useEffect(() => {
    setLangClass(currentLanguage);
  }, []);

  const recaptchaRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      // Handle form submission and reCAPTCHA verification
      console.log("Form submitted and reCAPTCHA verified.");
    } else {
      console.log("Please complete the reCAPTCHA.");
    }
  };

  return (
    <div className="contactForm">
      <div className="container p-5">
        <div className="row">
          <div className="contact-info col-12 col-md-12 col-lg-6">
            <div className="contact-item" data-aos="flip-up">
              <div className="icon">
                <FaSquarePhone />
              </div>
              <div>
                <p>{t("Phone number")}</p>
                <p>
                  <Link className="text-dark text-decoration-none" to="tel:+201155272634">
                    01155272634
                  </Link>
                </p>
              </div>
            </div>
            <div className="contact-item" data-aos="flip-up">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div>
                <p>{t("Email address")}</p>
                <p>
                  <Link className="text-dark text-decoration-none" to="mailto:info@najezsoft.com">
                  info@najezsoft.com
                  </Link>
                </p>
              </div>
            </div>
            <div className="contact-item" data-aos="flip-up">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p> {t("Location")}</p>
                <p>
                  <Link
                    className="text-dark text-decoration-none"
                    to="https://www.google.com/maps?q=l30.4119979,31.0418543,17"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    واحه كمال الشاذلي الباجور المنوفيه مصر
                  </Link>
                </p>
              </div>
            </div>
            <div className="contact-item" data-aos="flip-up">
              <div className="icon">
                <FaAddressBook />
              </div>
              <div>
                <p>  {t("Fax address")}</p>
                <p>
                  <Link className="text-dark text-decoration-none" to="tel:+201155272634">
                    01155272634
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form col-12 col-md-12 col-lg-6">
            <h2 data-aos="flip-up">{`${t("contact us")}`}</h2>
            <p data-aos="flip-up">
              {`${t("contact_desc2")}`}
              {/* Lorem ipsum dolor sit met, connecter adipiscing elit, Carabid tur auctor Justo Lorem ipsum dolor sit met, connecter adipiscing elit */}
            </p>
            <form onSubmit={handleSubmit}>
              <input
                data-aos="flip-up"
                type="text"
                className="form-control border-0 border-bottom"
                placeholder={t("Name")}
              />
              <input
                data-aos="flip-up"
                type="email"
                className="form-control border-0 border-bottom"
                placeholder={t("Email")}
              />
              <textarea
                data-aos="flip-up"
                placeholder={t("message")}
                className="form-control border-0 border-bottom"
              ></textarea>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lds6BIqAAAAAEYsWUN4EFSubQOvP7y4E_3DwaHz" // Replace with your actual site key
                className="mb-2 w-100"
                data-aos="flip-up"
              />
              <button type="submit" data-aos="flip-up">{t("Send")}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
