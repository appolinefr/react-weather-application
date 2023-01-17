import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Grid,
  GridItem,
  Box,
  Center,
  Heading,
  useColorMode,
} from "@chakra-ui/react";

import { ThreeDots } from "react-loader-spinner";

import ForecastDay from "../ForecastDay";
import HourlyWeather from "../Hourly";
import UvIndex from "../CurrentWeather/UvIndex";
import Wind from "../CurrentWeather/Wind";
import Humidity from "../CurrentWeather/Humidity";
import FeelsLike from "../CurrentWeather/FeelsLike";

export default function Forecast(props) {
  const [weather, setWeather] = useState(null);
  const [current, setCurrent] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [hourly, setHourly] = useState(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  function getWeather() {
    let lat = props.data.coordinates.lat;
    let lon = props.data.coordinates.lon;
    let APIKey = "9915cf3d854b5f563abb5811b69f8cd9";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;

    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);

    setHourly(response.data.hourly);
    setWeather(response.data.daily);
    setCurrent(response.data.current);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <Box>
        <Box p={4}>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={{ base: "6", sm: "6", md: "8" }}
          >
            <GridItem
              borderRadius={12}
              p={4}
              boxShadow={{
                sm:
                  colorMode === "light"
                    ? `xl`
                    : `0px 0px 6px rgb(237, 238, 238)`,
                md:
                  colorMode === "light"
                    ? `xl`
                    : `0px 0px 10px rgb(237, 238, 238)`,
                lg:
                  colorMode === "light"
                    ? `xl`
                    : `0px 0px 13px rgb(237, 238, 238)`,
              }}
              maxW={"350px"}
              h={"200px"}
            >
              <UvIndex data={current.uvi} />
            </GridItem>
            <GridItem
              borderRadius={12}
              p={4}
              boxShadow={{
                sm:
                  colorMode === "light"
                    ? `xl`
                    : `0px 0px 6px rgb(237, 238, 238)`,
                md:
                  colorMode === "light"
                    ? `xl`
                    : `0px 0px 10px rgb(237, 238, 238)`,
                lg:
                  colorMode === "light"
                    ? `xl`
                    : `0px 0px 13px rgb(237, 238, 238)`,
              }}
              maxW={"350px"}
              h={"200px"}
            >
              <Humidity data={current.humidity} />
            </GridItem>
            <GridItem
              borderRadius={12}
              p={4}
              boxShadow={{
                sm:
                  colorMode === "light"
                    ? `xl`
                    : `0px 0px 6px rgb(237, 238, 238)`,
                md:
                  colorMode === "light"
                    ? `xl`
                    : `0px 0px 10px rgb(237, 238, 238)`,
                lg:
                  colorMode === "light"
                    ? `xl`
                    : `0px 0px 13px rgb(237, 238, 238)`,
              }}
              maxW={"350px"}
              h={"200px"}
            >
              <Wind data={current.wind_speed} />
            </GridItem>
            <GridItem
              borderRadius={12}
              p={4}
              boxShadow={{
                sm:
                  colorMode === "light"
                    ? `xl`
                    : `0px 0px 6px rgb(237, 238, 238)`,
                md:
                  colorMode === "light"
                    ? `xl`
                    : `0px 0px 10px rgb(237, 238, 238)`,
                lg:
                  colorMode === "light"
                    ? `xl`
                    : `0px 0px 13px rgb(237, 238, 238)`,
              }}
              maxW={"350px"}
              h={"200px"}
            >
              <FeelsLike data={current.feels_like} />
            </GridItem>
          </Grid>
        </Box>
        <Box p={4}>
          <Heading p={4}>Today</Heading>
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(6, 1fr)",
            }}
            gap={{ sm: "4", md: "6", lg: "8" }}
          >
            {hourly.map((hourlyWeather, index) => {
              if (index >= 1 && index < 7) {
                return (
                  <GridItem
                    key={index}
                    boxShadow={{
                      sm:
                        colorMode === "light"
                          ? `xl`
                          : `0px 0px 6px rgb(237, 238, 238)`,
                      md:
                        colorMode === "light"
                          ? `xl`
                          : `0px 0px 10px rgb(237, 238, 238)`,
                      lg:
                        colorMode === "light"
                          ? `xl`
                          : `0px 0px 13px rgb(237, 238, 238)`,
                    }}
                    p={5}
                    borderRadius={8}
                  >
                    <HourlyWeather
                      data={hourlyWeather}
                      timezone={props.data.timezoneId}
                    />
                  </GridItem>
                );
              } else {
                return null;
              }
            })}
          </Grid>
        </Box>
        <Box p={4}>
          <Heading p={4}>Next 6 days</Heading>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={{ sm: "4", md: "6", lg: "8" }}
          >
            {weather.map((dailyWeather, index) => {
              if (index < 6) {
                return (
                  <GridItem
                    key={index}
                    boxShadow={{
                      sm:
                        colorMode === "light"
                          ? `xl`
                          : `0px 0px 6px rgb(237, 238, 238)`,
                      md:
                        colorMode === "light"
                          ? `xl`
                          : `0px 0px 10px rgb(237, 238, 238)`,
                      lg:
                        colorMode === "light"
                          ? `xl`
                          : `0px 0px 13px rgb(237, 238, 238)`,
                    }}
                    p={5}
                    borderRadius={8}
                  >
                    <ForecastDay data={dailyWeather} />
                  </GridItem>
                );
              } else {
                return null;
              }
            })}
          </Grid>
        </Box>
      </Box>
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
