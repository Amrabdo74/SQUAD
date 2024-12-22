import { Link } from "react-router-dom";
import i18n from "../i18n";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const Servicecard = () => {
   const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [langClass, setLangClass] = useState("en");
  useEffect(() => {
    setLangClass(currentLanguage);


  }, []);
  const cards = [
    {
      img: "src/assets/images/home_3.webp",
      text: `${t("service_1_desc")}`,
      title:`${t("service_1")}`
    },
    {
      img: "src/assets/images/home_4.webp",
      text: `${t("service_2_desc")}`,
      title:`${t("service_2")}`

    },
    {
      img: "src/assets/images/home_5.webp",
      text: `${t("service_3_desc")}`,
      title:`${t("service_3")}`

    },
    {
      img: "src/assets/images/home_6.webp",
      text: `${t("service_4_desc")}`,
      title:`${t("service_4")}`

    },
    {
      img: "src/assets/images/home_7.webp",
      text: `${t("service_5_desc")}`,
      title:`${t("service_5")}`

    },
    {
      img: "src/assets/images/home_8.webp",
      text: `${t("service_6_desc")}`,
      title:`${t("service_6")}`

    },
  ];
  // changeLanguage funcation
 
  return (
 
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <div className={`col-md-6 mb-4 ${currentLanguage == "ar" ? "p-0 ps-2" : "p-0 ps-2" }`}  key={index} data-aos="fade-up">
            <Link to="/SingleService" className="text-decoration-none">
              <div className={`card service-hover ${index === 0 ? 'fisrt-home-service-div' : ''}`}>
                <div className="card-body d-flex flex-column  flex-md-row justify-content-center justify-content-md-between  align-items-center">
                  <img
                    src={card.img}
                    alt="Card cap"
                    className="card-img-top"
                    style={{ width: "150px" }}
                  />
                  <div>
                    <h4 className="card-title">{card.title}</h4>
                    <p className="text_desc">{card.text}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicecard;
