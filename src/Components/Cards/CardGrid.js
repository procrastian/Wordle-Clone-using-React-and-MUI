import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Attempt from "./Attempt";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CardGrid({cardRenderState}) {
  console.log("CG cardRenderState", cardRenderState)
  return (
    <Grid item xs={6}>
      <Item>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              {/* 6 rows for the individual attempts */}
              {cardRenderState[0].map((value) => (
                <Grid key={value} item>
                  <Attempt cardRenderState={cardRenderState}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Item>
    </Grid>
  );
}
