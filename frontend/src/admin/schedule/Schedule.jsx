import React from 'react';
import './schedule.css';

import Notebook from '../../assets/icons/Notebook.svg?react';
import Circle_Primary from '../../assets/icons/Circle_Primary.svg?react';
import Phone from '../../assets/icons/Phone.svg?react';
import Mail from '../../assets/icons/Mail.svg?react';
import Edit_Pencil_01 from '../../assets/icons/Edit_Pencil_01.svg?react';

const Schedule = () => {
  return (
  	<div className="schedule">
    <div className="schedule-box">
			<main className="schedule-box-in">
				<header className="schedule-header">
					<Notebook 
						style={{ 
							color: "var(--black-color)", 
							width: "32px", 
							height: "32px", 
							"--stroke-width": "4px" 
						}} 
					/>
					<p>Scheduled appointments</p> 
				</header> {/* schedule-header */}
				<section className="schedule-tabs">
					<button className="schedule-tabs-all">
						<Circle_Primary style={{ color: "var(--white-color)", width: "20px", height: "20px" }} />
						<p>All</p>
					</button> {/* schedule-tabs-all */}

					<button className="schedule-tabs-today">
						<Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
						<p>Today</p>
					</button> {/* schedule-tabs-today */}

					<button className="schedule-tabs-upcoming">
						<Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
						<p>Upcoming</p>
					</button> {/* schedule-tabs-upcoming */}

					<button className="schedule-tabs-completed">
						<Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
						<p>Completed</p>
					</button> {/* schedule-tabs-completed */}
				</section> {/* schedule-tabs */}

				<section className="schedule-today">
					<header className="schedule-today-header">
						<p>Today</p>
					</header> {/* schedule-today-header */}

					<div className="schedule-today-cards">
						<main className="schedule-today-cards-card">
							<section className="schedule-today-cards-card-indicator">
							</section> {/* schedule-today-cards-card-indicator */}

							<section className="schedule-today-cards-card-date">
								<p className="schedule-today-cards-card-date-day">Mon</p>
								<p className="schedule-today-cards-card-date-date">28</p>
							</section> {/* schedule-today-cards-card-date */}

							<section className="schedule-today-cards-card-separator">
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


						</main> {/* schedule-today-cards-card */}
					</div> {/* schedule-today-cards */}
				</section> {/* schedule-today */}

				<section className="schedule-completed">
					<header className="schedule-completed-header">
						<p>Completed</p>
					</header> {/* schedule-completed-header */}

					<main className="schedule-completed-cards">
					</main> {/* schedule-completed-cards */}
				</section> {/* schedule-completed */}
			</main> {/* schedule-box-in */}
    </div> {/* schedule-box */}
  	</div>
  );
};

export default Schedule;
