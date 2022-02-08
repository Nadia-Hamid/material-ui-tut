import React from "react";
import { Typography } from "@material-ui/core";

export default function Create() {
  return (
    <div>
      {/* <Typography 
      variant="h1"
      color="primary"
      align="center"
       >
        Create a new note
      </Typography> */}
      {/* <Typography 
      color="secondary"
      noWrap="true">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et
        arcu maximus, sagittis quam in, condimentum risus. Nunc faucibus, nibh
        vel ornare viverra, erat elit faucibus nisi, et scelerisque dui nisi a
        leo. Vestibulum et semper est. Aliquam erat volutpat. Nullam a lectus
        dui. Ut nisi nisi, elementum ut nunc ac, pretium sagittis urna. Nulla
        facilisi. Aenean laoreet auctor odio, faucibus aliquam sem venenatis
        vel.
      </Typography> */}
      <Typography variant="h6" color="textSecondary" component ="h2" gutterBottom>Create a new note</Typography>
    </div>
  );
}
