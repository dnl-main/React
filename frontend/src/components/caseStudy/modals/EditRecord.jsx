import React, { useState } from 'react'; // Import useState here
import './editRecord.css';
import axios from 'axios'; // Ensure axios is imported

const EditRecord = ({ closeEditRecord }) => {
  const [selectUsername, setSelectUsername] = useState(''); // Username to update
  const [newUsername, setNewUsername] = useState(''); // Optional new username
  const [newPassword, setNewPassword] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newRemarks, setNewRemarks] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission for updating a record
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send
    const data = {
      select_username: selectUsername,
      new_username: newUsername,
      new_password: newPassword,
      new_role: newRole,
      new_remarks: newRemarks,
      update: 'true', // Ensure 'update' is sent as a string to trigger the PHP 'isset'
    };

    try {
      // Send data via POST request to PHP backend
      const response = await axios.post('http://localhost/Concorde/backend/index.php', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      // Check the response status and message
      if (response.data.status === 1) {
        setMessage('Record updated successfully!');
      } else {
        setMessage('Error updating record: ' + response.data.message);
      }
    } catch (error) {
      console.error('There was an error!', error);
      setMessage('An error occurred while updating the record.');
    }
  };

  return (
    <div className="edit-record-overlay">
      <div className="edit-record-modal">
        <h1 className="edit-record-title">Edit Record</h1>

        <form onSubmit={handleSubmit} className="edit-record-form">
          <label htmlFor="select_username" className="edit-record-label">Enter Username to Update:</label>
          <input
            type="text"
            id="select_username"
            name="select_username"
            required
            className="edit-record-input"
            value={selectUsername}
            onChange={(e) => setSelectUsername(e.target.value)}
          />

          <label htmlFor="new_username" className="edit-record-label">New Username (if changing):</label>
          <input
            type="text"
            id="new_username"
            name="new_username"
            className="edit-record-input"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />

          <label htmlFor="new_password" className="edit-record-label">New Password:</label>
          <input
            type="password"
            id="new_password"
            name="new_password"
            required
            className="edit-record-input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <label htmlFor="new_role" className="edit-record-label">New Role:</label>
          <input
            type="text"
            id="new_role"
            name="new_role"
            required
            className="edit-record-input"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          />

          <label htmlFor="new_remarks" className="edit-record-label">New Remarks:</label>
          <textarea
            id="new_remarks"
            name="new_remarks"
            rows="4"
            cols="50"
            className="edit-record-input"
            value={newRemarks}
            onChange={(e) => setNewRemarks(e.target.value)}
          ></textarea>

          {message && <div className="message">{message}</div>} {/* Show success/error message */}

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
