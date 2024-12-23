import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import arStyles from "../styles/about/ar.module.css";
import enStyles from "../styles/about/en.module.css";
// import Aboutlanding from "../assets/images/Aboutlanding.webp"
import aboutland from "../assets/images/aboutland.webp"
import servImg from "../assets/images/servImg.webp"
import OurMission from "../components/OurMission";
import WaveAnimation from "../components/WaveAnimation";
import SEO from "../components/SEO";
import { IoMdChatboxes } from "react-icons/io";
import { GoGoal } from "react-icons/go";
import { CiFlag1 } from "react-icons/ci";
import Team from "../components/Team";
import React from 'react';

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [langClass, setLangClass] = useState("en");
  useEffect(() => {
    setLangClass(currentLanguage);
  }, []);
  const styles = currentLanguage === "ar" ? arStyles : enStyles;
  let text1 = `${t("message")}`;
  let text2 = `${t("goal")}`;
  let text3 = `${t("mission")}`;
  let desc1 = `${t("message_desc")}`;
  let desc2 = `${t("goal_desc")}`;
  let desc3 = `${t("mission_desc")}`;
  let icon1 = <IoMdChatboxes className={`${styles.imgAbout}`} />;
  let icon2 = <CiFlag1 className={`${styles.imgAbout}`} />;
  let icon3 = <GoGoal className={`${styles.imgAbout}`} />;
  return (
    <>
      <SEO
        title="About - NajezSoft Web Solutions"
        description="NajezSoft offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2030, serving numerous clients and institutions."
        name="NajezSoft"
        keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, NajezSoft"
        ogImage={"https://am.najezsoft.com/" + "src/assets/images/home_5.webp"}
      />


      <WaveAnimation pageTitle={t("about us")} waveHeader={`${t("najez_company")}`} paragraph={`${t("najez_about_2")}`} />
      <div className={`${styles.landing}`}>
        <div className="container">
          <div className="row  justify-content-between flex-column-reverse flex-md-row">
            <div className="col-sm-12 col-md-5" data-aos="flip-up">
              <div className={`${styles.landtext}`}>
                <p className={`${styles.aboutUs} fs-2`}>
                  {t("about_us")}
                </p>
                <p className={`${styles.campTitle} fs-1`}>
                  {t("najez")}
                </p>
                <p className={`${styles.campdis} fs-4`}>
                  {t("najez_about")}

                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-7">
              {/* <div className={`${styles.boxImg}`}> */}
              <img src={`${aboutland}`} className={`${styles.landImg}`} alt="" data-aos="flip-right" />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.ourMissionCards} py-5`}>
        <div className="container">
          <div className="row justify-content-between">
            <OurMission icon={icon1} title={text1} desc={desc1} ourcard={styles.ourcard} cardDes={styles.cardDes} titleStyle={styles.titleStyle} feed={`flip-left`} />
            <OurMission icon={icon2} title={text2} desc={desc2} ourcard={styles.ourcard} cardDes={styles.cardDes} titleStyle={styles.titleStyle} feed={`flip-up`} />
            <OurMission icon={icon3} title={text3} desc={desc3} ourcard={styles.ourcard} cardDes={styles.cardDes} titleStyle={styles.titleStyle} feed={`flip-right`} />
          </div>
        </div>
      </div>
      <div className={`${styles.services} py-5 mb-5`}>
        <div className={`${styles.container} container`}>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <div className={`${styles.textbox}`}>
                <p className="fs-5" data-aos="flip-up">تصميم متجر الكتروني بأعلى المواصفات والمميزات ، متخصصون فى تصميم متاجر إلكترونية</p>
                <div className={`${styles.heeding} fs-2 fw-bold mb-2`} data-aos="flip-up">
                  خدمات تصميم مواقع التجارة الالكترونية
                </div>
                <p className="fs-5" data-aos="flip-up">{t("najez_about_3")}</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className={`${styles.boxImg}`} data-aos="flip-right">
                <img src={servImg} className={`${styles.servImg} `} alt="najez" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />
    </>
  )
}

export default AboutPage