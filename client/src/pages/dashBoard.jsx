import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Container } from "@material-ui/core";
import DashBoardInfoCard from "../components/DashBoardInfoCard";
import { cardData } from ".././data/cardData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    background: "#f7f9fc",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
  },
}));

export default function DashBoard() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">Administrator Dashboard</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">
              Manage Users And Tranlators with Ease From One Place
            </Typography>
          </Grid>
          {cardData.map((data, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={3}>
              <DashBoardInfoCard {...data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
