import React from 'react';
import './certificateUserCard.css';


import Circle_Primary from '../../../assets/icons/Circle_Primary.svg?react';

const CertificateUserCard = () => {
  return (
    <main className="certificateUser-top-core-cards-card">
			<div className="certificateUser-top-core-cards-card-up">
				<div className="certificateUser-top-core-cards-card-up-header">
					<Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
					<header>Medical certificate</header>
				</div> {/* certificateUser-top-core-cards-card-up-header */}
				<div className="certificateUser-top-core-cards-card-up-expiry">
					<p className="certificateUser-top-core-cards-card-up-expiry-semibold">Expiration date</p>
					<button className="certificateUser-top-core-cards-card-up-expiry-btn">
						<div className="certificateUser-top-core-cards-card-up-expiry-btn-box">
							<Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
							<div className="certificateUser-top-core-cards-card-up-expiry-btn-box-text">
								<p className="certificateUser-top-core-cards-card-up-expiry-btn-box-text-light">Select a day</p>
								<p className="certificateUser-top-core-cards-card-up-expiry-btn-box-text-bold">FEB - 28 - 2025</p>
							</div> {/* certificateUser-top-core-cards-card-up-expiry-btn-box-text */}
						</div> {/* certificateUser-top-core-cards-card-up-expiry-btn-box */}
						<Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
					</button> {/* certificateUser-top-core-cards-card-up-expiry-btn */}
				</div> {/* certificateUser-top-core-cards-card-up-expiry */}
			</div> {/* certificateUser-top-core-cards-card-up */}
		
			<div className="certificateUser-top-core-cards-card-down">
				<div className="certificateUser-top-core-cards-card-down-text">
					<div className="certificateUser-top-core-cards-card-down-text-bold">
						<Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
						<p>Choose a file to upload</p>
					</div> {/* certificateUser-top-core-cards-card-down-text-bold */}
					<p className="certificateUser-top-core-cards-card-down-text-light">JPEG, PNG, and PDF formats</p>
				</div> {/* certificateUser-top-core-cards-card-down-text */}
		
				<div className="certificateUser-top-core-cards-card-down-btn">
					<Circle_Primary style={{ color: "var(--black-color-opacity-60)", width: "20px", height: "20px" }} />
					<p>Browse files</p>
				</div> {/* certificateUser-top-core-cards-card-down-btn */}
			</div> {/* certificateUser-top-core-cards-card-down */}
		</main> // certificateUser-top-core-cards-card
  );
};

export default CertificateUserCard;
