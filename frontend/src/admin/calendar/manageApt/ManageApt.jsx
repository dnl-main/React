import React from 'react';
// import './manageApt.css';

import BookNow from './components/BookNow';
import Reschedule from './components/Reschedule';
import Cancel from './components/Cancel';

const ManageApt = () => {

// use this logic for overlay/modal

// const [addRecord, setAddRecord] = useState(false);

// once clicked the state would be true which would open the modal
// <button
//   className="open-add-record"
//   onClick={() => setAddRecord(true)}
// >
//   Add Record
// </button>
// {addRecord && <AddRecord closeAddRecord={setAddRecord} />}

  return (
    <div className="ManageApt">
      <h1>Manage Appointment</h1>

      <BookNow />
      <Reschedule />
      <Cancel />
    </div>
  );
};

export default ManageApt;

