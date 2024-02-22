import Card from "./Card";
import Grid from "@mui/material/Grid";

export default function Attempt({cardRenderState}) {
  return (
    <Grid container justifyContent="center" spacing={2}>
      {/* 5 cards in column for the letters */}
      {cardRenderState[0].map((value) => (
        <Grid key={value} item>
          <Card cardRenderState={cardRenderState} value={value}/>
        </Grid>
      ))}
    </Grid>
  );
}
