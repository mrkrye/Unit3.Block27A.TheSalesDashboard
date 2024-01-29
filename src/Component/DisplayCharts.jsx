import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { autocompleteClasses } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function DisplayCharts({ display }) {
  console.log(display);
  let total = 0;
  let highestVal = 0;
  let highestValId = "";

  for (let i = 0; i < display.length; i++) {
    total += display[i]["value"];
    if (highestVal < display[i]["value"]) {
      highestVal = display[i]["value"];
      highestValId = display[i]["id"];
    }
  }
  console.log(total, highestVal, highestValId);

  return (
    <div className="flex">
      <Card
        sx={{ minWidth: 400, minHeight: 200, textAlign: "center", m: "auto" }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            Total:
            <br />
            {total}
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{ minWidth: 400, textAlign: "center", minHeight: 200, m: "auto" }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            Highest Val:
            <br />
            {highestVal}
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{ minWidth: 400, textAlign: "center", m: "auto", minHeight: 200 }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            HighestValidId:
            <br />
            {highestValId}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
