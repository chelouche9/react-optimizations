import React from "react";
import Fab from "@material-ui/core/Fab";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useHistory, useLocation } from "react-router";

const navigator = (path: string) => {
  switch (path) {
    case "/":
      return "/render";
    case "/render":
      return "/memo";
    case "/memo":
      return "/split";
    case "/split":
      return "list";
    default:
      return "/";
  }
};

const Navigator: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Fab
      onClick={() => history.push(navigator(location.pathname))}
      style={{
        position: "absolute",
        bottom: "40px",
        right: "40px",
        opacity: "0.5",
      }}
      color="primary"
      aria-label="add"
    >
      <NavigateNextIcon />
    </Fab>
  );
};

export default Navigator;
