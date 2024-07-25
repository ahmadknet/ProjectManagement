import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/person/Create";
import Edit from "./components/person/Edit";
import Home from "./components/person/Home";
import List from "./components/person/List";

function App() {
  return (
    <div className="App">
      <h1 className="geeks">CRUD App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;