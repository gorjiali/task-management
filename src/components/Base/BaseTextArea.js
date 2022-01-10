import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./BaseInput.module.scss";

function BaseTextArea({label = "label", height, ...otherProps}) {
  const id = uuidv4();
  return (
    <div className={styles.formField} style={{height}}>
      <div className={styles.formFieldControl}>
        <textarea
          id={id}
          className={styles.formFieldTextarea}
          placeholder=" "
          {...otherProps}
        ></textarea>
        <label htmlFor={id} className={styles.formFieldLabel}>
          {label}
        </label>
        <div className={styles.formFieldBar}></div>
      </div>
    </div>
  );
}

export default BaseTextArea;
