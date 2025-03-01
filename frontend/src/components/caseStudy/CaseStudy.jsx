import React, { useState, useEffect } from 'react';
import axios from "axios";
import './caseStudy.css';
import AddRecord from './modals/AddRecord';
import DeleteRecord from './modals/DeleteRecord';
import EditRecord from './modals/EditRecord';

import Notebook from '../caseStudy/assets/Notebook.png';
import Add from '../caseStudy/assets/Add.png';
import Edit from '../caseStudy/assets/Edit.png';
import Remove from '../caseStudy/assets/Remove.png';

const CaseStudy = () => {
  const [records, setRecords] = useState([]); 
  const [addRecord, setAddRecord] = useState(false);
  const [editRecord, setEditRecord] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); 
  const [message, setMessage] = useState('');


  useEffect(() => {
    axios
      .get("http://localhost/Concorde/backend/index.php") 
      .then((response) => {
        setRecords(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching records:", error);
      });
  }, []);


const handleFileChange = (event) => {
  setSelectedFile(event.target.files[0]); 
};


const handleFileUpload = async (e) => {
  e.preventDefault();

  if (!selectedFile) {
    setMessage('Please select a file to upload.');
    return;
  }

  try {
    const formData = new FormData();
    formData.append('csvFile', selectedFile); 
    formData.append('submit', true);

    const response = await axios.post('http://localhost/Concorde/backend/index.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    });

    if (response.status === 200) {
      setMessage('File uploaded successfully.');
    } else {
      setMessage('File upload failed.');
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    setMessage('An error occurred while uploading the file.');
  }
};





const handleDeleteAll = async () => {
  try {
    
    const response = await axios.post(
      'http://localhost/Concorde/backend/index.php',
      new URLSearchParams({ delete_all: 'true' }), 
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    
    if (response.data.status === 1) {
      setMessage('All records have been deleted successfully.');
      setRecords([]); 
    } else {
      setMessage('Error deleting records: ' + response.data.message);
    }
  } catch (error) {
    console.error('Error deleting all records:', error);
    setMessage('An error occurred while deleting records.');
  }
};







  return (
    <div className="case">
      <div className="case-hero">
        <p className="case-hero-heading">CRUD operations in <br /> Web applications</p>
        <div className="case-hero-buttons">
          
        <form onSubmit={handleFileUpload}>
          <button className="case-hero-buttons-submit" type="submit" name="submit">
            Import CSV
          </button>
          <input
            className="case-hero-buttons-upload"
            type="file"
            name="csvFile"
            id="csvFile"
            onChange={handleFileChange} 
            required
          />
        </form>
        {message && <p>{message}</p>}
        </div>
      </div>

      <div className="case-actions">
        <div className="case-actions-add">
          <div className="case-actions-add-img">
            <img src={Add} alt="record icon" />
          </div>
          <button
            className="open-add-record"
            onClick={() => setAddRecord(true)}
          >
            Add Record
          </button>
          {addRecord && <AddRecord closeAddRecord={setAddRecord} />}
        </div>

        <div className="case-actions-edit">
          <div className="case-actions-edit-img">
            <img src={Edit} alt="record icon" />
          </div>
          <button
            className="open-edit-record"
            onClick={() => setEditRecord(true)}
          >
            Edit Record
          </button>
          {editRecord && <EditRecord closeEditRecord={setEditRecord} />}
        </div>

        <div className="case-actions-delete">
          <div className="case-actions-delete-img">
            <img src={Remove} alt="record icon" />
          </div>
          <button
            className="open-delete-record"
            onClick={() => setDeleteRecord(true)}
          >
            Delete Record
          </button>
          {deleteRecord && <DeleteRecord closeDeleteRecord={setDeleteRecord} />}
        </div>
      </div>

      <div className="case-records">
        <div className="case-records-header">
          <div className="case-records-header-heading">
            <img src={Notebook} alt="record icon" />
            <p className="case-records-header-heading-text">All records</p>
          </div>
          <div className="case-records-header-button">
            
            
            
            
          <button 
  type="button" 
  className="case-hero-buttons-submit"
  onClick={handleDeleteAll}
>
  Delete All Data
</button>


      {message && <p>{message}</p>}









          </div>
        </div>

        <div className="case-records-table">
          <table className="case-records-table-data">
            <thead>
              <tr className="case-records-table-data-header">
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>Role</th>
                <th>Created Date</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id} className="case-records-table-data-row">
                  <td>{record.id}</td>
                  <td>{record.username}</td>
                  <td>{record.password}</td>
                  <td>{record.role}</td>
                  <td>{record.CreatedDate}</td>
                  <td>{record.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
