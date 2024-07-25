import React, { useState, useEffect } from 'react';
import axios from "axios";

function EmployeeListJsonFile() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('employeedata.json'); // Replace with your JSON file path
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);

        }
        const data = await response.json();
        setEmployees(data);
      } catch (err) {
        setError(err.message);  
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading employees...</p>}
      {error && <p>Error: {error}</p>}
      {employees.length > 0 && (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              {/* Access employee properties here */}
              {employee.name} - {employee.email || 'N/A'} (Location: {employee.location}, Salary: {employee.salary})
            </li>
          ))}
        </ul>
      )}
      {employees.length === 0 && !isLoading && <p>No employees found.</p>}
    </div>
  );
}

export default EmployeeListJsonFile;
