import React, { useLayoutEffect, useState } from "react";
import styles from "./style.module.scss";
import TitleTrail from "../titleTrail";

import {
  useSpringRef,
  animated,
  useTransition,
  useSpring,
} from "@react-spring/web";

const AutoSlider = ({ IMAGES }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [titleDeploy, setTitleDeploy] = useState(false);
  const springApi = useSpringRef();

  const transitions = useTransition(activeIndex, {
    from: {
      clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
    },
    enter: {
      clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
    },
    leave: {
      clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)",
    },
    onRest: (_springs, _ctrl, item) => {
      setTitleDeploy(!titleDeploy);
      if (activeIndex === item) {
        setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1);
      }
    },
    exitBeforeEnter: true,
    config: {
      duration: 1500,
    },
    delay: 2000,
    ref: springApi,
  });
  useLayoutEffect(() => {
    springApi.start();
  }, [activeIndex]);
  return (
    <div className={styles.contentProjectContainer}>
      <div className={styles.titleContainer}>
        <TitleTrail
          open={titleDeploy}
          array={(IMAGES[activeIndex - 1] || IMAGES[IMAGES.length -1])?.arrayText}
        />
      </div>
      <div className={styles.previwerContainer}>
        <div className={styles.imageSize}>
          {transitions((springs, item) => (
            <animated.div className={styles.imageSize} style={springs}>
              <img src={IMAGES[item]?.image} className={styles.image} />
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;
