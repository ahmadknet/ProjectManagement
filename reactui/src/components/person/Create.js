import React, { useState } from "react";
import { Button, Form, Container ,Control} from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { id: uuid(), Name: name, Age: age };
    localStorage.setItem(newEntry.id, JSON.stringify(newEntry));
    navigate("/");
  };

  return (
    <Container className="mt-5">
      <h2>Create New Entry</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default Create;