// src/Honecard.js

import React from 'react';
import { FaRegLightbulb, FaTools, FaChartLine, FaRocket } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const Honecard = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [langClass, setLangClass] = useState("en");
  useEffect(() => {
    setLangClass(currentLanguage);
  }, []);
  const cards = [
    {
      title:`${t("Prices")}`,
      Icon: FaRegLightbulb,
      description:`${t("Prices_desc")}`,
      bgClass: "first-dev text-white",
    },
    {
      title: `${t("Quality")}`,
      Icon: FaTools,
      description:
        `${t("Quality_desc")}`,
      bgClass: "second-dev  bg-w",
    },
    {
      title: `${t("Achievement")}`,
      Icon: FaChartLine,
      description:
        `${t("Achievement_desc")}`,
      bgClass: "therd-dev  bg-w",
    },
    {
      title: `${t("Innovation")}`,
      Icon: FaRocket,
      description:`${t("Innovation_desc")}`,
      bgClass: "four-dev bg-w",
    },
  ];
  let i = 50;
  return (
    <div className="container Honecard my-5">
      <div className="row justify-content-between">
        {cards.map((card, index) => (
          <div key={index} className="col-12 col-md-4 col-lg-3 mb-4">
            <div className={`card ${card.bgClass} py-4 h-100 border-0`} data-aos="fade-up" data-aos-delay={`${i += 150}`}>
              <div className="card-body  border-0">
                <h5 className="card-title fw-bold ">{card.title}</h5>
                <h6 className="mb-3 py-2   text-center home-icon">
                  <card.Icon size="3em" />
                </h6>
                <p
                  className="bg-dark "
                  style={{ width: "25%", height: "2px" }}
                />
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Honecard;
