import React from "react";
import BtnPresable from "../../commons/btnPresable";
import styles from "./style.module.scss";

const HeaderProject = ({ element }) => {
  return (
    <div className={styles.container}>
      <BtnPresable
        text={element.link ? "View Project" : ""}
        action={() => element.link && window.open(element.link)}
      />
    </div>
  );
};

export default HeaderProject;
