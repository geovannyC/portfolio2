import React, { useId, useRef, useState } from "react";
import { useTrail, a } from "@react-spring/web";
import styles from "./style.module.scss";

const Trail = ({ open, children, parentStyle }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 30,
    top: open ? 0 : 10,
    from: { opacity: 0, x: 30, top: 10 },
  });
  const id = useId();
  return (
    <div>
      {trail.map(({ ...style }, index) => {
        return (
          <a.div
            key={id + index}
            className={`${styles.trailsText} ${parentStyle || styles.h1Size}`}
            style={style}
          >
            <a.div>{items[index]}</a.div>
          </a.div>
        );
      })}
    </div>
  );
};
export default Trail;
