import React from "react";
import styles from "../styles/pages/Profile.module.css";
import { NftPortAxios } from "../helpers/axios";
import { useEthers } from "@usedapp/core";
import axios from "axios";
import { CardGroup, Card, Row } from "react-bootstrap";

const Profile: React.FC = () => {
  const { account } = useEthers();
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await NftPortAxios.get(`/me/mints`);
      console.log(response.data);
      const data = await Promise.all(
        response.data.minted_nfts.map(async (mintedNft: any) => {
          try {
            const response = await axios.get(
              `https://gateway.pinata.cloud/ipfs/${mintedNft.metadata_uri}`
            );
            console.log(JSON.parse(Object.keys(response.data)[0]));
            return Array.isArray(response.data)
              ? {
                  name: "",
                  description: "",
                  image: "",
                }
              : JSON.parse(Object.keys(response.data)[0]);
          } catch (err) {
            return {
              name: "Demo",
              description: "Description for demo",
              image:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            };
          }
        })
      );
      setData(data);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className={styles.ProfileContainer}>
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
          Profile
        </h1>
      </section>
      {data?.length! > 0 ? (
        <CardGroup className={styles.GroupContainer}>
          <Row lg={2} className="g-4">
            {data?.map((item) => {
              return (
                <Card
                  style={{
                    margin: "1.7rem 0px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    style={{
                      height: "20rem",
                      width: "20rem",
                      margin: "0 auto",
                    }}
                    src={item.image}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </CardGroup>
      ) : (
        <h1>You have not NFT minted!</h1>
      )}
    </div>
  );
};

export default Profile;
