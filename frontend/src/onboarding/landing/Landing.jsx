import React from 'react';
import './landing.css';
import concorde from '../../assets/logo/concorde.png';
import add from '../../assets/icons/add.png';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-left">
        <div className="landing-left-logo">
          <img src={concorde} className="" alt="brand logo" />
        </div> {/* landing-left-logo */}

        <div className="landing-left-header">
          <p className="landing-left-header-heading">Effortlessly Manage Your Crew</p>
          <p className="landing-left-header-sub">Take control of your scheduling and certificate tracking with concorde</p>
        </div> {/* landing-left-header */}

        <div className="landing-left-buttons">
          <button className="landing-left-buttons-sign_up">Sign up for free</button>
          <button className="landing-left-buttons-log_in">Log in</button>
        </div> {/* landing-left-buttons */}

        <div className="landing-left-reviews">
          <div className="landing-left-reviews-rating">
            <div className="landing-left-reviews-rating-img">
              <img src={add} className="" alt="profile pic" />
              <img src={add} className="" alt="profile pic" />
              <img src={add} className="" alt="profile pic" />
            </div> {/* landing-left-reviews-rating-img */}

            <div className="landing-left-reviews-rating-value">
              <div className="landing-left-reviews-rating-value-star">
                <p className="landing-left-reviews-rating-value-star-all">4.5</p>
                <img src="" className="" alt="stars" />
              </div> {/* landing-left-reviews-rating-value-star */}
              <p className="landing-left-reviews-rating-value-star-total">3.5K Ratings</p>
            </div> {/* landing-left-reviews-rating-value */}
          </div> {/* landing-left-reviews-rating */}

          <div className="landing-left-reviews-result">
            <div className="landing-left-reviews-result-efficiency">
              <p className="landing-left-reviews-result-text-big">-30%</p>
              <p className="landing-left-reviews-result-text-small">Operational efficiency</p>
            </div> {/* landing-left-reviews-result-efficiency */}

            <div className="landing-left-reviews-result-delay">
              <p className="landing-left-reviews-result-text-big">-+40%</p>
              <p className="landing-left-reviews-result-text-small">Time delay</p>
            </div> {/* landing-left-reviews-result-delay */}

            <div className="landing-left-reviews-result-accuracy">
              <p className="landing-left-reviews-result-text-big">+35%</p>
              <p className="landing-left-reviews-result-text-small">Accurate data</p>
            </div> {/* landing-left-reviews-result-accuracy */}
          </div> {/* landing-left-reviews-result */}
        </div> {/* landing-left-reviews */}
      </div> {/* landing-left */}

      <div className="landing-right">
        <img src="" className="" alt="laptop" />
      </div> {/* landing-right */}
      




    </div>
  );
};

export default Landing;
