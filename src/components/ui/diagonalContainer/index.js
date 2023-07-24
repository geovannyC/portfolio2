import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import styles from "./style.module.scss";

const DiagonalContainer = ({ gradient, onClick }) => {
  return (
    <ParallaxLayer offset={0.45} speed={0.3} onClick={onClick}>
      <div className={styles.backHideContainer}>
        <div className={`${styles.slopeEnd} ${styles[gradient]}`}>
          <div className={styles.twoRowsContainer}>
            <div className={styles.diagonalContent}>
              <div className={styles.primaryDiagonalContainer}>
                <div className={styles.titleDiagonalContent}>
                  <pd>PROJECTS</pd>
                </div>
              </div>
            </div>
            <div className={styles.diagonalContent}>
              <div className={styles.secondaryDiagonalContainer}>
                <div className={styles.profilePicture} />
                <p>React Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};
export default DiagonalContainer;
