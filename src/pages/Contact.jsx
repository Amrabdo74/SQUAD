import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import WaveAnimation from "../components/WaveAnimation";
import SEO from "../components/SEO";
import Map from "../components/Map";
import React from 'react';

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
  <SEO
        title="contact - NajezSoft Web Solutions"
        description="NajezSoft offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2013, serving numerous clients and institutions."
        name="NajezSoft"
        keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, NajezSoft"
        ogImage={"https://am.najezsoft.com/"+"src/assets/images/home_2.webp"}
      />
      <WaveAnimation pageTitle={`${t("contact us")}`} waveHeader={`${t("contact_desc2_head")}`} paragraph={`${t("contact_desc1")}`} />
      <ContactForm />
      <Map/>
    </>
  );
};

export default ContactPage;
