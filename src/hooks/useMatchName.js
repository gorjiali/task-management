import {matchPath, useLocation} from "react-router-dom";

const routes = [
  {path: "/", name: "Home"},
  {
    path: "/edit/:userId",
    name: "Edit",
  },
];

function useMatchName() {
  const location = useLocation();
  let matchName = "404"; // default

  routes.forEach(({name, path}) => {
    if (!!matchPath(location.pathname, {path, exact: true})) matchName = name;
  });
  return matchName;
}

export default useMatchName;
