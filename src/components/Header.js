import * as React from "react";
import useMatchName from "../hooks/useMatchName";
import styles from "./Header.module.scss";

function Header() {
  const matchName = useMatchName();
  return (
    <header className={styles.header}>
      <h3 className={styles.navigator}>{`Task Management > ${matchName}`}</h3>
    </header>
  );
}

export default Header;
