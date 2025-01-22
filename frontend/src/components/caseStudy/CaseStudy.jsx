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
  const [records, setRecords] = useState([]); // State for storing records
  const [addRecord, setAddRecord] = useState(false);
  const [editRecord, setEditRecord] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(false);

  // Fetch records from PHP API
  useEffect(() => {
    axios
      .get("http://localhost/Concorde/backend/index.php") // Replace with the correct path to your PHP file
      .then((response) => {
        setRecords(response.data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching records:", error);
      });
  }, []);


  return (
    <div className="case">
      <div className="case-hero">
        <p className="case-hero-heading">CRUD operations in <br /> Web applications</p>
        <div className="case-hero-buttons">
          <form action="" method="post" encType="multipart/form-data">
            <button className="case-hero-buttons-submit" type="submit" name="submit">Import CSV</button>
            <input className="case-hero-buttons-upload" type="file" name="csvFile" id="csvFile" required />
          </form>
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
            {/* <button 
              type="button" 
              className="case-hero-buttons-submit"
              onClick={}>
              Delete All Data
            </button> */}
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
