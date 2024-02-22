import * as React from "react";
import Paper from "@mui/material/Paper";


export default function Card({cardRenderState, value}) {
  return (
    <Paper
      sx={{
        height: 120,
        width: 80,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
    </Paper>
  );
}
