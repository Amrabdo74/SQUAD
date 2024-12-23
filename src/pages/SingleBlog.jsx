import { FaShareAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import WaveAnimation from "../components/WaveAnimation";
import { useTranslation } from "react-i18next";
import imgBlog from "../assets/images/blog-iamge-1.webp";
import home3 from "../assets/images/home_3.webp";
import { CiClock2 } from "react-icons/ci";
import { useEffect } from "react";
import SEO from "../components/SEO";
import React from 'react';

const SingleBlog = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  console.log(currentLanguage);
  useEffect(() => { }, [currentLanguage]);
  const cards = [
    {
      title: "ورشة تطبيقات الهواتف والاندرويد",
      description:
        "نقدم لكم خدمة تصميم تطبيقات الجوال احترافية والهواتف الذكية للأفراد والشركات",
      buttonText: "المزيد",
      imgSrc: "src/assets/images/blog-iamge-1.webp",
    },
    {
      title: "احصل على محتوى",
      description: "احصل على محتوى مميز لموقعك او تطبيقك",
      buttonText: "المزيد",
      imgSrc: "src/assets/images/blog-iamge-1.webp",
    },
    {
      title: "سلة الأمه",
      description: "نصمم لك سلة الأمه مع كل مستلزماتها",
      buttonText: "المزيد",
      imgSrc: "src/assets/images/blog-iamge-1.webp",
    }

  ]
  return (
    <>
      <SEO
        title="Blog - NajezSoft Web Solutions"
        description="NajezSoft offers comprehensive web solutions including web design, development, hosting, SEO, and online marketing. Established in 2013, serving numerous clients and institutions."
        name="NajezSoft"
        keywords="web design, web development, SEO, online marketing, e-commerce, web hosting, NajezSoft"

      />
      <WaveAnimation
        pageTitle={t("blog")}
        waveHeader="Lorem ipsum dolor"
        paragraph="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur beatae atque at suscipit ut distinctio,s"
      />
      <div className="container mt-5 ">
        <div className="blogNew-bg"></div>
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="card mb-4 border-0">
              <div className="overflow-hidden blog-card ">
                <img
                  data-aos="flip-up"
                  src={imgBlog}
                  style={{
                    height: "450px",
                    objectFit: "cover",
                    aspectRatio: "1/1",
                  }}
                  className="card-img-top mt-2"
                  alt="Blog Post"
                />
                <div className="overlay w-100 mt-4">
                  <div
                    className="row share-icon"
                    style={{ borderRadius: " 30px 30px 0px 0px" }}
                    data-aos="flip-up"
                  >
                    <div className="col-4 text-center share-whats" data-aos="flip-up">
                      <Link className="text-decoration-none" to="/contact">
                        <FaWhatsapp  />
                      </Link>
                    </div>
                    <div className="col-4 text-center">
                      <Link className="text-decoration-none" to="/about" data-aos="flip-up">
                        <FaShareAlt />
                      </Link>
                    </div>
                    <div data-aos="flip-up"
                      className={`col-4 text-center d-flex align-items-center gap-2 text-white ${currentLanguage == "ar" ? "border-end" : "border-start"
                        } `}
                    >
                      <CiClock2 />
                      11 ديسمبـر ,2024
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold active" data-aos="flip-up">
                  ورشة تطبيقات الهواتف والاندرويد
                </h5>
                <p className="card-text" style={{ lineHeight: "2" }} data-aos="flip-up">
                  نقدم لكم خدمة تصميم تطبيقات الجوال احترافية والهواتف الذكية
                  للأفراد والشركات. حسب نوع النشاط الخاص بك يتم تصميم وبرمجة
                  تطبيق الجوال المناسب سواء لأجهزة الاندرويد أو الايفون. يوفر
                  ذلك للأفراد والشركات والمؤسسات سهولة إدارة وحوكمة أعمالهم
                  التجارية والمهنية. يتم توفير التطبيق وفقًا للاحتياجات الخاصة
                  لكل عميل مع إمكانية التعديل والإضافة.
                </p>
                <h5 className="fw-bold" style={{ color: "#5F3F80" }} data-aos="flip-up">
                  أهميه الموقع الالكتروني والتواجد الرقمي.{" "}
                </h5>
                <ul>
                  <li className="fw-medium mt-4" data-aos="flip-up">
                    بعمل تطبيقات احترافية للجوال .
                  </li>
                  <li className="fw-medium mt-4" data-aos="flip-up">
                    وايفون للشركات والأفراد والمؤسسات بجوده عاليه{" "}
                  </li>
                  <li className="fw-medium mt-4" data-aos="flip-up">
                    ولوحة تحكم لكل تطبيق حسب الاحتياج كما نقوم{" "}
                  </li>
                  <li className="fw-medium mt-4" data-aos="flip-up">
                    خدمة تصميم وبرمجة تطبيقات الجوال الذكية اندرويد{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h5 className="fw-bold" data-aos="flip-up">أحدث الأخبار</h5>
             <div className="list-group">
              <Link to="" className=" d-flex gap-2 text-decoration-none text-dark border-bottom  pb-3" data-aos="flip-up">
                <div className="d-flex  justify-content-between">
                  <img src={home3} alt="" style={{ width: "90px" }} />
                </div>
                <div>
                  <h6 className="mb-1">أهمية الموقع الالكتروني</h6>
                  <p className="mb-1">
                    خدمة تصميم وبرمجة تطبيقات الجوال الذكية للاندرويد والايفون
                    للشركات والأفراد والمؤسسات.
                  </p>
                  <small className="text-secondary">
                    <CiClock2 /> 11 ديسمبر 2024</small>
                </div>
              </Link>
              <Link to="" className=" d-flex gap-2 text-decoration-none text-dark border-bottom pt-4 pb-3" data-aos="flip-up">
                <div className="d-flex  justify-content-between">
                  <img src={home3} alt="" style={{ width: "90px" }} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">أهمية الموقع الالكتروني</h6>
                  <p className="mb-1">
                    خدمة تصميم وبرمجة تطبيقات الجوال الذكية للاندرويد والايفون
                    للشركات والأفراد والمؤسسات.
                  </p>
                  <small className="text-secondary">
                    <CiClock2 /> 11 ديسمبر 2024</small>
                </div>
              </Link>
              <Link to="" className=" d-flex gap-2 text-decoration-none text-dark border-bottom pt-4 pb-3" data-aos="flip-up">
                <div className="d-flex  justify-content-between">
                  <img src={home3} alt="" style={{ width: "90px" }} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">أهمية الموقع الالكتروني</h6>
                  <p className="mb-1">
                    خدمة تصميم وبرمجة تطبيقات الجوال الذكية للاندرويد والايفون
                    للشركات والأفراد والمؤسسات.
                  </p>
                  <small className="text-secondary">
                    <CiClock2 /> 11 ديسمبر 2024</small>
                </div>
              </Link>
              <div className="keywordes">
                <h3 data-aos="flip-up">Keywords</h3>
                <div className="box-words">
                  <a href="#" className="fs-5" data-aos="flip-up">design</a>
                  <a href="#" className="fs-5" data-aos="flip-up">programming</a>
                  <a href="#" className="fs-5" data-aos="flip-up">programming</a>
                  <a href="#" className="fs-5" data-aos="flip-up">materal design</a>
                  <a href="#" className="fs-5" data-aos="flip-up">programming</a>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>



      <div className="container mt-5 blogNew">
        <div className="row">
          <h4 className="mb-4 fw-bold" style={{ color: "#5F3F80" }}>مواضيع ذات صله.</h4>
          {cards.map((card, index) => (
            <div className="col-12 col-md-4 col-lg-4" key={index} data-aos="flip-up">
                <div className="card mb-4">
                  <div className="overflow-hidden blog-card position-relative">
                    <img
                      src={card.imgSrc}
                      className="card-img-top"
                      alt="{card.title}"
                    />
                    <div className="overlay  w-100 position-absolute">
                      <div className="row share-icon">
                        <div className="col-6 text-center share-whats">
                          <Link className="text-decoration-none" to="/contact"> <FaWhatsapp  /></Link>
                        </div>
                        <div className="col-6 text-center">
                          <Link className="text-decoration-none" to="/about"> <FaShareAlt /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <Link to="" className="btn btn-primary blog-btn">
                      {card.buttonText}
                    </Link>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
