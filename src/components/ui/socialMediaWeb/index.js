import React, { useId } from "react";
import styles from "./style.module.scss";
import SocialMedia from "../../commons/socialMedia";
import { socialMediaData } from "../../data/socialMediaData";

const SocialMediaWeb = () => {
  const id = useId();
  return (
    <div className={styles.generalContainer}>
      {socialMediaData.map((element, index) => (
        <SocialMedia Icon={element.icon} key={id + index} data={element}/>
      ))}
    </div>
  );
};

export default SocialMediaWeb;
