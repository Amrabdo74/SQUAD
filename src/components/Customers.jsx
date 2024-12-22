import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import triangle from "../assets/images/triangle.webp";

const Customers = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Optional: Adds automatic sliding
    autoplaySpeed: 2000, // Optional: Interval for automatic sliding
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

    const customers = [
      { id: 1, imgSrc: 'src/assets/images/HIMIT.webp' },
      { id: 2 , imgSrc: 'src/assets/images/HIMIT.webp' },
      { id: 3, imgSrc: 'src/assets/images/HIMIT.webp' },
      { id: 4, imgSrc: 'src/assets/images/HIMIT.webp' },
    ];
    return (
        <div className="Customers ">
            <div className="container">
                <div className="row">
                    <div className="Customers-head fs-2 fw-bold my-3 text-center">عملاء ناجز سوفت</div>
                    <Slider {...settings}>
                        {customers.map((customer) => (
                            <div key={customer.id}>
                                <div className="box-img-customer">
                                    <img src={customer.imgSrc} alt={`Customer`} />
                                    <div className="triangle">
                                      <img src={triangle} className="" alt="" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Customers;
