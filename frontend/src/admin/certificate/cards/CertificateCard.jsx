import React from 'react';
import './certificateCard.css';

import Circle_Primary from '../../../assets/icons/Circle_Primary.svg?react';
import Calendar_Add from '../../../assets/icons/Calendar_Add.svg?react';
import Notebook from '../../../assets/icons/Notebook.svg?react';
import Bell from '../../../assets/icons/Bell.svg?react';
import Note_Search from '../../../assets/icons/Note_Search.svg?react';

const CertificateCard = () => {
  return (
<main className="certificate-cards-card">
            <section className="certificate-cards-card-indicator">
              {/* <p>bg</p> */}
            </section> {/* certificate-cards-card-indicator */}

            <section className="certificate-cards-card-profile">
              <Circle_Primary className="certificate-cards-card-profile-svg" />
              <div className="certificate-cards-card-profile-info">
                <p className="certificate-cards-card-profile-info-text">Juan Dela R. Cruz</p>
                <div className="certificate-cards-card-profile-info-job">
                  <Circle_Primary style={{ color: "var(--primary-color)", width: "32px", height: "32px" }} />
                  <p>Chief Engineer</p>
                </div> {/* certificate-cards-card-profile-info-job */}
              </div> {/* certificate-cards-card-profile-info */}
            </section> {/* certificate-cards-card-profile */}

            <section className="certificate-cards-card-certificates">
              <div className="certificate-cards-card-certificates-1">
                <div className="certificate-cards-card-certificates-1-text">
                  <p className="certificate-cards-card-certificates-1-text-sub">As of now</p>
                  <p className="certificate-cards-card-certificates-1-text-heading">No upload</p>
                </div> {/* certificate-cards-card-certificates-1-text */}
                <button className="certificate-cards-card-certificates-1-button">
                  <p>Notify upload</p>
                  <div className="certificate-cards-card-certificates-1-button-icon">
                    <Bell 
                      style={{ 
                        color: "var(--primary-color)", 
                        width: "1.8vw", 
                        height: "3.6vh", 
                        "--stroke-width": "4px"
                      }} 
                    />
                  </div> {/* certificate-cards-card-certificates-1-button-icon */}
                </button> {/* certificate-cards-card-certificates-1-button */}
              </div> {/* certificate-cards-card-certificates-1 */}

              <div className="certificate-cards-card-certificates-2">
                <div className="certificate-cards-card-certificates-2-text">
                  <p className="certificate-cards-card-certificates-2-text-sub">Expires at</p>
                  <p className="certificate-cards-card-certificates-2-text-heading">FEB-28-2025</p>
                </div> {/* certificate-cards-card-certificates-2-text */}
                <button className="certificate-cards-card-certificates-2-button">
                  <p>Java NCII</p>
                  <div className="certificate-cards-card-certificates-2-button-icon">
                    <Note_Search 
                      style={{ 
                        color: "var(--black-color)", 
                        width: "1.8vw", 
                        height: "3.6vh", 
                        "--stroke-width": "4px" 
                      }} 
                    />
                  </div> {/* certificate-cards-card-certificates-2-button-icon */}
                </button> {/* certificate-cards-card-certificates-2-button */}
              </div> {/* certificate-cards-card-certificates-2 */}

              <div className="certificate-cards-card-certificates-3">
                <div className="certificate-cards-card-certificates-3-text">
                  <p className="certificate-cards-card-certificates-3-text-sub">Expires at</p>
                  <p className="certificate-cards-card-certificates-3-text-heading">FEB-28-2025</p>
                </div> {/* certificate-cards-card-certificates-3-text */}
                <button className="certificate-cards-card-certificates-3-button">
                  <p>Java NCII</p>
                  <div className="certificate-cards-card-certificates-3-button-icon">
                    <Note_Search 
                      style={{ 
                        color: "var(--black-color)", 
                        width: "1.8vw", 
                        height: "3.6vh",  
                        "--stroke-width": "4px" 
                      }} 
                    />
                  </div> {/* certificate-cards-card-certificates-3-button-icon */}
                </button> {/* certificate-cards-card-certificates-3-button */}
              </div> {/* certificate-cards-card-certificates-3 */}

              <div className="certificate-cards-card-certificates-4">
                <div className="certificate-cards-card-certificates-4-text">
                  <p className="certificate-cards-card-certificates-4-text-sub">Expires at</p>
                  <p className="certificate-cards-card-certificates-4-text-heading">FEB-28-2025</p>
                </div> {/* certificate-cards-card-certificates-4-text */}
                <button className="certificate-cards-card-certificates-4-button">
                  <p>Java NCII </p>
                  <div className="certificate-cards-card-certificates-4-button-icon">
                    <Note_Search 
                      style={{ 
                        color: "var(--black-color)", 
                        width: "1.8vw", 
                        height: "3.6vh", 
                        "--stroke-width": "4px" 
                      }} 
                    />
                  </div> {/* certificate-cards-card-certificates-4-button-icon */}
                </button> {/* certificate-cards-card-certificates-4-button */}
              </div> {/* certificate-cards-card-certificates-4 */}
            </section> {/* certificate-cards-card-certificates */}

            <section className="certificate-cards-card-button">
              <button>
                <Calendar_Add className="certificate-cards-card-button-svg" />
              </button>
            </section> {/* certificate-cards-card-button */}
          </main> 
  );
};

export default CertificateCard;
