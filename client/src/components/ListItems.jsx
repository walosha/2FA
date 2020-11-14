import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { styled } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch } from "react-redux";

import {
  Home,
  DirectionsBus,
  PaymentOutlined,
  AccountBalance,
  Settings,
  ExitToApp,
  AirlineSeatReclineExtra,
} from "@material-ui/icons";

const StyledLink = styled(NavLink)({
  color: "#19857b",
  textDecoration: "none",
});

//Navigation Menu and setting Dashobaord to true on load
const menus = [{ name: "Dashboard", icons: <Home /> }];

// Rendering of JSX Menus list Items

function RenderMenuItem({ name, selected, icons, handleDrawerToggle }) {
  const url = name.split(" ").join("-").toLowerCase();

  return (
    <StyledLink
      onClick={handleDrawerToggle}
      to={`/${url === "dashboard" ? "" : url}`}
    >
      <ListItem selected={url === selected} button>
        <ListItemIcon>{icons}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </StyledLink>
  );
}

export const MainListItems = ({ selected, handleDrawerToggle }) => {
  return (
    <Fragment>
      {menus.map((item, idx) => (
        <RenderMenuItem
          key={idx}
          handleDrawerToggle={handleDrawerToggle}
          selected={selected}
          {...item}
        />
      ))}
    </Fragment>
  );
};

const SecondaryList = ({ signOut }) => {
  const dispatch = useDispatch();
  const onSignOut = () => {
    dispatch({ type: "LOGOUT_USER" });
  };
  return (
    <StyledLink onClick={onSignOut} color="primary" to="/">
      <ListItem button>
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItem>
    </StyledLink>
  );
};
export const SecondaryListItems = SecondaryList;
