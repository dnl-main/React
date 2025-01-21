import React from 'react';

import { useState } from "react";

const Testt = () => {

	
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  return (
<div>
<body>
{errorMessage && <p className="error">{errorMessage}</p>}
{successMessage && <p className="success">{successMessage}</p>}

<h3>Add New Record</h3>
<form method="post">
	<label htmlFor="new_username">Username:</label>
	<input type="text" id="new_username" name="new_username" required />
	<br />
	<br />

	<label htmlFor="new_password">Password:</label>
	<input type="password" id="new_password" name="new_password" required />
	<br />
	<br />

	<label htmlFor="new_role">Role:</label>
	<input type="text" id="new_role" name="new_role" required />
	<br />
	<br />

	<label htmlFor="new_remarks">Remarks:</label>
	<textarea id="new_remarks" name="new_remarks" rows="4" cols="50"></textarea>
	<br />
	<br />

	<button type="submit" name="add">Add New Record</button>
</form>

<h3>Update Record</h3>
<form method="post">
	<label htmlFor="select_username">Enter Username to Update:</label>
	<input type="text" id="select_username" name="select_username" required />
	<br />
	<br />

	<label htmlFor="new_username">New Username:</label>
	<input type="text" id="new_username" name="new_username" />
	<br />
	<br />

	<label htmlFor="new_password">New Password:</label>
	<input type="password" id="new_password" name="new_password" required />
	<br />
	<br />

	<label htmlFor="new_role">New Role:</label>
	<input type="text" id="new_role" name="new_role" required />
	<br />
	<br />

	<label htmlFor="new_remarks">New Remarks:</label>
	<textarea id="new_remarks" name="new_remarks" rows="4" cols="50"></textarea>
	<br />
	<br />

	<button type="submit" name="update">Update Record</button>
</form>

<h3>Delete Record</h3>
<form method="post">
	<label htmlFor="delete_username">Username:</label>
	<input type="text" id="delete_username" name="delete_username" required />
	<br />
	<br />
	<button type="submit" name="delete">Delete Record</button>
</form>

<h3>Delete All Records</h3>
<form method="post">
	<button
		type="submit"
		name="delete_all"
		onClick={() =>
			window.confirm(
				"Are you sure you want to delete all records? This action cannot be undone."
			)
		}
	>
		Delete All Records
	</button>
</form>

<h3>Upload CSV</h3>
<form action="import.php" method="post" encType="multipart/form-data">
	<label htmlFor="csvFile">Choose CSV File:</label>
	<input type="file" name="csvFile" id="csvFile" required />
	<button type="submit" name="submit">Import CSV</button>
</form>

<h3>View Table</h3>
<form action="View.php" method="post">
	<button name="viewRecords">View Records</button>
</form>

<h3>Exit</h3>
<form method="post">
	<button name="exit">Exit</button>
</form>
</body>
</div>
  );
};

export default Testt;
