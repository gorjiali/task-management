import * as React from "react";
import styles from "./BaseButton.module.scss";

function BaseButton({colorType = 'fill', ...otherProps}) {
  return (
    <button className={`${styles.baseBtn} ${styles[colorType]}`} {...otherProps}></button>
  )
}

export default BaseButton;