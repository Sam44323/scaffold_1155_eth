import React from "react";
import { CardGroup, Card, Row } from "react-bootstrap";
import styles from "../styles/pages/Explore.module.css";

const Explore: React.FC = () => {
  return (
    <div className={styles.ExploreContainer}>
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
          Explore
        </h1>
      </section>
      <CardGroup className={styles.GroupContainer}>
        <Row lg={2} className="g-4">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Card
              style={{
                margin: "1.7rem 0",
              }}
            >
              <Card.Img
                variant="top"
                style={{
                  height: "20rem",
                  width: "20rem",
                  margin: "0 auto",
                }}
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </CardGroup>
    </div>
  );
};

export default Explore;
