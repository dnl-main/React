import React from 'react';
import './certificateUser.css';

const CertificateUser = () => {
  return (
    <div className="container">
      <h1>Certificate</h1>

      <div className="certificates">
        
        <div className="certificate-card">
          <h3>Medical Certificate</h3>
          <label htmlFor="expiration-date-1">Expiration Date</label>
          <input type="date" id="expiration-date-1" />
          <label htmlFor="file-upload-1">Choose a file to upload</label>
          <input type="file" id="file-upload-1" accept=".jpg, .jpeg, .png, .pdf" />
          <button>Browse Files</button>
        </div>

        <div className="certificate-card">
          <h3>Medical Certificate</h3>
          <label htmlFor="expiration-date-2">Expiration Date</label>
          <input type="date" id="expiration-date-2" />
          <label htmlFor="file-upload-2">Choose a file to upload</label>
          <input type="file" id="file-upload-2" accept=".jpg, .jpeg, .png, .pdf" />
          <button>Replace Files</button>
        </div>

        <div className="certificate-card">
          <h3>Medical Certificate</h3>
          <label htmlFor="expiration-date-3">Expiration Date</label>
          <input type="date" id="expiration-date-3" />
          <label htmlFor="file-upload-3">Choose a file to upload</label>
          <input type="file" id="file-upload-3" accept=".jpg, .jpeg, .png, .pdf" />
          <button>Browse Files</button>
        </div>

        <div className="certificate-card">
          <h3>Medical Certificate</h3>
          <label htmlFor="expiration-date-4">Expiration Date</label>
          <input type="date" id="expiration-date-4" />
          <label htmlFor="file-upload-4">Choose a file to upload</label>
          <input type="file" id="file-upload-4" accept=".jpg, .jpeg, .png, .pdf" />
          <button>Browse Files</button>
        </div>
      </div>

      <div className="upload-more">
        <button>+ Upload More</button>
      </div>

      <h2>Uploaded Certificates</h2>

      <div className="uploaded-certificates">
        <div className="certificate">
          <div className="certificate-info">
            <p><strong>Medical Certificate</strong></p>
            <div className="date-expiration-container">
              <div className="date-card">
                <p><strong>Uploaded at:</strong> December 23, 2024</p>
              </div>
              <div className="expiration-card">
                <p><strong>Expires at:</strong> January 28, 2025</p>
              </div>
            </div>
          </div>
          <div className="status">
            <span>Approved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateUser;
