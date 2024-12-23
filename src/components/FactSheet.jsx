import React, { useEffect, useState, useRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
};

const CounterNumber = ({ number }) => {
  const count = useCounter(parseInt(number));
  return <span>{count.toLocaleString()}</span>;
};

const FactSheet = () => {
  const [isInView, setIsInView] = useState(false);
  const factSheetRef = useRef(null);

  const facts = [
    { number: '25', title: 'Partnerships' },
    { number: '64', title: 'Solutions' },
    { number: '35', title: 'Industries' },
    { number: '1200', title: 'Customers' },
    { number: '500', title: 'Products' },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          AOS.refresh(); // Refresh AOS animations when the section is visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (factSheetRef.current) {
      observer.observe(factSheetRef.current);
    }

    return () => {
      if (factSheetRef.current) observer.unobserve(factSheetRef.current);
    };
  }, []);

  return (
    <div
      ref={factSheetRef}
      className="bg-dark d-flex flex-column align-items-center justify-content-center py-5"
    >
      <h1 className="text-white display-4 mb-2" data-aos="fade-down">
        Fact Sheet
      </h1>

      <div className="container">
        <div className="row justify-content-center">
          {isInView &&
            facts.map((fact, index) => (
              <div
                key={index}
                className="col-6 col-sm-4 col-lg-2 mb-2 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-white">
                  <h2 className="display-4 fw-bold mb-2">
                    <CounterNumber number={fact.number} />
                  </h2>
                  <p className="text-white-50">{fact.title}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FactSheet;
