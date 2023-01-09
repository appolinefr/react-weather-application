import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, GridItem, Box, Center } from "@chakra-ui/react";

import { ThreeDots } from "react-loader-spinner";

import ForecastDay from "../ForecastDay";

export default function Forecast(props) {
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function getWeather() {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let APIKey = "9915cf3d854b5f563abb5811b69f8cd9";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;

    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
    setWeather(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={{ base: "6", sm: "6", md: "8" }}
        mb={8}
        mt={2}
        p={4}
      >
        {weather.map((dailyWeather, index) => {
          if (index < 6) {
            return (
              <GridItem key={index} boxShadow={"xl"} p={5} borderRadius={8}>
                <ForecastDay data={dailyWeather} />
              </GridItem>
            );
          } else {
            return null;
          }
        })}
      </Grid>
    );
  } else {
    getWeather();
    return (
      <Box as={Center} maxW="7xl" mt={6} p={4}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#665d8a"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </Box>
    );
  }
}
