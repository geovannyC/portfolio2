import React, { useId } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { skills } from "./data";
import styles from "./style.module.scss";

const Skils = ({ offset, onClick }) => {
  const id = useId();
  return (
    <ParallaxLayer offset={offset} speed={0.6} onClick={() => onClick(6)}>
      <div className={styles.generalContainer}>
        <div className={styles.titleDiagonalContent}>
          <pd>SKILLS</pd>
        </div>
        <div className={styles.tileContainers}>
          {skills.map((elements, index) => (
            <div className={styles.tile} key={id + index}>
              <div className={styles.backTile} />
              <div
                className={`${styles.containerAnimated} ${styles.secondary}`}
              >
                {elements.map((element, index2) => (
                  <h4
                    key={id + index2}
                  >{`${element.time} - ${element.skill}`}</h4>
                ))}
              </div>
              <div className={`${styles.containerAnimated} ${styles.primary}`}>
                {elements.map((element, index3) => (
                  <h4
                    key={id + index3}
                  >{`${element.time} - ${element.skill}`}</h4>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default Skils;
