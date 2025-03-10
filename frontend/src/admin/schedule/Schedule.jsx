import React from 'react';
import './schedule.css';

import { Navbar } from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

import ScheduleCard from './scheduleComponents/ScheduleCard';

import Circle_Primary from '../../assets/icons/Circle_Primary.svg?react';
// import Phone from '../../assets/icons/Phone.svg?react';
// import Mail from '../../assets/icons/Mail.svg?react';
// import Edit_Pencil_01 from '../../assets/icons/Edit_Pencil_01.svg?react';
import Calendar_Event from '../../assets/icons/Calendar_Event.svg?react';

const Schedule = () => {
  return (
  	<div className="schedule">
		<Navbar />
		<Sidebar />
    <div className="schedule-box">
			<main className="schedule-box-in">
				<header className="schedule-header">
				<Calendar_Event 
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

				<header className="schedule-header-today">
					<p>Today</p>
				</header> {/* schedule-header-today */}

				<section className="schedule-today">
					<div className="schedule-today-cards">
						<ScheduleCard />
						<ScheduleCard />
						<ScheduleCard />
						
					</div> {/* schedule-today-cards */}
				</section> {/* schedule-today */}

				<header className="schedule-header-completed">
					<p>Completed</p>
				</header> {/* schedule-header-completed */}

				<section className="schedule-completed">
					<div className="schedule-completed-cards">
						<ScheduleCard />
					</div> {/* schedule-completed-cards */}
				</section> {/* schedule-completed */}
			</main> {/* schedule-box-in */}
    </div> {/* schedule-box */}
  	</div>
  );
};

export default Schedule;
