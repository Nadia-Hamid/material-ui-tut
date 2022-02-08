import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core"; //it is a function

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
});

export default function Create() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography
          className={classes.title}
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Create a new note
        </Typography>

        <Button
          className={classes.btn}
          onClick={() => console.log("you clicked me")}
          type="submit"
          color="secondary"
          variante="contained"
        >
          Submit
        </Button>
      </Container>
    </div>
  );
}
