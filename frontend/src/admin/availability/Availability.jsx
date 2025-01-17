import React from 'react';
import './availability.css';

const Availability = () => {
  return (
    <div className="crew_availability">
      <div className="crew_availability-container">
        <div className="crew_availability-header">
          <img src="" className="Crew" alt=" Crew Icon" />
          <p className="crew_availability-header-text">Crew Availability</p>
        </div>

	      {/* Filter Tabs */}
        <div className="crew_availability-tabs">
	        <div className="crew_availability-tabs-all">
            <img src="" className="Crew" alt="All" />
	          <p className="crew_availability-tabs-all-text">All</p>
          </div>                  

          <div className="crew_availability-tabs-available">
            <img src="" className="Crew" alt="aaaa" />
            <p className="crew_availability-tabs-available-text">Available</p>
          </div>                  

          <div className="crew_availability-tabs-complete">
            <img src="" className="Crew" alt=" Round Icon" />
            <p className="crew_availability-tabs-complete-text">Complete</p>
          </div>                  

	        <div className="crew_availability-tabs-incomplete">
	          <img src="" className="Crew" alt=" Round Icon" />
	          <p className="crew_availability-tabs-incomplete-text">Incomplete</p>
          </div>                  

	        <div className="crew_availability-tabs-new">
            <img src="" className="Crew" alt=" Round Icon" />
	          <p className="crew_availability-tabs-new-text">New</p>
          </div>
        </div>    

        {/* Category Text */}
	      <div className="crew_availability-category">
          <p className="crew_availability-category-name">Name and Position</p>
          <p className="crew_availability-category-contact">Contact</p>
          <p className="crew_availability-category-availability">Availability</p>
          <p className="crew_availability-category-certificate">Certicate</p>
        </div>
        
        <div className="crew_availability-cards">
          <div className="crew_availability-cards-container">
            <div className="crew_availability-cards-indicator">
            </div>
            <div className="crew_availability-cards-profile">
              <img src="" className="Crew" alt=" Round Icon" />
              <div className="crew_availability-cards-profile-details">
                <p className="crew_availability-cards-profile-details-name">Juan Dela R. Cruz</p>
                <div className="crew_availability-cards-profile-job">
                  <img src="" className="Crew" alt=" Round Icon" />
                  <p className="crew_availability-cards-profile-job-text">Chief Engineer</p>
                </div>
              </div>
            </div>

            <div className="crew_availability-cards-contact">
              <div className="crew_availability-cards-contact-mobile">
                <img src="" className="Crew" alt=" Round Icon" />
                <p className="crew_availability-cards-contact-mobile-text">+63-921-684-7777</p>
              </div>
              <div className="crew_availability-cards-contact-email">
                <img src="" className="Crew" alt=" Round Icon" />
                <p className="crew_availability-cards-contact-email-text">juandelacruz@gmail.com</p>
              </div>
            </div>

            <div className="crew_availability-cards-availability">
              <img src="" className="Crew" alt=" Round Icon" />
              <p className="crew_availability-cards-availability-text">On Vacation</p>
            </div>
            <div className="crew_availability-cards-certificate">
              <p className="crew_availability-cards-certificate-text">incomplete</p>
              <img src="" className="Crew" alt=" Round Icon" />
            </div>
            <div className="crew_availability-cards-button">
              <button className="crew_availability-cards-button-icon"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;
