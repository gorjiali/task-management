import React from "react";
import styles from "./BaseSelectBox.module.scss";

function BaseSelectBox({label = "", ...otherProps}) {
  return (
    <div className={styles["select"]}>
      <select className={styles["select-text"]} {...otherProps}>
      </select>
      <span className={styles["select-highlight"]}></span>
      <label className={styles["select-label"]}>{label}</label>
    </div>
  );
}

export default BaseSelectBox;
