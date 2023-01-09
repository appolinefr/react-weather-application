import React, { useState } from "react";
import axios from "axios";
import {
  Input,
  Box,
  Container,
  Flex,
  useColorMode,
  useColorModeValue,
  IconButton,
  Center,
} from "@chakra-ui/react";

import { ThreeDots } from "react-loader-spinner";
import { BsSun, BsMoon } from "react-icons/bs";

import Forecast from "../Forecast";
import CurrentWeather from "../CurrentWeather/CurrentWeather";

export default function Weather(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [city, setCity] = useState(props.placeHolder);
  const [weather, setWeather] = useState({ display: false });
  const text = useColorModeValue("purple.700", "white");
  function handleSubmit(event) {
    event.preventDefault();
    getWeather();
  }

  function handleResponse(response) {
    setWeather({
      display: true,
      date: response.data.dt,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      feels: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
  }

  function getWeather() {
    let APIKey = "9915cf3d854b5f563abb5811b69f8cd9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weather.display) {
    return (
      <Box
        as={Container}
        maxW="full"
        minH={"80px"}
        py={12}
        bgGradient={
          colorMode === "light"
            ? "linear(to-mr,  purple.50, purple.100)"
            : "linear(to-tr, purple.800, purple.900, gray.900)"
        }
      >
        <Flex justifyContent={"center"}>
          <form onSubmit={handleSubmit}>
            <Input
              type="search"
              placeholder=" 🔍  Search for a city..."
              m={4}
              _placeholder={{ color: text }}
              minW={{ sm: "300px", md: "500px", lg: "700px" }}
              onChange={(e) => setCity(e.target.value)}
              borderColor={text}
              focusBorderColor={text}
            />
          </form>
          <IconButton
            m={4}
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <BsMoon /> : <BsSun w={6} h={6} />}
            // color={dark}
            variant={"ghost"}
            alignSelf={"center"}
            _hover={{
              textDecoration: "none",
              // color: pink,
            }}
            // _active={{ color: pink }}
          />
        </Flex>
        <CurrentWeather data={weather} />
        <Forecast coordinates={weather.coordinates} />
      </Box>
    );
  } else {
    getWeather();
    return (
      <Box as={Center} maxW="7xl" mt={6} p={4}>
        <ThreeDots
          align={"center"}
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
