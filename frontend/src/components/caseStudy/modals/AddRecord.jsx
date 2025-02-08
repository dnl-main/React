import React, { useState, useEffect } from 'react';  
import axios from 'axios';
import './addRecord.css';

const AddRecord = ({ closeAddRecord }) => {

  const [newUsername, setNewUsername] = useState('');  
  const [newPassword, setNewPassword] = useState(''); 
  const [newRole, setNewRole] = useState('');  
  const [newRemarks, setNewRemarks] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [fetchedRecords, setFetchedRecords] = useState([]); 
  
  useEffect(() => {
    fetchRecords(); 
  }, []);


  const fetchRecords = async () => {
    try {
      const response = await axios.get("http://localhost/Concorde/backend/index.php");
      setFetchedRecords(response.data); 
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      new_username: newUsername,
      new_password: newPassword,
      new_role: newRole,
      new_remarks: newRemarks,
    };

    try {
      const response = await axios.post('http://localhost/Concorde/backend/index.php', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      
      if (response.data.status === 1) {
        setMessage('New record added successfully!');
        fetchRecords(); 
      } else {
        setMessage('Error adding record: ' + response.data.message);
      }
    } catch (error) {
      console.error("There was an error!", error);
      setMessage('An error occurred while adding the record.');
    }
  };

  return (
    <div className="add_record-overlay">
      <div className="add_record-overlay-modal">
        <h1 className="add_record-overlay-modal-heading">Add Record</h1>

        <form onSubmit={handleSubmit} className="add_record-form">
          <label htmlFor="new_username" className="add_record-label">Username:</label>
          <input 
            type="text" 
            id="new_username" 
            name="new_username" 
            required 
            className="add_record-input"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}  
          />

          <label htmlFor="new_password" className="add_record-label">Password:</label>
          <input 
            type="password" 
            id="new_password" 
            name="new_password" 
            required 
            className="add_record-input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}  
          />

          <label htmlFor="new_role" className="add_record-label">Role:</label>
          <input 
            type="text" 
            id="new_role" 
            name="new_role" 
            required 
            className="add_record-input"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)} 
          />

          <label htmlFor="new_remarks" className="add_record-label">Remarks:</label>
          <textarea 
            id="new_remarks" 
            name="new_remarks"
            rows="4" 
            cols="50"
            className="add_record-textarea"
            value={newRemarks}
            onChange={(e) => setNewRemarks(e.target.value)}  
          ></textarea>

          {message && <div className="message">{message}</div>}

          <div className="add_record-buttons">
            <button 
              type="button" 
              className="add_record-buttons-cancel"
              onClick={() => closeAddRecord(false)} 
            >
              Cancel
            </button>

            <button 
              type="submit" 
              name="add" 
              className="add_record-buttons-submit"
            >
              Add New Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecord;
