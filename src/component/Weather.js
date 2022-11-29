import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import {
  Input,
  Box,
  Container,
  Flex,
} from "@chakra-ui/react";

import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";

export default function Weather(props) {
  const [city, setCity] = useState(props.placeHolder);
  const [weather, setWeather] = useState({ display: false });

  function handleSubmit(event) {
    event.preventDefault();
    getWeather();
  }

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      display: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
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
      <Box as={Container} maxW="full" p={4} backgroundColor={"gray.100"}>
        <Box as={Container} maxW="7xl" mt={6} p={4}>
          <form onSubmit={handleSubmit}>
            <Flex justifyContent={"center"}>
              <Input
                type="search"
                placeholder="Search for a city..."
                margin={2}
                maxWidth={"500px"}
                onChange={(e) => setCity(e.target.value)}
                borderColor={"#FD56A6"}
                focusBorderColor="#FD56A6"
                backgroundColor={"white"}
              />
              <Input
                type={"submit"}
                margin={2}
                maxWidth={"120px"}
                bg="#FD56A6"
                color="white"
                _hover={{
                  bg: "white",
                  color: "#FD56A6",
                  borderColor: "#FD56A6",
                }}
              />
            </Flex>
          </form>
        </Box>
        <CurrentWeather data={weather} />
        <Box as={Container} maxW="7xl" mb={8} mt={2} p={4}>
          <Forecast coordinates={weather.coordinates} />
        </Box>
      </Box>
    );
  } else {
    getWeather();
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
