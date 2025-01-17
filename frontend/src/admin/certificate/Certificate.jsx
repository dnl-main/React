import React from 'react';
import './certificate.css';

const Certificate = () => {
  return (
    <div className="certificate_tracking">
      <div className="certificate_tracking-header">
        <img src="" className="Crew" alt="certificate Icon" />
        <p className="certificate_tracking-header-text">Certificate Tracking</p>
      </div>

      <div className="certificate_tracking-tabs">
        <div className="certificate_tracking-tabs-all">
          <img src="" className="Crew" alt="all Icon" />
          <p className="certificate_tracking-tabs-all-text">All</p>
        </div>

        <div className="certificate_tracking-tabs-complete">
          <img src="" className="Crew" alt="complete Icon" />
          <p className="certificate_tracking-tabs-complete-text">Complete</p>
        </div>

        <div className="certificate_tracking-tabs-incomplete">
          <img src="" className="Crew" alt="incomplete Icon" />
          <p className="certificate_tracking-tabs-incomplete-text">Incomplete</p>
        </div>
      </div>

      <div className="certificate_tracking-category">
        <p className="certificate_tracking-category-name">Name and position</p>
        <p className="certificate_tracking-category-training-1">Medical</p>
        <p className="certificate_tracking-category-training-2">Training</p>
        <p className="certificate_tracking-category-training-3">Medical</p>
        <p className="certificate_tracking-category-training-4">Training</p>
      </div>

      <div className="certificate_tracking-cards">
        <div className="certificate_tracking-cards-indicator">
        </div>

        <div className="certificate_tracking-cards-details">
          <div className="certificate_tracking-cards-details-left">
            <img src="" className="Crew" alt="profile Icon" />
          </div>
          
          <div className="certificate_tracking-cards-details-right">
            <p className="certificate_tracking-cards-details-right-name">Juan Dela R. Cruz</p>
            <div className="certificate_tracking-cards-details-right-job">
              <img src="" className="Crew" alt="job Icon" />
              <p className="certificate_tracking-cards-details-right-job-title">Chief Engineer</p>
            </div>
          </div>
        </div>

        <div className="certificate_tracking-cards-training-1">
          <p className="certificate_tracking-cards-training-1-text">Expires at:</p>
          <p className="certificate_tracking-cards-training-1-date">DEC-12-2024</p>
          <div className="certificate_tracking-cards-training-1-button">
            <p className="certificate_tracking-cards-training-1-button-text">Java NCIII</p>
            <img src="" className="Crew" alt="preview Icon" />
          </div>
        </div>

        <div className="certificate_tracking-cards-training-2">
          <p className="certificate_tracking-cards-training-2-text">Expires at:</p>
          <p className="certificate_tracking-cards-training-2-date">DEC-22-2024</p>
          <div className="certificate_tracking-cards-training-2-button">
            <p className="certificate_tracking-cards-training-2-button-text">Java NCIII</p>
            <img src="" className="Crew" alt="preview Icon" />
          </div>
        </div>

        <div className="certificate_tracking-cards-training-3">
          <p className="certificate_tracking-cards-training-3-text">Expires at:</p>
          <p className="certificate_tracking-cards-training-3-date">DEC-12-2024</p>
          <div className="certificate_tracking-cards-training-3-button">
            <p className="certificate_tracking-cards-training-3-button-text">Java NCIII</p>
            <img src="" className="Crew" alt="preview Icon" />
          </div>
        </div>

        <div className="certificate_tracking-cards-training-4">
          <p className="certificate_tracking-cards-training-4-text">Expires at:</p>
          <p className="certificate_tracking-cards-training-4-date">DEC-12-2024</p>
          <div className="certificate_tracking-cards-training-4-button">
            <p className="certificate_tracking-cards-training-4-button-text">Java NCIII</p>
            <img src="" className="Crew" alt="preview Icon" />
          </div>
        </div>

        <div className="certificate_tracking-cards-button">
          <div className="certificate_tracking-cards-button-bg">
            <img src="" className="Crew" alt="booking Icon" /> 
          </div>
        </div>

      </div>      
    </div>
  );
};

export default Certificate;
