import React from "react";
import styles from "./BreedsLayout.module.css";
const BreedsLayout = ({ imageUrl, breed }) => {
  return (
    <div className={styles.breedImage}>
      <img
        src={`${imageUrl}`}
        alt={`${breed}-image`}
        className={styles.image}
      />
    </div>
  );
};

export default BreedsLayout;
