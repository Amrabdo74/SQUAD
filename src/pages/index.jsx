import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import arStyles from "../styles/home/ar.module.css";
import enStyles from "../styles/home/en.module.css";
import Homecard from "../components/Homecard";
import Home_service_design from "../components/Home_service_design";
import { RiUserSettingsLine } from "react-icons/ri";
import homeImage from "../assets/images/home_1.webp";
import homeImage2 from "../assets/images/home_2.webp";
import sliderImage from "../assets/images/phone-image.webp";
import moreinfo1 from "../assets/images/About-info-lap.webp";
import { FaLocationArrow, FaWhatsapp } from "react-icons/fa6";
import Portfolio from "../components/Portfolio";
import SEO from "../components/SEO";
import Servicecard from "../components/Servicecard";
import { Link } from "react-router-dom";
import Customers from "../components/Customers";
const HomePage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [langClass, setLangClass] = useState("en");
  useEffect(() => {
    setLangClass(currentLanguage);


  }, []);
  const styles = currentLanguage === "ar" ? arStyles : enStyles;
  return (
    <>
      <SEO
        title="Home - NajezSoft Web Solutions"
        description="NajezSoft offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2010, serving numerous clients and institutions."
        name="NajezSoft"
        keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, NajezSoft"
        ogImage={"https://am.najezsoft.com/" + "src/assets/images/najez_logo.webp"}

      />
      <section className={styles.slider}>
        <div className="container h-100 ">
          <div className="row  h-100 ">
            <div className="col-12  col-md-6 align-self-center ">
              <p className={`p-0 m-0 ${styles.text}`}>
                {t("service_offer")}
              </p>
              <p className={`${styles.texthead} fs-1`}>
                {t("service_offer_desc")}
              </p>
              <div className="d-flex align-items-center gap-2">
                <span className={`${styles.icon}`}>
                  <FaLocationArrow />
                </span>
                <span className="text">


                  {t("Hosting services")} –{t("Website development")}-{t("Educational services")}


                </span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className={`${styles.icon}`}>
                  <FaLocationArrow />
                </span>
                <span className="text">
                  {t("Health services")} –{t("Application development")}-{t("Digital marketing")}
                </span>
              </div>
              <div className="d-flex gap-2 mt-3 ">
                <Link to="/about">
                  <button
                    className={`main-btn border-0 ${styles.btn_more} `}
                  >
                    {t("Learn more")}
                  </button>
                </Link>

                <Link rel="nofollow" target="_blank" to="https://wa.me/+201155272634">
                  <button
                    className={`main-btn  border-0 ${styles.btn_whats}`}
                  >{t("WhatsApp contact")}
                    <FaWhatsapp />
                  </button>
                </Link>
              </div>

            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
              <img
                className={styles.sliderImage}
                src={sliderImage}
                alt="najez-slider-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cards}>
        <Homecard />
      </section>
      <section className={`${styles.about_home} px-3`}>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-6 align-self-end  mb-2">
              <p className="head fs-2 fw-bold" data-aos="fade-up ">{t("about_us")}</p>
              <div className={`${styles.line}`}></div>
              <p className={`${styles.content} fs-1`} data-aos="fade-up">
                {t("najez")}
              </p>
              <p className={`${styles.content} `} data-aos="fade-up">
                {t("najez_about")}

              </p>
            </div>
            <div className="col-md-6 align-self-end">
              <img
                data-aos="fade-right"
                src={homeImage}
                alt="Home Image"
                title="Home Image"
                className={`${styles.img_about}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.service} mt-5 px-3 `}>
        <div className="container">
          <div
            className={`${styles.experince}  row justify-content-between align-items-center`}
          >
            <div className="col-md-6 col-lg-5">
              <div className={`${styles.head}`}>
                <div className="fs-1 fw-bold d-flex">
                  <p className="fs-1 fw-bold mx-2" data-aos="fade-up">10</p>
                  <p data-aos="fade-up">{t("years of experience")}</p>
                </div>
                {/* <img
                  src={service2img}
                  alt=""
                  title=""
                  className={`${styles.img2}`}
                /> */}
              </div>

              <p className={`${styles.content}`} data-aos="fade-up">
                {t("exper_desc")}
              
              </p>
            </div>
            <div className="col-md-6 col-lg-5" data-aos="fade-left">
              <img
                src={homeImage2}
                alt=""
                title=""
                className={`${styles.experinimg}`}
              />
            </div>
          </div>
          <Servicecard />

          <div className="row">
            <Home_service_design
              name={t("Modern and attractive designs")}
              IconComponent={RiUserSettingsLine}
              pargraph={t("Modern and attractive designs_desc")}
              dataAos={`flip-left`}
            />
            <Home_service_design
              name={t("Comprehensive technical support")}
              IconComponent={RiUserSettingsLine}
              pargraph={t("Comprehensive technical support_desc")}
              dataAos={`flip-up`}
            />
            <Home_service_design
              name={t("Suitable offers")}
              IconComponent={RiUserSettingsLine}
              pargraph={t("Suitable offers_desc")}
              dataAos={`flip-right`}
            />
          </div>
        </div>
      </section>
      <Portfolio />
      <section className={`${styles.more_info} `}>
        <div className="container position-relative mt-5">
          <div className="row justify-content-between h-100">
            <div className="col-sm-12 col-md-4 algin-self-center " >
              <p className={`${styles.head} text-dark fs-1 fw-bold  pt-5`} data-aos="flip-up">
                لمزيد من المعلومات عن خدماتنا..
              </p>
            </div>
            <div className="col-sm-12 col-md-7 d-flex justify-content-center" >
              <img
                data-aos="flip-right"
                src={moreinfo1}
                alt="najez"
                title="najez"
                className={`${styles.more_infoimg}`}
              />
              <div className={`${styles.button}`} data-aos="flip-up">
                <Link to="/contact" className={`${styles.btn_contatct} `}>
                  <button className="main-btn contact-home-btn bg-white border-0 text-danger "> تواصل معنا</button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* <Team /> */}
      <Customers />
    </>
  );
};

export default HomePage;
