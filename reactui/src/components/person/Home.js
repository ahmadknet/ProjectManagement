import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const entries = Object.keys(localStorage).map((key) =>
    JSON.parse(localStorage.getItem(key))
  );

  return (
    <div>
      <h2>Entries</h2>
      <Link to="/create">Add New Entry</Link>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            {entry.Name} - {entry.Age} 
            <Link to={`/edit/${entry.id}`}> Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;