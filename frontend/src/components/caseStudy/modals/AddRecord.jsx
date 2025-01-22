import React, { useState, useEffect } from 'react';  // Importing useState and useEffect hooks
import axios from 'axios'; // Importing Axios for API requests
import './addRecord.css';

const AddRecord = ({ closeAddRecord }) => {

  const [newUsername, setNewUsername] = useState('');  // Initial state for newUsername
  const [newPassword, setNewPassword] = useState('');  // Initial state for newPassword
  const [newRole, setNewRole] = useState('');  // Initial state for newRole
  const [newRemarks, setNewRemarks] = useState('');  // Initial state for newRemarks
  const [message, setMessage] = useState('');  // Initial state for message (success/error)
  const [fetchedRecords, setFetchedRecords] = useState([]);  // To hold fetched records

  // Fetch records from the PHP API when the component is first mounted
  useEffect(() => {
    fetchRecords(); // Fetch records on initial load
  }, []); // Empty array ensures this runs only once on mount

  // Fetch records function
  const fetchRecords = async () => {
    try {
      const response = await axios.get("http://localhost/Concorde/backend/index.php"); // Correct API path
      setFetchedRecords(response.data); // Set fetched records in the state
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  // Handle form submission with Axios
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

      // Check if the record was added successfully
      if (response.data.status === 1) {
        setMessage('New record added successfully!');
        fetchRecords(); // Refresh records after adding a new one
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
            onChange={(e) => setNewUsername(e.target.value)}  // Update state on change
          />

          <label htmlFor="new_password" className="add_record-label">Password:</label>
          <input 
            type="password" 
            id="new_password" 
            name="new_password" 
            required 
            className="add_record-input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}  // Update state on change
          />

          <label htmlFor="new_role" className="add_record-label">Role:</label>
          <input 
            type="text" 
            id="new_role" 
            name="new_role" 
            required 
            className="add_record-input"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}  // Update state on change
          />

          <label htmlFor="new_remarks" className="add_record-label">Remarks:</label>
          <textarea 
            id="new_remarks" 
            name="new_remarks"
            rows="4" 
            cols="50"
            className="add_record-textarea"
            value={newRemarks}
            onChange={(e) => setNewRemarks(e.target.value)}  // Update state on change
          ></textarea>

          {message && <div className="message">{message}</div>}  {/* Show message (success/error) */}

          <div className="add_record-buttons">
            <button 
              type="button" 
              className="add_record-buttons-cancel"
              onClick={() => closeAddRecord(false)}  // Close the form when canceled
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
