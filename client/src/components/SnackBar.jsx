import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export default function SnackBar({ error, severity = "error" }) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={!!error}
      autoHideDuration={6000}
    >
      <Alert severity={severity}>{error}</Alert>
    </Snackbar>
  );
}
