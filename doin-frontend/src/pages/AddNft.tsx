import React, { FormEvent } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/pages/AddNft.module.css";
import { PinataAxios, NftPortAxios } from "../helpers/axios";
import { toast } from "react-toastify";
import { useEthers } from "@usedapp/core";
import { useNavigate } from "react-router-dom";

const AddNft: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    image: "",
    description: "",
  });
  const navigate = useNavigate();

  const { account } = useEthers();

  const handleMinting = async (event: FormEvent) => {
    event.preventDefault();
    try {
      toast.info("Pining in progress...", {
        autoClose: false,
      });

      let response = await PinataAxios.post(
        "/pinJSONToIPFS",
        JSON.stringify(formData)
      );
      console.log("IPFS", response);
      toast.dismiss();
      toast.success("Pinned the metadata to IPFS!", { autoClose: 1000 });
      toast.info("NFT minting in progress...", {
        autoClose: false,
      });
      response = await NftPortAxios.post("/mints/customizable/batch", {
        chain: "rinkeby",
        contract_address: "0x9601741A28Db620a9cA192042f01462E3bcCC38A",
        tokens: [
          {
            metadata_uri: `${response.data.IpfsHash}`,
            mint_to_address: account!,
            token_id: Math.round(Math.random() * 1000),
            quantity: 1,
          },
        ],
      });
      console.log("NFT", response.data);
      toast.dismiss();
      toast.success("Success in minting NFT...", {
        autoClose: 1000,
      });
      setFormData({
        name: "",
        image: "",
        description: "",
      });
      navigate("/");
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
