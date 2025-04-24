import React from 'react';
import './certificateUser.css';

import SidebarUser from '../sidebar/SidebarUser';
import NavbarUser from '../navbar/NavbarUser';

import CertificateUserCard from './certificateCard/CertificateUserCard';

import Circle_Primary from '../../assets/icons/Circle_Primary.svg?react';

const CertificateUser = () => {
  return (
    <div className="certificateUser">
      <NavbarUser />
      <SidebarUser />
    <div className="certificateUser-box">
    <main className="certificateUser-box-in">
    
      <div className="certificateUser-top">
        <div className="certificateUser-top-header">
          <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
          <header>Certificate</header>
        </div> {/* certificateUser-top-header */}

        <div className="certificateUser-top-core">
          <p className="certificateUser-top-core-medium">List of certificates</p>
          <div className="certificateUser-top-core-cards">
            <CertificateUserCard />
            <CertificateUserCard />
            <CertificateUserCard />
            <CertificateUserCard />
          </div> {/* certificateUser-top-core-cards */}
        </div> {/* certificateUser-top-core */}

        <div className="certificateUser-top-btn">
          <button className="certificateUser-top-btn-button">
            <Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
            <p>Upload More</p>
          </button> {/* certificateUser-top-btn-button */}
        </div> {/* certificateUser-top-btn */}
      </div> {/* certificateUser-top */}

      <div className="certificateUser-bot">
        <p>bot</p>
      </div> {/* certificateUser-bot */}
    </main> {/* certificateUser-box-in */}
    </div> {/* certificateUser-box */}
    </div>
  );
};

export default CertificateUser;
