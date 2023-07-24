import React, { useId, useState } from "react";
import styles from "./style.module.scss";
import Trail from "../../commons/trail";

const TitleTrail = ({ open, array = [], parentStyle }) => {
  const id = useId()
  return (
    <div className={styles.container}>
      <Trail open={open} parentStyle={parentStyle}>
        {array.map((word, index) => (
          <div key={id+index} className={styles.titleContainer}>
            <span >{word}</span>
          </div>
        ))}
      </Trail>
    </div>
  );
};
export default TitleTrail;
