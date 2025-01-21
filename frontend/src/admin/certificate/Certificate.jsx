import React from 'react';
import './certificate.css';
import CertTracCard from './cards/CertTracCard';

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

      <div className="certificate_tracking-cards-all">
        <CertTracCard />
        
        
      </div>     
    </div>
  );
};

export default Certificate;
