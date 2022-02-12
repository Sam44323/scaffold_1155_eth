import React from "react";
import styles from "../styles/pages/Profile.module.css";
import { NftPortAxios } from "../helpers/axios";
import { useEthers } from "@usedapp/core";

const Profile: React.FC = () => {
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
    </div>
  );
};

export default Profile;
