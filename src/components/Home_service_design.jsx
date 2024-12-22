
import React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import arStyles from "../styles/home/ar.module.css";
import enStyles from "../styles/home/en.module.css";



const Home_service_design = ({ name, IconComponent, pargraph ,dataAos }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [langClass, setLangClass] = useState("en");
  useEffect(() => {
    setLangClass(currentLanguage);
  }, []);
  const styles = currentLanguage === "ar" ? arStyles : enStyles;
  return (

    <div className="col-12 col-md-4 col-lg-4 mt-5 mb-5 " >
      <div className={`${styles.card_design} text-center py-5 px-4`} data-aos={`${dataAos}`}>
        <span className="fs-1 fw-bold">{IconComponent && <IconComponent />}</span>
        <h4>{name}</h4>
        {/* <img src={imgeSrc} alt={imgeAlt} /> */}
        <p className={`${styles.par}`}>{pargraph}</p>
      </div>
    </div>

  );
};


export default Home_service_design;
