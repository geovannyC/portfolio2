import React from "react";
import styles from "./style.module.scss";

const SocialMedia = ({ Icon, data }) => {
  return (
    <div
      className={styles.socialMedia}
      onClick={() => data.link && window.open(data.link)}
    >
      <img src={Icon} />
    </div>
  );
};

export default SocialMedia;
