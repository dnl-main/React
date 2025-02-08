import React, { useState } from 'react';
import './deleteRecord.css';
import axios from 'axios';

const DeleteRecord = ({ closeDeleteRecord }) => {
  const [deleteUsername, setDeleteUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    const data = {
      delete_username: deleteUsername,
      delete: true,
    };

    try {
      const response = await axios.post('http://localhost/Concorde/backend/index.php', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.data.status === 1) {
        setMessage('Record deleted successfully!');
      } else {
        setMessage('Error: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error deleting record:', error);
      setMessage('An error occurred while deleting the record.');
    }
  };

  return (
    <div className="delete-record-overlay">
      <div className="delete-record-modal">
        <h1 className="delete-record-title">Delete Record</h1>

        <form onSubmit={handleDelete} className="delete-record-form">
          <label htmlFor="delete_username" className="delete-record-label">Username:</label>
          <input
            type="text"
            id="delete_username"
            name="delete_username"
            required
            className="delete-record-input"
            value={deleteUsername}
            onChange={(e) => setDeleteUsername(e.target.value)}
          />

          {message && <div className="message">{message}</div>}

          <div className="delete-record-buttons">
            <button
              type="button"
              className="case-hero-buttons-submit"
              onClick={() => closeDeleteRecord(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="case-hero-buttons-submit"
            >
              Delete Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteRecord;
