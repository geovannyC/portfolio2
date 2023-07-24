import React from "react";
import styles from "./style.module.scss";

const BtnPresable = ({ text, action }) => {
  return (
    <div className={styles.container} onClick={() => action()}>
      <pl className={styles.header}>{text}</pl>
    </div>
  );
};

export default BtnPresable;
