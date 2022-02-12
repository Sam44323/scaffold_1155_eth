import React, { FormEvent } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/pages/AddNft.module.css";
import { PinataAxios, NftPortAxios } from "../helpers/axios";
import { toast } from "react-toastify";

const AddNft: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    image: "",
    description: "",
  });

  const handleMinting = async (event: FormEvent) => {
    event.preventDefault();
    try {
      toast.info("Pining in progress...", {
        autoClose: false,
      });

      const response = await PinataAxios.post(
        "/pinJSONToIPFS",
        JSON.stringify(formData)
      );
      console.log("Response", response);
      toast.dismiss();
      toast.info("Minting in progress...", {
        autoClose: false,
      });
      toast.success("Pinned the metadata to IPFS!", { autoClose: 1000 });
      toast.info("NFT minting in progress...", {
        autoClose: false,
      });
      setFormData({
        name: "",
        image: "",
        description: "",
      });
    } catch (err) {
      console.log(err);
      toast.error("Error while pinning the metadata for NFT!");
      setFormData({
        name: "",
        image: "",
        description: "",
      });
    }
  };

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
          <Form.Control
            type="text"
            placeholder="Hakuna Matata"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://someimage.com"
            value={formData.image}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                image: e.target.value,
              }))
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="This is an nft..."
            value={formData.description}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          />
        </Form.Group>
        <Button variant="success" type="submit" onClick={handleMinting}>
          Mint
        </Button>
      </Form>
    </div>
  );
};

export default AddNft;
