import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import TitleTrail from "../titleTrail";
import styles from "./style.module.scss";
import SocialMediaWeb from "../socialMediaWeb";

const Welcomer = ({ onClick, offset }) => {
  return (
    <ParallaxLayer offset={offset} speed={2} onClick={onClick}>
      <div className={styles.container}>
        <div className={styles.textConmtainer}>
          <TitleTrail open array={["Hi,", "{user.name}"]} />
          <p>{"I’m Geovanny a Software Developer based in Ecuador"}</p>
        </div>
        <SocialMediaWeb />
      </div>
    </ParallaxLayer>
  );
};

export default Welcomer;
