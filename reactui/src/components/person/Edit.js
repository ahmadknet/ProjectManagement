import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState({ Name: "", Age: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const storedEntry = JSON.parse(localStorage.getItem(id));
    if (storedEntry) {
      setEntry(storedEntry);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(id, JSON.stringify(entry));
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={entry.Name}
          onChange={(e) => setEntry({ ...entry, Name: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          value={entry.Age}
          onChange={(e) => setEntry({ ...entry, Age: e.target.value })}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default Edit;