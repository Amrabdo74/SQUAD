import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, imgSrc: 'src/assets/images/citysqyare.webp', link: '#' },
    { id: 2, imgSrc: 'src/assets/images/nourgy.webp', link: '#' },
    { id: 3, imgSrc: 'src/assets/images/golam.webp', link: '#' },
    { id: 4, imgSrc: 'src/assets/images/citysqyare.webp', link: '#' },
    { id: 5, imgSrc: 'src/assets/images/nourgy.webp', link: '#' },
    { id: 6, imgSrc: 'src/assets/images/golam.webp', link: '#' },
    { id: 7, imgSrc: 'src/assets/images/citysqyare.webp', link: '#' },
    { id: 8, imgSrc: 'src/assets/images/nourgy.webp', link: '#' },
    { id: 9, imgSrc: 'src/assets/images/nourgy.webp', link: '#' },
  ];

  return (
    <div className="container Portfolio">
      <h2 className="text-center mt-2">أعمالنا</h2>
      <div className="row mt-4">
        {portfolioItems.map(item => (
          <div className="col-md-4" key={item.id} data-aos="flip-up">
            <div className="portfolio-item" >
              <img src={item.imgSrc} alt={`Portfolio ${item.id}`} className="img-fluid" style={{ width: "100%" }} />
              <Link href={item.link} className="">
              <button className="main-btn mt-2">
              <GoArrowUpRight />
                <span className="mx-2">مشاهدة الموقع</span>
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
