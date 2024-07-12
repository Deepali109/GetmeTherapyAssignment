// import React, { useRef, useState } from "react";
// import Slider from "react-slick";
// import "./Onboarding.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useNavigate } from "react-router-dom";
// import { TailSpin } from "react-loader-spinner";

// function Onboarding() {
//   const sliderRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const navigate = useNavigate();

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     afterChange: (current) => setCurrentSlide(current),
//   };

//   const handleNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const handleSkip = () => {
//     navigate("/login");
//   };

//   const handleArrowClick = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="onboarding-container">
//       <div className="bgbox"></div>
//       <div className="slider-container1">
//         <Slider ref={sliderRef} {...settings}>
//           <div className="slide">
//             <div className="slide-content">
//               <h2>We serve incomparable delicacies</h2>
//               <p>
//                 All the best restaurants with their top menu waiting for you,
//                 they can’t wait for your order!!
//               </p>
//             </div>
//           </div>
//           <div className="slide">
//             <div className="slide-content">
//               <h2>We serve incomparable delicacies</h2>
//               <p>
//                 All the best restaurants with their top menu waiting for you,
//                 they can’t wait for your order!!
//               </p>
//             </div>
//           </div>
//           <div className="slide" style={{ marginBottom: "0px" }}>
//             <div className="slide-content">
//               <h2>We serve incomparable delicacies</h2>
//               <p>
//                 All the best restaurants with their top menu waiting for you,
//                 they can’t wait for your order!!
//               </p>
//               <div
//                 className="arrow-container"
//                 style={{
//                   marginTop: "0rem",
//                   marginBottom: "20px",
//                   cursor: "pointer",
//                 }}
//                 onClick={handleArrowClick}
//               >
//                 <TailSpin
//                   visible={true}
//                   height="80"
//                   width="80"
//                   color="#fff"
//                   ariaLabel="tail-spin-loading"
//                   radius="1"
//                   wrapperStyle={{}}
//                   wrapperClass=""
//                 />
//                 <div className="outer-circle">
//                   <div className="inner-circle">
//                     <span className="arrow">&rarr;</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Slider>

//         {currentSlide < 2 && (
//           <div className="navigation">
//             <button className="skip" onClick={handleSkip}>
//               Skip
//             </button>
//             <button className="next" onClick={handleNext}>
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Onboarding;

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "./Onboarding.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { Zoom } from "react-awesome-reveal";

function Onboarding() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSpinner, setShowSpinner] = useState(true);
  const [showOuterCircle, setShowOuterCircle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentSlide === 2) {
      setShowSpinner(true);
      setShowOuterCircle(false);

      const timer1 = setTimeout(() => {
        setShowSpinner(false);
        setShowOuterCircle(true);
      }, 1000); // 1 second delay

      return () => clearTimeout(timer1);
    }
  }, [currentSlide]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handleSkip = () => {
    navigate("/login");
  };

  const handleArrowClick = () => {
    navigate("/login");
  };

  return (
    <div className="onboarding-container">
      <div className="bgbox"></div>
      <div className="slider-container1">
        <Slider ref={sliderRef} {...settings}>
          <div className="slide">
            <div className="slide-content">
              <h2>We serve incomparable delicacies</h2>
              <p>
                All the best restaurants with their top menu waiting for you,
                they can’t wait for your order!!
              </p>
            </div>
          </div>
          <div className="slide">
            <div className="slide-content">
              <h2>We serve incomparable delicacies</h2>
              <p>
                All the best restaurants with their top menu waiting for you,
                they can’t wait for your order!!
              </p>
            </div>
          </div>
          <div className="slide" style={{ marginBottom: "0px" }}>
            <div className="slide-content">
              <h2>We serve incomparable delicacies</h2>
              <p>
                All the best restaurants with their top menu waiting for you,
                they can’t wait for your order!!
              </p>
              <div
                className="arrow-container"
                style={{
                  marginTop: "0rem",
                  marginBottom: "20px",
                  cursor: "pointer",
                }}
                onClick={handleArrowClick}
              >
                {showSpinner && (
                  <TailSpin
                    visible={true}
                    height="80"
                    width="80"
                    color="#fff"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                )}

                {showOuterCircle && (
                  <Zoom>
                    <div className="outer-circle">
                      <div className="inner-circle">
                        <span className="arrow">&rarr;</span>
                      </div>
                    </div>
                  </Zoom>
                )}
              </div>
            </div>
          </div>
        </Slider>

        {currentSlide < 2 && (
          <div className="navigation">
            <button className="skip" onClick={handleSkip}>
              Skip
            </button>
            <button className="next" onClick={handleNext}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Onboarding;
