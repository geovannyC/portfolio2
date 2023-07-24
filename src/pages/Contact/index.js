import React from "react";
import styles from "./style.module.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import ContactForm from "../../components/form/ContactForm";

const Contact = ({ offset, onClick }) => {
  return (
    <ParallaxLayer offset={offset} speed={0.6} >
      <div className={styles.generalContainer}>
        <ContactForm/>
      </div>
    </ParallaxLayer>
  );
};

export default Contact;
