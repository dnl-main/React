import React from 'react';
import './deleteRecord.css';

const DeleteRecord = ({ closeDeleteRecord }) => {
  return (
    <div className="delete-record-overlay">
      <div className="delete-record-modal">
        <h1 className="delete-record-title">Delete Record</h1>

        <form method="post" className="delete-record-form">
          <label htmlFor="delete_username" className="delete-record-label">Username:</label>
          <input 
            type="text" 
            id="delete_username" 
            name="delete_username" 
            required 
            className="delete-record-input"
          />

          <div className="delete-record-buttons">
            
            
            <button 
              type="button" 
              className="case-hero-buttons-submit"
              onClick={() => closeDeleteRecord(false)}>
              Cancel
            </button>

            <button 
              type="submit" 
              name="delete" 
              className="case-hero-buttons-submit">
              Delete Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteRecord;
