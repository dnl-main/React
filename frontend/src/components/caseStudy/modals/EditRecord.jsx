import React from 'react';
import './editRecord.css';

const EditRecord = ({ closeEditRecord }) => {
  return (
    <div className="edit-record-overlay">
      <div className="edit-record-modal">
        <h1 className="edit-record-title">Edit Record</h1>

        <form method="post" className="edit-record-form">
          <label htmlFor="select_username" className="edit-record-label">Enter Username to Update:</label>
          <input 
            type="text" 
            id="select_username" 
            name="select_username" 
            required 
            className="edit-record-input"
          />

          <label htmlFor="new_username" className="edit-record-label">New Username (if changing):</label>
          <input 
            type="text" 
            id="new_username" 
            name="new_username" 
            className="edit-record-input"
          />

          <label htmlFor="new_password" className="edit-record-label">New Password:</label>
          <input 
            type="password" 
            id="new_password" 
            name="new_password" 
            required 
            className="edit-record-input"
          />

          <label htmlFor="new_role" className="edit-record-label">New Role:</label>
          <input 
            type="text" 
            id="new_role" 
            name="new_role" 
            required 
            className="edit-record-input"
          />

          <label htmlFor="new_remarks" className="edit-record-label">New Remarks:</label>
          <textarea 
            id="new_remarks" 
            name="new_remarks" 
            rows="4" 
            cols="50" 
            className="edit-record-input"
          ></textarea>

          <div className="edit-record-buttons">
            <button 
              type="button" 
              className="case-hero-buttons-submit"
              onClick={() => closeEditRecord(false)}>
              Cancel
            </button>
            <button 
              type="submit" 
              name="update" 
              className="case-hero-buttons-submit">
              Update Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRecord;
