import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaLightbulb,
  FaServer,
  FaPrint,
  FaCloud,
  FaNetworkWired,
  FaComments,
  FaTasks,
} from "react-icons/fa";

const ProductsAndServices = () => {
  const services = [
    {
      icon: <FaLightbulb />,
      title: "Business Solutions",
      description: "The best in providing the latest technologies",
    },
    {
      icon: <FaServer />,
      title: "Hardware Services",
      description: "We offer a full range of appliances for every IT solution",
    },
    {
      icon: <FaPrint />,
      title: "Printing Services",
      description: "Interact provides standard solutions",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Microsoft the service provider which hosts and manages",
    },
    {
      icon: <FaNetworkWired />,
      title: "IT Infrastructure",
      description: "Planning, designing, and implementing infrastructure",
    },
    {
      icon: <FaComments />,
      title: "Consulting and Professional Services",
      description: "Trying to solve all of your IT challenges",
    },
    {
      icon: <FaTasks />,
      title: "Outsourcing",
      description: "Interact gives you access to the specialized IT skills",
    },
    {
      icon: <FaNetworkWired />,
      title: "Deployment and Integration Services",
      description: "Interacting in every stage of the deployment process",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration for animations
  }, []);

  return (
    <div className="container my-5 ">
      <h2
        className="text-center mb-4"
        style={{ fontWeight: "bold", fontSize: "28px" }}
      >
        PRODUCTS AND SERVICES
      </h2>
      <p className="text-center mb-4" style={{ color: "#555", fontSize: "16px" }}>
        Here we want to express our gratitude to our clients for the trust they have been
        showing in us. Since 1996, over one thousand major Egyptian and international companies
        have been our clients.{" "}
        <a href="#read-more" className="text-danger">
          Read more
        </a>
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {services.map((service, index) => (
          <div
            className="col"
            key={index}
            data-aos="fade-up" // Apply AOS animation effect
          >
            <div
              className="text-center p-3 shadow-sm"
              style={{
                borderRadius: "8px",
                border: "1px solid #ddd",
                background: "#fff",
              }}
            >
              <div
                className="icon-container mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto",
                  borderRadius: "50%",
                  border: "2px solid #ccc",
                  color: "#555",
                  fontSize: "30px",
                }}
              >
                {service.icon}
              </div>
              <h5 className="fw-bold" style={{ fontSize: "18px", color: "#333" }}>
                {service.title}
              </h5>
              <p style={{ fontSize: "14px", color: "#666" }}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAndServices;
