import React from 'react';
import { useState } from "react";
import './caseStudy.css';
import AddRecord from './modals/AddRecord';
import DeleteRecord from './modals/DeleteRecord';
import EditRecord from './modals/EditRecord';

import Notebook from '../caseStudy/assets/Notebook.png';
import Add from '../caseStudy/assets/Add.png';
import Edit from '../caseStudy/assets/Edit.png';
import Remove from '../caseStudy/assets/Remove.png';


const CaseStudy = () => {

  const [addRecord, setAddRecord] = useState(false);
  const [editRecord, setEditRecord] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(false);

  

  return (
    <div className="case">
      <div className="case-hero">
				<p className="case-hero-heading">CRUD operations in <br /> Web applications</p>
				<div className="case-hero-buttons">
					<form action="import.php" method="post" encType="multipart/form-data">
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
          {addRecord && <AddRecord closeAddRecord={setAddRecord}  />}
        </div>

        <div className="case-actions-edit">
          <div className="case-actions-edit-img" >
            <img src={Edit}alt="record icon" />
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
            <button className="delete-all-record">Delete all data</button>
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
              <tr className="case-records-table-data-row">
                <td>1</td>
                <td>dave</td>
                <td>1234</td>
                <td>developer</td>
                <td>january 21, 2025</td>
                <td>good</td>
              </tr>
              <tr className="case-records-table-data-row">
                <td>2</td>
                <td>alice</td>
                <td>5678</td>
                <td>designer</td>
                <td>january 22, 2025</td>
                <td>excellent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
};

export default CaseStudy;
