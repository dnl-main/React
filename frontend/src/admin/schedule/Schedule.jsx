import React from 'react';
import './schedule.css';

import Notebook from '../../assets/icons/Notebook.svg?react';
import Circle_Primary from '../../assets/icons/Circle_Primary.svg?react';

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

					<main className="schedule-today-cards">
						<div className="schedule-today-cards-indicator">
						</div> {/* schedule-today-cards-indicator */}

						<div className="schedule-today-cards-date">
						</div> {/* schedule-today-cards-date */}

						<div className="schedule-today-cards-separator">
						</div> {/* schedule-today-cards-separator */}

						<div className="schedule-today-cards-time">
						</div> {/* schedule-today-cards-time*/}

						<div className="schedule-today-cards-profile">
						</div> {/* schedule-today-cards-profile */}

						<div className="schedule-today-cards-contact">
						</div> {/* schedule-today-cards-contact */}

						<div className="schedule-today-cards-button">
						</div> {/* schedule-today-cards-button */}
					</main> {/* schedule-today-cards */}
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
