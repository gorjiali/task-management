import * as React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ErrorPage.module.scss"

function ErrorPage({message = "404 Not Found"}) {
  return (
    <div className={styles.errorMsg}>
      <span>{message}, please back to</span>
      <Link className={styles.homeLink} to="/">🏠</Link>
    </div>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
};

export default ErrorPage;
