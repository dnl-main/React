import React from 'react';
import './landing.css';
import concorde from '../../assets/logo/concorde.png';
import starRating from '../../assets/icons/starRating.png';
import landingBg from '../../assets/background/landingBg.png';
import landingLaptop from '../../assets/overlay/landingLaptop.png';
import landing_dp_1 from '../../assets/profiles/landing_dp_1.png';
import landing_dp_2 from '../../assets/profiles/landing_dp_2.png';
import landing_dp_3 from '../../assets/profiles/landing_dp_3.png';

const Landing = () => {
  return (
    
    <div className="landing">
   



      <div className="landing-left">
        <div className="landing-left-logo">
          <img src={concorde} className="" alt="brand logo" />
        </div> {/* landing-left-logo */}

        <div className="landing-left-header">
          <p className="landing-left-header-heading">Effortlessly <br /> 
            Manage Your 
            <span style={{ fontWeight: "var(--font-weight-bold)", color: "var(--primary-color)" }}> Crew
            </span>
          </p>
          <p className="landing-left-header-sub">Take control of your scheduling and <br />
            certificate tracking with 
            <span style={{ fontWeight: "var(--font-weight-bold)", color: "var(--primary-color)" }}> Concorde
            </span>
          </p>
        </div> {/* landing-left-header */}

        <div className="landing-left-buttons">
          <button className="landing-left-buttons-sign_up">Sign up for free</button>
          <button className="landing-left-buttons-log_in">Log in</button>
        </div> {/* landing-left-buttons */}

        <div className="landing-left-reviews">
          <div className="landing-left-reviews-rating">
            <div className="landing-left-reviews-rating-img">
              <img src={landing_dp_1} className="" alt="profile pic" />
              <img src={landing_dp_2} className="" alt="profile pic" />
              <img src={landing_dp_3} className="" alt="profile pic" />
            </div> {/* landing-left-reviews-rating-img */}

            <div className="landing-left-reviews-rating-value">
              <div className="landing-left-reviews-rating-value-star">
                <p className="landing-left-reviews-rating-value-star-all">4.5</p>
                <img src={starRating} className="" alt="stars" />
              </div> {/* landing-left-reviews-rating-value-star */}
              <p className="landing-left-reviews-rating-value-star-total">(3.5K Ratings)</p>
            </div> {/* landing-left-reviews-rating-value */}
          </div> {/* landing-left-reviews-rating */}

          <div className="landing-left-reviews-result">
            <div className="landing-left-reviews-result-efficiency">
              <div className="landing-left-reviews-result-separator"></div>
              <div className="landing-left-reviews-result-efficiency-text">
                <p className="landing-left-reviews-result-text-big">-30%</p>
                <p className="landing-left-reviews-result-text-small">Operational efficiency</p>
              </div>
            </div> {/* landing-left-reviews-result-efficiency */}

            <div className="landing-left-reviews-result-delay">
              <div className="landing-left-reviews-result-separator"></div>
              <div className="landing-left-reviews-result-delay-text">
                <p className="landing-left-reviews-result-text-big">-40%</p>
                <p className="landing-left-reviews-result-text-small">Time delay</p>
              </div>
            </div> {/* landing-left-reviews-result-delay */}

            <div className="landing-left-reviews-result-accuracy">
              <div className="landing-left-reviews-result-separator"></div>
              <div className="landing-left-reviews-result-accuracy-text">
                <p className="landing-left-reviews-result-text-big">+35%</p>
                <p className="landing-left-reviews-result-text-small">Accurate data</p>
              </div>
            </div> {/* landing-left-reviews-result-accuracy */}
          </div> {/* landing-left-reviews-result */}
        </div> {/* landing-left-reviews */}
      </div> {/* landing-left */}

      <div className="landing-right">
        <img src={landingLaptop} className="landing-right-laptop" alt="laptop" />
        <img src={landingBg} className="landing-right-bg" alt="bg" />
      </div> {/* landing-right */}
      




    </div>
  );
};

export default Landing;
