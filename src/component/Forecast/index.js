import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Grid,
  GridItem,
  Box,
  Center,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { ThreeDots } from "react-loader-spinner";

import Current from "../CurrentWeather/Current";
import ForecastDay from "../ForecastDay";
import UvIndex from "../CurrentWeather/UvIndex";
import Wind from "../CurrentWeather/Wind";
import Humidity from "../CurrentWeather/Humidity";
import FeelsLike from "../CurrentWeather/Temperature";

export default function Forecast(props) {
  const [weather, setWeather] = useState(null);
  const [current, setCurrent] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { colorMode } = useColorMode();
  const color = useColorModeValue("#155264", "white");

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
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={{ sm: "6", md: "8", lg: "8" }}
          >
            <GridItem>
              <Current data={current} city={props.data.city} />
            </GridItem>
            <GridItem>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
                gap={{ sm: "4", md: "6", lg: "6" }}
              >
                <GridItem
                  borderRadius={12}
                  p={4}
                  backgroundColor={
                    colorMode === "light" ? "whiteAlpha.500" : ""
                  }
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
                >
                  <UvIndex data={current.uvi} />
                </GridItem>
                <GridItem
                  borderRadius={12}
                  p={4}
                  backgroundColor={
                    colorMode === "light" ? "whiteAlpha.500" : ""
                  }
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
                >
                  <Humidity data={current.humidity} />
                </GridItem>
                <GridItem
                  backgroundColor={
                    colorMode === "light" ? "whiteAlpha.500" : ""
                  }
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
                >
                  <Wind data={current.wind_speed} />
                </GridItem>
                <GridItem
                  backgroundColor={
                    colorMode === "light" ? "whiteAlpha.500" : ""
                  }
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
                >
                  <FeelsLike data={current.temp} />
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Box>
        <Box p={4}>
          <Heading color={color} py={8} >
            Next 6 days
          </Heading>
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
                    backgroundColor={
                      colorMode === "light" ? "whiteAlpha.500" : ""
                    }
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
          color="white"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </Box>
    );
  }
}
