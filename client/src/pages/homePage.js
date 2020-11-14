import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Header from "../components/header.component";
import SiderDrawal from "../components/SideDrawal";
import Dashboard from "./dashBoard";
import Error404 from "./Error404";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

function HomePage() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Fragment>
      <Header mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <div className={classes.root}>
        <SiderDrawal
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="*" component={Error404}></Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default HomePage;
