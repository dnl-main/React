import React from 'react';
import './availability.css';
import { Navbar } from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

import AvailabilityCard from './availabilityComponents/AvailabilityCard';

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
					</section> 
					{/* availability-box-in-categories */}

					<section className="availability-box-in-cards">
						<AvailabilityCard />
						<AvailabilityCard />
						<AvailabilityCard />
					</section> {/* availability-box-in-cards */}
        </main> {/* availability-box-in */}
      </div> {/* availability-box */}
    </div>
  );
};

export default Availability;
