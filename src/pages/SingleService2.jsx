

import { useEffect, useState } from "react";
import arStyles from "../styles/services/ar.module.css";
import enStyles from "../styles/services/en.module.css";
import services from "../assets/images/schools.jpg";
import { useTranslation } from "react-i18next";
import hosting from "../assets/images/hosting.webp";
import phones from "../assets/images/phones.webp";
import phone2 from "../assets/images/phones2.webp";
import serv from "../assets/images/schools.jpg";
import NavPage from "../components/NavPage";
import SEO from "../components/SEO";
const SingleService2 = () => {
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
                title="service - NajezSoft Web Solutions"
                description="NajezSoft offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2013, serving numerous clients and institutions."
                name="NajezSoft"
                keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, NajezSoft"

            />
            <div className={`${styles.services} services py-3 `}>
                <div className="container">
                    <NavPage pageTitle={`الخدمات`} color='text-dark' homeIcons={styles.homeIcons} circleContainer={styles.circleContainer} circleText={styles.circleText} />
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className={`${styles.textbox}`}>

                                <h2 className={`${styles.heeding}  fw-bold my-3`}>
                                    {t("m2_service-1")}

                                </h2>
                                <p className="fs-5">
                                    {t("m2_service-1_desc1")}

                                    {" "}
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className={`${styles.boxImg}`}>
                                <img
                                    src={services}
                                    className={`servImg img-fluid`}
                                    alt="najez"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="secvice-benfits py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-8">
                            
                            <div className="secvice-text mb-5">
                                <h3 className="secvice-hed secvice-custm" data-aos="flip-up" > {t("m2_service-2")}</h3>
                                <ul className="benfits-des" data-aos="flip-up" >
                                    <li>{t("m2_service-2_desc1")}</li>
                                    <li>{t("m2_service-2_desc2")}</li>
                                    <li>{t("m2_service-2_desc3")}</li>
                                    <li>{t("m2_service-2_desc4")}</li>
                                    <li>{t("m2_service-2_desc5")}</li>
                                    <li>{t("m2_service-2_desc6")}</li>
                             

                            

                                </ul>
                            </div>
                            <div className="secvice-text mb-5">
                                <h3 className="secvice-hed " data-aos="flip-up" >{t("m2_service-3")}</h3>
                                <img
                                    src={serv}
                                    className={`${styles.img_serv}  my-3 mx-auto`}
                                    alt="najez"
                                />

                                <ul className="benfits-des" data-aos="flip-up">
                                    <li>{t("m2_service-3_desc1")}</li>
                                    <li>{t("m2_service-3_desc2")}</li>
                                    <li>{t("m2_service-3_desc3")}</li>
                                    <li>{t("m2_service-3_desc4")}</li>
                                    <li>{t("m2_service-3_desc5")}</li>
                                    <li>{t("m2_service-3_desc6")}</li>




                                    
                                </ul>
                            </div>
                            {/* <div className="secvice-text mb-5" >
                                <h3 className="secvice-hed" data-aos="flip-up">مميزات تصميم موقع الكتروني.</h3>
                                <p className="benfits-des" data-aos="flip-up">
                                    خدمة تصميم وبرمجة تطبيقات الجوال الذكية اندرويد وايفون للشركات والأفراد والمؤسسات بجوده عاليه ولوحة تحكم لكل تطبيق حسب الاحتياج كما نقوم بعمل تطبيقات احترافية للجوال .
                                    خدمة تصميم وبرمجة تطبيقات الجوال الذكية اندرويد وايفون للشركات والأفراد والمؤسسات بجوده عاليه ولوحة تحكم لكل تطبيق حسب الاحتياج كما نقوم بعمل تطبيقات احترافية للجوال .
                                    خدمة تصميم وبرمجة تطبيقات الجوال الذكية اندرويد وايفون للشركات والأفراد والمؤسسات بجوده عاليه ولوحة تحكم لكل تطبيق حسب الاحتياج كما نقوم بعمل تطبيقات احترافية للجوال .
                                </p>
                            </div> */}
                        </div>
                        <div className="col-sm-12 col-md-4 right-side">
                            {/* <div>
                                <div className="benfits-box-img">
                                    <img src={lapserv} className="img-fluid" alt="NajezSoft" />
                                </div>
                                <p className="benfits-des">خدمة تصميم وبرمجة تطبيقات الجوال الذكية اندرويد وايفون للشركات والأفراد والمؤسسات بجوده عاليه ولوحة تحكم لكل تطبيق حسب الاحتياج كما نقوم بعمل تطبيقات احترافية للجوال .</p>
                            </div> */}
                            <div className="">
                                <h3 className="secvice-hed" data-aos="flip-up">خدمات أخري  لدينا </h3>
                                <div className="contant-serv-box pt-3">
                                    <a href="#" className="text-decoration-none">
                                        <div className="row align-items-center">
                                            <div className="col-sm-4 col-md-3">
                                                <div className="hosting-box-img">
                                                    <img src={hosting} className="img-fluid hosting" alt="NajezSoft" data-aos="flip-up" />
                                                </div>
                                            </div>
                                            <div className="col-8-sm col-md-9">
                                                <h3 className="secvice-hed" data-aos="flip-up">خدمات أخري  لدينا </h3>
                                                <p className="benfits-des " data-aos="flip-up">خدمة تصميم وبرمجة تطبيقات الجوال الذكية اندرويد وايفون للشركات والأفراد والمؤسسات </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="contant-serv-box pt-3">
                                    <a href="#" className="text-decoration-none">
                                        <div className="row align-items-center">
                                            <div className="col-sm-4 col-md-3">
                                                <div className="hosting-box-img">
                                                    <img src={hosting} className="img-fluid hosting" alt="NajezSoft" data-aos="flip-up" />
                                                </div>
                                            </div>
                                            <div className="col-8-sm col-md-9">
                                                <h3 className="secvice-hed" data-aos="flip-up">خدمات أخري  لدينا </h3>
                                                <p className="benfits-des" data-aos="flip-up">خدمة تصميم وبرمجة تطبيقات الجوال الذكية اندرويد وايفون للشركات والأفراد والمؤسسات </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-works">
                <div className="container">
                    <h2 className="our-work-heeding text-center fw-bold my-3" data-aos="flip-up">أعمالنا ف تصميم المواقع.</h2>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="our-work-box d-flex flex-column align-items-center">
                                <div className="img-box ">
                                    <img src={phones} className="img-fluid" alt="NajezSoft" data-aos="flip-up" />
                                </div>
                                <h4 className="design-name" data-aos="flip-up">
                                    أسم التطبيق
                                </h4>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="our-work-box d-flex flex-column align-items-center">
                                <div className="img-box">
                                    <img src={phone2} className="img-fluid" alt="NajezSoft" data-aos="flip-up" />
                                </div>
                                <h4 className="design-name" data-aos="flip-up">
                                    أسم التطبيق
                                </h4>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="our-work-box d-flex flex-column align-items-center">
                                <div className="img-box ">
                                    <img src={phones} className="img-fluid" alt="NajezSoft" data-aos="flip-up" />
                                </div>
                                <h4 className="design-name" data-aos="flip-up">
                                    أسم التطبيق
                                </h4>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="our-work-box d-flex flex-column align-items-center">
                                <div className="img-box">
                                    <img src={phone2} className="img-fluid" alt="NajezSoft" data-aos="flip-up" />
                                </div>
                                <h4 className="design-name" data-aos="flip-up">
                                    أسم التطبيق
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleService2