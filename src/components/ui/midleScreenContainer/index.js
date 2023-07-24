import React, { useId } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./style.module.scss";
import SocialMedia from "../../commons/socialMedia";
import { socialMediaData } from "../../data/socialMediaData";

export const MidleScreenContainer = ({ onClick }) => {
  const id = useId();

  return (
    <ParallaxLayer offset={0} speed={0.3} onClick={onClick}>
      <div className={styles.horiontalContainer}>
        <div className={styles.profileContainer}>
          <div className={styles.profilePicture} />
          <p>React Developer</p>
          <div className={styles.socialContainer}>
            {socialMediaData.map((element, index) => (
              <SocialMedia Icon={element.iconDark} data={element} key={id + index} />
            ))}
          </div>
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.titleCenter}>
            <pd>PROJECTS</pd>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default MidleScreenContainer;
