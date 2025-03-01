import React from 'react';
import './availability.css';
import { Navbar } from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';


import Calendar_Add from '../../assets/icons/Calendar_Add.svg?react';
import Caret_Circle_Down from '../../assets/icons/Caret_Circle_Down.svg?react';

import Phone from '../../assets/icons/Phone.svg?react';
import Mail from '../../assets/icons/Mail.svg?react';
import Circle_Primary from '../../assets/icons/Circle_Primary.svg?react';
import Users from '../../assets/icons/Users.svg?react';


const Availability = () => {
  return (
    <div className="availability">
      <Navbar />
      <Sidebar />
 
      <div className="availability-box">
        <main className="availability-box-in">
					<header className="availability-box-in-header">
						<Users style={{ width: "32px", height: "32px", color: "#14181f", strokeWidth: 2 }} />
						<p>Crew availability</p> 
					</header> {/* availability-box-in-header */}

					<section className="availability-box-in-tabs">
						<button className="availability-box-in-tabs-all">
							<Circle_Primary style={{ color: "var(--white-color)", width: "20px", height: "20px" }} />
							<p>All</p>
						</button> {/* availability-box-in-tabs-all */}

						<button className="availability-box-in-tabs-available">
							<Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
							<p>Available</p>
						</button> {/* availability-box-in-tabs-available */}

						<button className="availability-box-in-tabs-complete">
						<Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
							<p>Complete</p>
						</button> {/* availability-box-in-tabs-complete */}

						<button className="availability-box-in-tabs-incomplete">
							<Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
							<p>Incomplete</p>
						</button> {/* availability-box-in-tabs-incomplete */}

						<button className="availability-box-in-tabs-new">
							<Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
							<p>New</p>
						</button> {/* availability-box-in-tabs-new */}
					</section> {/* availability-box-in-tabs */}

					<section className="availability-box-in-categories">
						<p>Name and position</p>
						<p>Contact</p>
						<p>Availability</p>
						<p>Certificate</p>
					</section> {/* availability-box-in-categories */}

					<section className="availability-box-in-cards">
						<main className="availability-box-in-cards-card">
							<div className="availability-box-in-cards-card-indicator">
								{/* <p>bg</p> */}
							</div> {/* availability-box-in-cards-card-indicator */}

							<div className="availability-box-in-cards-card-profile">
								<Circle_Primary className="availability-box-in-cards-card-profile-svg" />
								<div className="availability-box-in-cards-card-profile-info">
									<p className="availability-box-in-cards-card-profile-info-text">Juan Dela R. Cruz</p>
									<div className="availability-box-in-cards-card-profile-info-job">
										<Circle_Primary style={{ color: "var(--primary-color)", width: "32px", height: "32px" }} />
										<p>Chief Engineer</p>
									</div> {/* availability-box-in-cards-card-profile-info-job */}
								</div> {/* availability-box-in-cards-card-profile-info */}
							</div> {/* availability-box-in-cards-card-profile */}

							<div className="availability-box-in-cards-card-contact">
								<div className="availability-box-in-cards-card-contact-mobile">
									<Phone className="availability-box-in-cards-card-contact-mobile-svg" />
									<p>(+62) 921-123-4567</p>
								</div> {/* availability-box-in-cards-card-contact-mobile */}

								<div className="availability-box-in-cards-card-contact-email">
									<Mail className="availability-box-in-cards-card-contact-email-svg" />
									<p>smayers@gmail.com</p>
								</div> {/* availability-box-in-cards-card-contact-email */}
							</div> {/* availability-box-in-cards-card-contact */}

							<div className="availability-box-in-cards-card-availability">
								<div className="availability-box-in-cards-card-availability-bg">
									<Circle_Primary style={{ color: "var(--yellow-indicator)", width: "28px", height: "28px" }} />
									<p>On vacation</p>
								</div> {/* availability-box-in-cards-card-availability-bg */}
							</div> {/* availability-box-in-cards-card-availability */}

							<div className="availability-box-in-cards-card-certificate">
								<button>
									<p>Incomplete</p>
									<Caret_Circle_Down className="availability-box-in-cards-card-certificate-svg" style={{ strokeWidth: "40px" }}/>
								</button>
							</div> {/* availability-box-in-cards-card-certificate */}

							<div className="availability-box-in-cards-card-button">
								<button>
									<Calendar_Add className="availability-box-in-cards-card-button-svg" />
								</button>
							</div> {/* availability-box-in-cards-card-button */}
						</main> {/* availability-box-in-cards-card */}
					</section> {/* availability-box-in-cards */}
        </main> {/* availability-box-in */}
      </div> {/* availability-box */}
    </div>
  );
};

export default Availability;
