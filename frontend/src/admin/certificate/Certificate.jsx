import React from 'react';
import './certificate.css';

import { Navbar } from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

import CertificateCard from './cards/CertificateCard';

import Circle_Primary from '../../assets/icons/Circle_Primary.svg?react';
import Calendar_Add from '../../assets/icons/Calendar_Add.svg?react';
import Notebook from '../../assets/icons/Notebook.svg?react';
import Bell from '../../assets/icons/Bell.svg?react';
import Note_Search from '../../assets/icons/Note_Search.svg?react';
// import CertTracCard from './cards/CertTracCard';

const Certificate = () => {
  return (
    <div className="certificate">
      <Navbar />
      <Sidebar />
      <div className="certificate-box">
      <main className="certificate-box-in">
        <header className="certificate-header">
          <Notebook 
            style={{ 
              color: "var(--black-color)", 
              width: "32px", 
              height: "32px", 
              "--stroke-width": "4px" 
            }} 
          />
          <p>Certificate tracking</p> 
        </header> {/* certificate-header */}
          
        <section className="certificate-tabs">
          <button className="certificate-tabs-all">
            <Circle_Primary style={{ color: "var(--white-color)", width: "20px", height: "20px" }} />
            <p>All</p>
          </button> {/* certificate-tabs-all */}

          <button className="certificate-tabs-complete">
            <Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
            <p>Complete</p>
          </button> {/* certificate-tabs-complete */}
          
          <button className="certificate-tabs-incomplete">
            <Circle_Primary style={{ color: "var(--primary-color)", width: "20px", height: "20px" }} />
            <p>Incomplete</p>
          </button> {/* certificate-tabs-incomplete */}
        </section> {/* certificate-tabs */}

        <section className="certificate-categories">
          <p>Name and position</p>
          <p>Medical</p>
          <p>Training</p>
          <p>Certificate</p>
          <p>Required</p>
        </section> {/* certificate-categories */}

        <section className="certificate-cards">
          <CertificateCard />
          <CertificateCard />
          <CertificateCard />
          
        </section> {/* certificate-cards */}
      </main> {/* certificate-box-in */}
      </div> {/* certificate-box */}
    </div>
  );
};

export default Certificate;
