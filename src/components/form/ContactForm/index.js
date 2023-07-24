import React, { useState } from "react";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { sendData } from "../../../utils/fetch/post";
import TitleTrail from "../../ui/titleTrail";

const ContactForm = () => {
  const { register, handleSubmit } = useForm(),
    [statusLetterSent, setStatusLetterSent] = useState(false);
  const onSubmit = (data) => {
    sendData(JSON.stringify(data)).then((response) => {
      if (response) {
        setStatusLetterSent(true);
      }
    });
  };

  return (
    <div
      className={
        statusLetterSent
          ? `${styles.containerForm} ${styles.sent}`
          : styles.containerForm
      }
    >
      <div className={styles.containerLetter}>
        <div className={`${styles.wrapper} ${styles.centered}`}>
          <article className={styles.letter}>
            <div className={styles.side}>
              <pl>Contact me</pl>
            </div>
            <div className={styles.side}>
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <p>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Your name"
                  />
                </p>
                <p>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Your email"
                  />
                </p>
                <p>
                  <textarea
                    {...register("message")}
                    placeholder="Your message"
                  ></textarea>
                </p>
                <input
                  className={styles.buttonSend}
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </article>
          <div className={`${styles.envelope} ${styles.front}`} />
          <div className={`${styles.envelope} ${styles.back}`} />
        </div>
      </div>
      <TitleTrail
        open={statusLetterSent}
        array={["Thank you for your message,", "I'll contact you soon."]}
        parentStyle={styles.h2Size}
      />
    </div>
  );
};
export default ContactForm;
