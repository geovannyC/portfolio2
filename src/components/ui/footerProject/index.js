import React from 'react'
import BottomLineText from '../../commons/bottomLineText'
import styles from "./style.module.scss";

const FooterProject = ({text}) => {
  return (
    <div className={styles.container}>
        <BottomLineText text={text}/>
    </div>
  )
}

export default FooterProject