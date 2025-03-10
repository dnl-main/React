import React from 'react';
import './scheduleCard.css';

import Phone from '../../../assets/icons/Phone.svg?react';
import Mail from '../../../assets/icons/Mail.svg?react';
import Edit_Pencil_01 from '../../../assets/icons/Edit_Pencil_01.svg?react';
import Circle_Primary from '../../../assets/icons/Circle_Primary.svg?react';

const ScheduleCard = () => {
  return (
		<main className="schedule-today-cards-card">
			<section className="schedule-today-cards-card-indicator">
			</section> {/* schedule-today-cards-card-indicator */}

			<section className="schedule-today-cards-card-date">
				<p className="schedule-today-cards-card-date-day">Mon</p>
				<p className="schedule-today-cards-card-date-date">28</p>
			</section> {/* schedule-today-cards-card-date */}

			<section className="schedule-today-cards-card-separator">
				<div className="schedule-today-cards-card-separator-line">
				</div> {/* schedule-today-cards-card-separator-line */}
			</section> {/* schedule-today-cards-card-separator */}

			<section className="schedule-today-cards-card-time">
				<p className="schedule-today-cards-card-time-start">10:30 AM</p>
				<p className="schedule-today-cards-card-time-end">to 11:00 AM</p>
			</section> {/* schedule-today-cards-card-time*/}

			<section className="schedule-today-cards-card-profile">
				<Circle_Primary className="schedule-today-cards-card-profile-svg" />
				<div className="schedule-today-cards-card-profile-info">
					<p className="schedule-today-cards-card-profile-info-text">Juan Dela R. Cruz</p>
					<div className="schedule-today-cards-card-profile-info-job">
						<Circle_Primary style={{ color: "var(--primary-color)", width: "32px", height: "32px" }} />
						<p>Chief Engineer</p>
					</div> {/* schedule-today-cards-card-profile-info-job */}
				</div> {/* schedule-today-cards-card-profile-info */}
			</section> {/* schedule-today-cards-card-profile */}

			<section className="schedule-today-cards-card-contact">
				<div className="schedule-today-cards-card-contact-mobile">
					<Phone className="schedule-today-cards-card-contact-mobile-svg" />
					<p>(+62) 921-123-4567</p>
				</div> {/* schedule-today-cards-card-contact-mobile */}

				<div className="schedule-today-cards-card-contact-email">
					<Mail className="schedule-today-cards-card-contact-email-svg" />
					<p>smayers@gmail.com</p>
				</div> {/* schedule-today-cards-card-contact-email */}
			</section> {/* schedule-today-cards-card-contact */}

			<section className="schedule-today-cards-card-button">
				<button>
					<Edit_Pencil_01 style={{ color: "var(--white-color)", width: "32px", height: "32px", "--stroke-width": "2px" }} />
				</button>
			</section> {/* schedule-today-cards-card-button */}


		</main> 
  );
};

export default ScheduleCard;
