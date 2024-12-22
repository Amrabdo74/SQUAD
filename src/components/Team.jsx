import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Team = () => {
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
  const teamMembers = [
    { id: 1, name: 'Ahmed Omer', role: 'frontend', imgSrc: 'src/assets/images/front-end.webp' },
    { id: 2, name: 'Ahmed Omer', role: 'backend', imgSrc: 'src/assets/images/back-end.webp' },
    { id: 3, name: 'Aya Omer', role: 'ui designer', imgSrc: 'src/assets/images/front-end.webp' },
    { id: 4, name: 'Ahmed Omer', role: 'flutter', imgSrc: 'src/assets/images/back-end.webp' },
  ];

  return (
    <div className="container text-center">
      <h2 className="team-title">تيم ناجز سوفت</h2>
      <p className="team-subtitle">
        دعم فني شامل للموقع وتدريب القائمين على الموقع ويستمر الدعم دون أي رسوم إضافية
      </p>
      <div className="row team-parent">
        <Slider {...settings}>
          {teamMembers.map(member => (
            <div className="team-div" key={member.id}>
              <img src={member.imgSrc} alt={member.name} className="rounded w-100" />
              <div className="team-member shadow">
                <div className='fs-5 name'>{member.name}</div>
                <p className="text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Team;
