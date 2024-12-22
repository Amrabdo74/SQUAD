import { useTranslation } from "react-i18next";
import Team from "../components/Team";
import WaveAnimation from "../components/WaveAnimation";
import Blognews from "../components/Blognews";
import SEO from "../components/SEO";
import langImg2 from "../assets/images/blog-img-land-2.webp"
const BlogPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO
        title="blog - NajezSoft Web Solutions"
        description="NajezSoft offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2025, serving numerous clients and institutions."
        name="NajezSoft"
        keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, NajezSoft"
        ogImage={"https://am.najezsoft.com/" + "src/assets/images/home_3.webp"}
      />

      <WaveAnimation pageTitle={t("blog")} waveHeader="Lorem ipsum dolor" paragraph="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur beatae atque at suscipit ut distinctio,s" />
      {/* <div className="landing-blog py-3">
        <div className="container">
          <div className="row justify-content-between" >
            <div className="col-sm-12 col-md-6">
              <h1 className="blog-heed mb-5" data-aos="flip-up">
                افضل عروض وتصميمات وبرمجة تطبيقات الايفون والاندرويد
              </h1>
              <p className="blog-des" data-aos="flip-up">نقدم ناجز سوفت خدمة تصميم وبرمجة تطبيقات الجوال الذكية اندرويد وايفون للشركات والأفراد والمؤسسات بجوده عاليه ولوحة تحكم لكل تطبيق حسب الاحتياج </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="box-blog-img">
                <img src={langImg2} className="img-fluid blog-img" alt="najezSoft" data-aos="flip-up" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Blognews />
      <Team />
    </>
  );
};

export default BlogPage;

