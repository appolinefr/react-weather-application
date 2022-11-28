import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import ForecastDay from "./ForecastDay";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Forecast(props) {
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setWeather(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(6, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        {weather.map((dailyWeather, index) => {
          if (index < 5) {
            return (
              <GridItem key={index}>
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
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let APIKey = "9915cf3d854b5f563abb5811b69f8cd9";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return (
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
    );
  }
}
