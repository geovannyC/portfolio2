import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "@react-spring/parallax";
import Projects from "../Projects";
import Principal from "../Principal";
import Skils from "../Skills";
import Contact from "../Contact";
import { useScroll } from "@react-spring/web";
import styles from "./style.module.scss";

export default function App() {
  const { scrollXProgress } = useScroll();
  const parallax = useRef(0);
  const pagesRef = useRef(null);
  const windowWidth = useRef(window.innerWidth);
  const scroll = (number) => {
    if (parallax.current && number >= 0) {
      parallax.current.scrollTo(number);
    }
  };
  const onScroll = (e) => {
    const delta = e.deltaY;
    if (delta >= 0) {
      return scroll(parallax.current.offset + 1);
    }
    return scroll(parallax.current.offset - 1);
  };
  return (
    <div onWheel={onScroll} ref={pagesRef} className={styles.generalContainer}>
      <Parallax
        ref={parallax}
        pages={8}
        horizontal={parseInt(windowWidth.current) >= 1300}
        className={styles.generalContainer}
      >
        <Principal offset={0} onClick={() => scroll(1)} />
        <Projects gradient="teal" onClick={(toPage) => scroll(toPage)} />
        <Skils offset={6} onClick={(toPage) => scroll(toPage)} />
        <Contact offset={7} onClick={(toPage) => scroll(toPage)} />
        {/* <Page offset={2} gradient="tomato" onClick={() => scroll(0)} /> */}
      </Parallax>
    </div>
  );
}
