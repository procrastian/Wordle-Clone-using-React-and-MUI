import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SingleGuessGrid from "../GuessSingle/SingleGuessGrid";

export default function GuessRowGrid({guessState, cardColorState}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <SingleGuessGrid guessState={guessState} cardColorState={cardColorState}/>
      </Grid>
    </Box>
  );
}
