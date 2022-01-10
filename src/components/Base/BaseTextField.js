import * as React from "react";
import styles from "./BaseInput.module.scss";
import {v4 as uuidv4} from "uuid";

function BaseTextField({label = "label", ...otherProps}) {
  const id = uuidv4();
  return (
    <div className={styles.formField}>
      <div className={styles.formFieldControl}>
        <input
          id={id}
          className={styles.formFieldInput}
          placeholder=" "
          {...otherProps}
        />
        <label htmlFor={id} className={styles.formFieldLabel}>
          {label}
        </label>
        <div className={styles.formFieldBar}></div>
      </div>
    </div>
  );
}

export default BaseTextField;
