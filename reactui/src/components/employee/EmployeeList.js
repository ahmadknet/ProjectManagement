import React from 'react';
import employees from './employeesarr'; // Assuming employees data is imported

const EmployeeList = () => {
  return (
    <div>
      {employees.map((emp) => (
        <div key={emp.Id}>
          <p>Employee ID: {emp.Id}</p>
          <p>Name: {emp.Name}</p>
          <p>Location: {emp.Location}</p>
          <p>Salary: {emp.Salary}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
