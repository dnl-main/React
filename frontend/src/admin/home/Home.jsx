import React from 'react';
import './home.css';

import { Navbar } from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import ScheduleCard from '../schedule/scheduleComponents/ScheduleCard';

import Calendar_Event from '../../assets/icons/Calendar_Event.svg?react';
import Circle_Primary from '../../assets/icons/Circle_Primary.svg?react';
import Arrow_Right_SM from '../../assets/icons/Arrow_Right_SM.svg?react';
import Users from '../../assets/icons/Users.svg?react';
import Bell from '../../assets/icons/Bell.svg?react';
import Notebook from '../../assets/icons/Notebook.svg?react';
import Book from '../../assets/icons/Book.svg?react';

import Calendar_Week from '../../assets/icons/Calendar_Week.svg?react';
import User_Add from '../../assets/icons/User_Add.svg?react';
import More_Grid_Big from '../../assets/icons/More_Grid_Big.svg?react';



const Home = () => {
  return (
    <div className="home">
    <Navbar />
    <Sidebar />
    <div className="home-box">
      <main className="home-box-in">
        <div className="home-top">
          <header className="home-top-header">
            <More_Grid_Big 
              style={{ 
                color: "var(--black-color)", 
                width: "32px", 
                height: "32px", 
                "--stroke-width": "1.5px" 
              }} 
            />
            <p>Dashboard</p> 
          </header> {/* home-top-header */}

          <main className="home-top-main">

            <section className="home-top-main-left">
              <main className="home-top-main-left-up">
                <div className="home-top-main-left-up-header">
                  <div className="home-top-main-left-up-header-main">
                    <header>Available crew</header>
                    <Users style={{ color: "var(--black-color)", width: "20px", height: "20px" }} />
                  </div> {/* home-top-main-left-up-header-main */}
                  <button className="home-top-main-left-up-header-btn">
                    <Arrow_Right_SM style={{ color: "var(--black-color)", width: "24px", height: "24px", '--stroke-width': '5' }} />
                  </button> {/* home-top-main-left-up-header-btn */}
                </div> {/* home-top-main-left-up-header */}

                <div className="home-top-main-left-up-data">
                  <div className="home-top-main-left-up-data-all">
                    <p>25</p>
                  </div> {/* home-top-main-left-up-data-all */}
                  <div className="home-top-main-left-up-data-complete">
                    <p>21 Complete</p>
                  </div> {/* home-top-main-left-up-data-complete */}
                </div> {/* home-top-main-left-up-data */}

                <div className="home-top-main-left-up-job">
                  <header className="home-top-main-left-up-job-header">
                    <p>Job title</p>
                  </header> {/* home-top-main-left-up-job-header */}

                  <main className="home-top-main-left-up-job-main">
                    
                      <div className="home-top-main-left-up-job-main-card">
                        <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
                        <p>Chief engineer</p>
                        <p>(10)</p>
                      </div> {/* home-top-main-left-up-job-main-card */}
                      <div className="home-top-main-left-up-job-main-card">
                        <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
                        <p>Trainee 4th engineer</p>
                        <p>(8)</p>
                      </div> {/* home-top-main-left-up-job-main-card */}

                      <div className="home-top-main-left-up-job-main-card">
                        <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
                        <p>Trainee 4th engineer</p>
                        <p>(8)</p>
                      </div> {/* home-top-main-left-up-job-main-card */}

                      <div className="home-top-main-left-up-job-main-card">
                        <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
                        <p>Chief engineer</p>
                        <p>(10)</p>
                      </div> {/* home-top-main-left-up-job-main-card */}
                      <div className="home-top-main-left-up-job-main-card">
                        <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
                        <p>Chief engineer</p>
                        <p>(10)</p>
                      </div> {/* home-top-main-left-up-job-main-card */}

                      <div className="home-top-main-left-up-job-main-card">
                        <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
                        <p>More</p>
                      </div> {/* home-top-main-left-up-job-main-card */}
                    
                  </main> {/* home-top-main-left-up-job-main */}
                </div> {/* home-top-main-left-up-job */}
              </main> {/* home-top-main-left-up */}

              <main className="home-top-main-left-down">
                <div className="home-top-main-left-down-header">
                  <div className="home-top-main-left-down-header-main">
                    <header>Weekly new applicants</header>
                    <User_Add style={{ color: "var(--primary-color)", width: "20px", height: "20px", '--stroke-width': '7px' }} />
                  </div> {/* home-top-main-left-down-header-main */}
                  <button className="home-top-main-left-down-header-btn">
                  <Arrow_Right_SM style={{ color: "var(--black-color)", width: "24px", height: "24px", '--stroke-width': '5' }} />
                  </button> {/* home-top-main-left-down-header-btn */}
                </div> {/* home-top-main-left-down-header */}

                <div className="home-top-main-left-down-data">
                  <div className="home-top-main-left-down-data-all">
                    <p>54</p>
                  </div> {/* home-top-main-left-down-data-all */}
                  <div className="home-top-main-left-down-data-complete">
                    <p>+10 Today</p>
                  </div> {/* home-top-main-left-down-data-complete */}
                </div> {/* home-top-main-left-down-data */}
              </main> {/* home-top-main-left-down */}
            </section> {/* home-top-main-left */}

            <section className="home-top-main-mid">
              <main className="home-top-main-mid-up">
                <div className="home-top-main-mid-up-header">
                  <div className="home-top-main-mid-up-header-main">
                    <header>Coming today</header>
                    <Calendar_Event style={{ color: "var(--black-color)", width: "20px", height: "20px", '--stroke-width': '6px'  }} />
                  </div> {/* home-top-main-mid-up-header-main */}
                  <button>
                    <Arrow_Right_SM style={{ color: "var(--black-color)", width: "24px", height: "24px", '--stroke-width': '5' }} />
                  </button> {/* home-top-main-mid-up-header-btn */}
                </div> {/* home-top-main-mid-up-header */}

                <div className="home-top-main-mid-up-data">
                  <p>10</p>
                </div> {/* home-top-main-mid-up-data */}

                <div className="home-top-main-mid-up-time">
                  <p className="home-top-main-mid-up-time-sub">Arrival time</p>
                  <p className="home-top-main-mid-up-time-main">10:30 AM</p>
                </div> {/* home-top-main-mid-up-time */}
              </main> {/* home-top-main-mid-up */}

              <main className="home-top-main-mid-down">
                <div className="home-top-main-mid-down-header">
                  <div className="home-top-main-mid-down-header-main">
                    <header>Upcoming appointment</header>
                      <Book 
                        style={{ 
                          color: "var(--black-color)", 
                          width: "20px", 
                          height: "20px", 
                          '--stroke-width': '4' // Set the stroke width here
                        }} 
                      />
                  </div> {/* home-top-main-mid-down-header-main */}
                  <button className="home-top-main-left-down-header-btn">
                    <Arrow_Right_SM style={{ color: "var(--black-color)", width: "24px", height: "24px", '--stroke-width': '5' }} />
                  </button> {/* home-top-main-mid-down-header-btn */}
                </div> {/* home-top-main-mid-down-header */}

                <div className="home-top-main-mid-down-data">
                  <p>32</p>
                </div> {/* home-top-main-mid-down-data */}

                <div className="home-top-main-mid-down-time">
                  <p className="home-top-main-mid-down-time-sub">Arrival date</p>
                  <p className="home-top-main-mid-down-time-main">December 31, 2025</p>
                </div> {/* home-top-main-mid-down-time */}
              </main> {/* home-top-main-mid-down */}
            </section> {/* home-top-main-mid */}

            <section className="home-top-main-right">
              <div className="home-top-main-right-header">
                <div className="home-top-main-right-header-main">
                  <header>Expiring certificates</header>
                  <Notebook style={{ color: "var(--black-color)", width: "20px", height: "20px" }} />
                </div> {/* home-top-main-right-header-main */}
                <button className="home-top-main-right-header-btn">
                  <Arrow_Right_SM style={{ color: "var(--black-color)", width: "24px", height: "24px", '--stroke-width': '5' }} />
                </button> {/* home-top-main-right-header-btn */}
              </div> {/* home-top-main-right-header */}

              <div className="home-top-main-right-cards">
                <main className="home-top-main-right-cards-card">
                  <div className="home-top-main-right-cards-card-up">
                    <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "28px", height: "28px" }} />
                    <div className="home-top-main-right-cards-card-up-text">
                      <p className="home-top-main-right-cards-card-up-text-name">John R. Smith</p>
                      <p className="home-top-main-right-cards-card-up-text-cert">Java National Certificate</p>
                    </div> {/* home-top-main-right-cards-card-up-text */}
                  </div> {/* home-top-main-right-cards-card-up */}

                  <div className="home-top-main-right-cards-card-down">
                    <button className="home-top-main-right-cards-card-down-btn">
                      <p>Notify</p>
                      <Bell style={{ color: "var(--primary-color)", width: "20px", height: "20px", '--stroke-width': '5' }} />
                    </button> {/* home-top-main-right-cards-card-down-btn */}

                    <div className="home-top-main-right-cards-card-down-text">
                      <p className="home-top-main-right-cards-card-down-text-expiry">Expires at:</p>
                      <p className="home-top-main-right-cards-card-down-text-date">OCT-31-2025</p>
                    </div> {/* home-top-main-right-cards-card-down-text */}
                  </div> {/* home-top-main-right-cards-card-down */}
                </main> {/* home-top-main-right-cards-card */}

                <main className="home-top-main-right-cards-card">
                  <div className="home-top-main-right-cards-card-up">
                    <Circle_Primary style={{ color: "var(--black-color-opacity-60", width: "28px", height: "28px" }} />
                    <div className="home-top-main-right-cards-card-up-text">
                      <p className="home-top-main-right-cards-card-up-text-name">John R. Smith</p>
                      <p className="home-top-main-right-cards-card-up-text-cert">Java National Certificate</p>
                    </div> {/* home-top-main-right-cards-card-up-text */}
                  </div> {/* home-top-main-right-cards-card-up */}

                  <div className="home-top-main-right-cards-card-down">
                    <button className="home-top-main-right-cards-card-down-btn">
                      <p>Notify</p>
                      <Bell style={{ color: "var(--primary-color)", width: "20px", height: "20px", '--stroke-width': '5' }} />
                    </button> {/* home-top-main-right-cards-card-down-btn */}

                    <div className="home-top-main-right-cards-card-down-text">
                      <p className="home-top-main-right-cards-card-down-text-expiry">Expires at:</p>
                      <p className="home-top-main-right-cards-card-down-text-date">OCT-31-2025</p>
                    </div> {/* home-top-main-right-cards-card-down-text */}
                  </div> {/* home-top-main-right-cards-card-down */}
                </main> {/* home-top-main-right-cards-card */}

                <main className="home-top-main-right-cards-card">
                  <div className="home-top-main-right-cards-card-up">
                    <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "28px", height: "28px" }} />
                    <div className="home-top-main-right-cards-card-up-text">
                      <p className="home-top-main-right-cards-card-up-text-name">John R. Smith</p>
                      <p className="home-top-main-right-cards-card-up-text-cert">Java National Certificate</p>
                    </div> {/* home-top-main-right-cards-card-up-text */}
                  </div> {/* home-top-main-right-cards-card-up */}

                  <div className="home-top-main-right-cards-card-down">
                    <button className="home-top-main-right-cards-card-down-btn">
                      <p>Notify</p>
                      <Bell style={{ color: "var(--primary-color)", width: "20px", height: "20px", '--stroke-width': '5' }} />
                    </button> {/* home-top-main-right-cards-card-down-btn */}

                    <div className="home-top-main-right-cards-card-down-text">
                      <p className="home-top-main-right-cards-card-down-text-expiry">Expires at:</p>
                      <p className="home-top-main-right-cards-card-down-text-date">OCT-31-2025</p>
                    </div> {/* home-top-main-right-cards-card-down-text */}
                  </div> {/* home-top-main-right-cards-card-down */}
                </main> {/* home-top-main-right-cards-card */}

              </div> {/* home-top-main-right-cards */}
            </section> {/* home-top-main-right */}
          </main> {/* home-top-main */}
        </div> {/* home-top */}

        <div className="home-bot">
          <header className="home-bot-header">
            <Calendar_Week style={{  
              width: "24px", 
              height: "24px", 
              '--stroke-width': '2px',
              '--stroke-color': 'var(--black-color)'
            }} />
            <p>Coming today</p>
          </header> {/* home-bot-header */}

          <div className="home-bot-cards">
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />

          </div> {/* home-bot-cards */}
        </div> {/* home-bot */}
      </main> {/* home-box-in */}
    </div> {/* home-box */}
    </div>
  );
};

export default Home;
