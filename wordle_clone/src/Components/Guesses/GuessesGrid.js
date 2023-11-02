import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import GuessGrid from "../Guess/GuessGrid";

export default function GuessesGrid() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <GuessGrid />
      </Grid>
    </Box>
  );
}
