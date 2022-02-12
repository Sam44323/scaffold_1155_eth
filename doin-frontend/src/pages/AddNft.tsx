import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/pages/AddNft.module.css";

const AddNft: React.FC = () => {
  return (
    <div className={styles.AddNftContainer}>
      <section className={styles.HeaderContainer}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "3.5rem",
            backgroundColor: "#000",
            padding: "1rem",
            color: "#fff",
          }}
        >
          Create
        </h1>
      </section>
      <Form className={styles.FormContainer}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Title</Form.Label>
          <Form.Control type="email" placeholder="Hakuna Matata" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="email" placeholder="https://someimage.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Description</Form.Label>
          <Form.Control type="email" placeholder="This is an nft..." />
        </Form.Group>
        <Button variant="success" type="submit">
          Mint
        </Button>
      </Form>
    </div>
  );
};

export default AddNft;
