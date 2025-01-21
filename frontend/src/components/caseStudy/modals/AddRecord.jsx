import React from 'react';
import './addRecord.css';

const AddRecord = ({ closeAddRecord }) => {
  return (
    <div className="add-record-overlay">
      <div className="add-record-modal">
        <h1 className="add-record-title">Add Record</h1>

        <form method="post" className="add-record-form">
          <label htmlFor="new_username" className="add-record-label">Username:</label>
          <input 
            type="text" 
            id="new_username" 
            name="new_username" 
            required 
            className="add-record-input"
          />

          <label htmlFor="new_password" className="add-record-label">Password:</label>
          <input 
            type="password" 
            id="new_password" 
            name="new_password" 
            required 
            className="add-record-input"
          />

          <label htmlFor="new_role" className="add-record-label">Role:</label>
          <input 
            type="text" 
            id="new_role" 
            name="new_role" 
            required 
            className="add-record-input"
          />

          <label htmlFor="new_remarks" className="add-record-label">Remarks:</label>
          <textarea 
            id="new_remarks" 
            name="new_remarks"
            rows="4" 
            cols="50"
            className="add-record-textarea"
          ></textarea>

          <div className="add-record-buttons">

            <button 
              type="button" 
              className="case-hero-buttons-submit"
              onClick={() => closeAddRecord(false)}>
              Cancel
            </button>

            <button 
              type="submit" 
              name="add" 
              className="case-hero-buttons-submit">
              Add New Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecord;
