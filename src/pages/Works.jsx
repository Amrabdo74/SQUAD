import { useTranslation } from "react-i18next";
import Portfolio from "../components/Portfolio";
import WaveAnimation from "../components/WaveAnimation";
import SEO from "../components/SEO";

const WorksPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        title="our work - NajezSoft Web Solutions"
        description="NajezSoft offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2023, serving numerous clients and institutions."
        name="NajezSoft"
        keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, NajezSoft"
        ogImage={"https://am.najezsoft.com/"+"src/assets/images/najez_logo.webp"}
      />

      <WaveAnimation
        pageTitle={t("our work")}
        waveHeader="Lorem ipsum dolor"
        paragraph={t("work_desc")}
      />
      <Portfolio />
    </>
  );
};

export default WorksPage;
