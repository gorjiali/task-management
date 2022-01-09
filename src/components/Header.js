import * as React from "react";
import useMatchName from "../hooks/useMatchName";

function Header() {
  const matchName = useMatchName();
  return (
    <header>
      <h1>{`Task Management > ${matchName}`}</h1>
    </header>
  );
}

export default Header;
