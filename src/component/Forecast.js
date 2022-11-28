import React from "react";

import {Grid} from "@chakra-ui/react";

import ForecastDay from "./ForecastDay";

export default function Forecast() {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(6, 1fr)",
      }}
      gap={{ base: "8", sm: "12", md: "16" }}
    >
      <ForecastDay />
    </Grid>
  );
}
