import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedClients = () => {
  const clients = [
    {
      id: 1,
      name: "BC",
      logo: "https://www.interactts.com/wp-content/uploads/2017/12/wadidegla.png",
    },
    {
      id: 2,
      name: "Orascom",
      logo: "https://www.interactts.com/wp-content/uploads/2017/12/wadidegla.png",
    },
    {
      id: 3,
      name: "Housing & Development Bank",
      logo: "https://www.interactts.com/wp-content/uploads/2017/12/wadidegla.png",
    },
    {
      id: 4,
      name: "EgyptAir",
      logo: "https://www.interactts.com/wp-content/uploads/2017/12/wadidegla.png",
    },
    {
      id: 5,
      name: "Tokio Marine",
      logo: "https://www.interactts.com/wp-content/uploads/2017/12/wadidegla.png",
    },
    {
      id: 6,
      name: "German Cooperation",
      logo: "https://www.interactts.com/wp-content/uploads/2017/12/wadidegla.png",
    },
  ];

  const settings = {
    dots: true, // Enables pagination dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true, // Enables navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleViewAll = () => {
    // Redirect or perform an action when "View All" is clicked
    console.log("View All clicked");
    // Example: window.location.href = '/all-clients';
  };

  return (
    <div className="py-4">
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Featured Clients</h2>
          <p className="text-gray-600">
            Some of our featured clients that we were honored to work with
          </p>
        </div>

        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-20 w-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedClients;
