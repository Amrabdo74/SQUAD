import { FaShareAlt, FaWhatsapp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
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
  },
  {
    title: "ألف فاتوراتك",
    description: "ألف فاتوراتك واستفد مع نقر",
    buttonText: "المزيد",
    imgSrc: "src/assets/images/blog-iamge-1.webp",
  },
  {
    title: "صمم لك...",
    description:
      "نقدم لكم خدمة تصميم تطبيقات الجوال احترافية والهواتف الذكية للأفراد والشركات",
    buttonText: "المزيد",
    imgSrc: "src/assets/images/blog-iamge-1.webp",
  },
  {
    title: "مزيد من...",
    description:
      "نقدم لكم خدمة تصميم تطبيقات الجوال احترافية والهواتف الذكية للأفراد والشركات",
    buttonText: "المزيد",
    imgSrc: "src/assets/images/blog-iamge-1.webp",
  },
  // Add more cards as needed
];
const Blognews = () => {
  return (
    <div className="container mt-5 blogNew">
      <div className="blogNew-bg"></div>
      <div className="row">
        {cards.map((card, index) => (
          <div
            className="col-12 col-md-4 col-lg-4"
            key={index}
            data-aos="flip-up"
          >
            <div className="card mb-4">
              <div className="overflow-hidden blog-card position-relative">
                <NavLink
                  className="text-decoration-none text-dark"
                  to="/SingleBlog"
                >
                  <img
                    src={card.imgSrc}
                    className="card-img-top"
                    alt={card.title}
                  />
                </NavLink>
                <div className="overlay w-100 position-absolute">
                  <div className="row share-icon">
                    <div className="col-6 text-center share-whats">
                      <Link className="text-decoration-none" to="/contact">
                        <FaWhatsapp  />
                      </Link>
                    </div>
                    <div className="col-6 text-center">
                      <Link className="text-decoration-none" to="/about">
                        <FaShareAlt />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <NavLink
                  className="text-decoration-none text-dark"
                  to="/SingleBlog"
                >
                  <h5 className="card-title fw-bold">{card.title}</h5>
                </NavLink>
                <NavLink
                  className="text-decoration-none text-dark"
                  to="/SingleBlog"
                >
                  <p className="card-text">{card.description}</p>
                </NavLink>
                <NavLink
                  className="text-decoration-none text-dark"
                  to="/SingleBlog"
                >
                <button className="main-btn">{card.buttonText}</button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blognews;
