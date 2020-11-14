import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Grid } from "@material-ui/core";

export default function LoaderSpinner() {
  return (
    <React.Fragment>
      <Grid spacing={5} container>
        {new Array(14).fill("x").map((el, index) => (
          <Grid key={index} item xs={12}>
            <Grid item xs={12} sm={12}>
              <Skeleton />
              <Skeleton />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
