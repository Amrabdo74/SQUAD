import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import arStyles from "../styles/services/ar.module.css";
import enStyles from "../styles/services/en.module.css";
import services from "../assets/images/services.webp";
import lapDesign from "../assets/images/lapDesign.webp";
import { FaLocationArrow } from "react-icons/fa";
import WaveAnimation from "../components/WaveAnimation";
import topImage from "../assets/images/contact-bg.webp";
import bottonImage from "../assets/images/contant-bot-bg.webp";
import SEO from "../components/SEO";
import Servicecard from "../components/Servicecard";
const ServicePage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [langClass, setLangClass] = useState("en");
  useEffect(() => {
    setLangClass(currentLanguage);
  }, []);
  const styles = currentLanguage === "ar" ? arStyles : enStyles;
  const handelFormSubmit = (e) => {
    e.preventDefault();
    console.log("form sumit");
  };
  return (
    <>
      <SEO
        title="service - NajezSoft Web Solutions"
        description="NajezSoft offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2013, serving numerous clients and institutions."
        name="NajezSoft"
        keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, NajezSoft"

      />
      <WaveAnimation
        pageTitle={t("secvice")}
        waveHeader={t("services_hed1")}
        paragraph={t("services_hed1_desc")}
      />
      <div className={`${styles.services} pb-5`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <div className={`${styles.textbox}`}>
                {/* <p className="fs-5" data-aos="flip-up">
                  افضل عروض وتصميمات وبرمجة تطبيقات الايفون والاندرويد
                </p> */}
                <div className={`${styles.heeding} fs-2 fw-bold my-3`} data-aos="flip-up">
                  {t("services_hed2")}
                </div>
                <p className="fs-5" data-aos="flip-up">

                  {t("services_hed2_desc1")}

                  {" "}
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={`${styles.boxImg}`}>
                <img
                  data-aos="flip-up"
                  src={services}
                  className={`${styles.servImg} img-fluid`}
                  alt="najez"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.contactUs}`}>
        <img
          src={topImage}
          style={{ height: "80px", width: "100%", objectFit: "fill" }}
          alt=""
        />
        <div className="container ">
          <div className="row">
            <div className="col-sm-12  col-md-7">
              <form
                data-aos="flip-up"
                action=""
                className="d-flex flex-column "
                onSubmit={handelFormSubmit}
              >
                <h2 className={`${styles.conactHeed} fs-2   fw-bold mb-3`}>
                {t("con_service")}
                </h2>
                <div className={` d-flex ${styles.contactUs}`}>
                  <input
                    type="email"
                    className={`${styles.contactInput} form-control w-50`}
                    aria-label="Email"
                  />
                  <button type="submit" className={`${styles.btnSubmit} main-btn m-0`}>
                  {t("Send")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img
          src={bottonImage}
          alt=""
          style={{ height: "80px", width: "100%", objectFit: "fill" }}
        />
      </div>
      <section className={`${styles.service} px-3 `}>
        <h2 className="text-center mb-4 fw-bold pt-4">                    {t("secvice")}
        </h2>
        <Servicecard />
      </section>
      <div className={`${styles.design} pt-4`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 mb-3">
              <div className={`${styles.designText}`}>
                <p className={`${styles.designHeeding} fs-2 fw-bold mb-5`} data-aos="flip-up">
                  {t("services_hed3")}
                </p>
                <div className="box d-flex align-items-center gap-2 mb-3">
                  <FaLocationArrow className={styles.icon} />
                  <p className="m-0" data-aos="flip-up">
                    {t("services_hed3_desc1")}
                  </p>
                </div>
                <div className="box d-flex align-items-center gap-2 mb-3" >
                  <FaLocationArrow className={styles.icon} />
                  <p className="m-0" data-aos="flip-up">
                    {t("services_hed3_desc2")}
                  </p>
                </div>
                <div className="box d-flex align-items-center mb-3 gap-2 ">
                  <FaLocationArrow className={styles.icon} />
                  <p className="m-0" data-aos="flip-up">
                    {t("services_hed3_desc3")}
                  </p>
                </div>
                <div className="box d-flex align-items-center mb-3 gap-2 ">
                  <FaLocationArrow className={styles.icon} />
                  <p className="m-0" data-aos="flip-up">
                    {t("services_hed3_desc4")}
                  </p>
                </div>
                <div className="box d-flex align-items-center mb-3 gap-2 ">
                  <FaLocationArrow className={styles.icon} />
                  <p className="m-0" data-aos="flip-up">
                    {t("services_hed3_desc5")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={`${styles.lapDesign}`}>
                <img
                  data-aos="flip-up"
                  src={lapDesign}
                  alt="lap design"
                  className={`${styles.lapDesignImg} `}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
