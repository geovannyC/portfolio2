import React from "react";
import styles from "./style.module.scss";

export const BottomLineText = ({ text }) => {
  return (
    <div className={styles.container}>
      <pl className={styles.text}>{text}</pl>
    </div>
  );
};

export default BottomLineText;
