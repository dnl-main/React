import React from 'react';
import './home.css';

import { Navbar } from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

import Calendar_Event from '../../assets/icons/Calendar_Event.svg?react';

const Home = () => {
  return (
    <div className="home">
    <Navbar />
    <Sidebar />
    <div className="home-box">
      <main className="home-box-in">
        <div className="home-top">
          <header className="home-top-header">
            <Calendar_Event 
              style={{ 
                color: "var(--black-color)", 
                width: "32px", 
                height: "32px", 
                "--stroke-width": "4px" 
              }} 
            />
            <p>Dashboard</p> 
          </header> {/* home-top-header */}

          <main className="home-top-main">

            <section className="home-top-main-left">
              <div className="home-top-main-left-up">
                <div className="home-top-main-left-up">
                </div> {/* home-top-main-left-up */}

                <div className="home-top-main-left-up">
                </div> {/* home-top-main-left-up */}
                
                <div className="home-top-main-left-up">
                </div> {/* home-top-main-left-up */}
              </div> {/* home-top-main-left-up */}

              <div className="home-top-main-left-down">
              </div> {/* home-top-main-left-down */}
            </section> {/* home-top-main-left */}

            <section className="home-top-main-mid">
              <div className="home-top-main-mid-up">
              </div> {/* home-top-main-mid-up */}

              <div className="home-top-main-mid-down">
              </div> {/* home-top-main-mid-down */}
            </section> {/* home-top-main-mid */}

            <section className="home-top-main-right">
            </section> {/* home-top-main-right */}

          </main> {/* home-top-main */}
        </div> {/* home-top */}

        <div className="home-bot">
        </div> {/* home-bot */}
      </main> {/* home-box-in */}
    </div> {/* home-box */}
    </div>
  );
};

export default Home;
