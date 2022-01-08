import * as React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function ErrorPage({message = "404 Not Found"}) {
  return (
    <div>
      <p>{message}</p>
      <Link to="/">Home page</Link>
    </div>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
};

export default ErrorPage;
