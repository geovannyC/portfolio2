import React from "react";
import BtnPresable from "../../commons/btnPresable";
import styles from "./style.module.scss";

const HeaderProject = ({text}) => {
  return (
    <div className={styles.container}>
      <BtnPresable
        text={text}
        action={() => console.log("presionado")}
      />
    </div>
  );
};

export default HeaderProject;
