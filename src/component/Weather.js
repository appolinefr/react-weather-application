import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import Forecast from "./Forecast";
import {
  FormControl,
  Input,
  Box,
  VStack,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Flex,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";
import { WiStrongWind, WiThermometer, WiHumidity } from "react-icons/wi";

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
      <Box as={Container} maxW="7xl" mt={6} p={4}>
        <Box as={Container} maxW="7xl" mt={10} p={4}>
          <FormControl onSubmit={handleSubmit}>
            <Flex justifyContent={"center"}>
              <Input
                type="search"
                placeholder="Search for a city..."
                margin={2}
                maxWidth={"500px"}
                onChange={(e) => setCity(e.target.value)}
              />
              <Input type="submit" margin={2} maxWidth={"120px"} />
            </Flex>
          </FormControl>
        </Box>
        <Box as={Container} maxW="7xl" mt={10} p={4}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap={4}
          >
            <GridItem colSpan={8}>
              <VStack alignItems="center" spacing="20px">
                <chakra.h1 fontSize="5xl" fontWeight="400">
                  Melbourne
                </chakra.h1>
                <Image
                  src="http://openweathermap.org/img/wn/11d@2x.png"
                  boxSize="100px"
                />
                <Text>Overcast clouds </Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={8} mt={6}>
              <HStack justifyContent={"center"} spacing="60px">
                <Flex>
                  <Text fontSize={"lg"} alignSelf={"center"}>
                    21°
                  </Text>
                  <WiThermometer size={32} alignSelf={"center"} />
                </Flex>
                <Flex>
                  <WiHumidity size={32} alignSelf={"center"} />
                  <Text alignSelf={"center"}>90 %</Text>
                </Flex>
                <Flex>
                  <WiStrongWind size={32} alignSelf={"center"} />
                  <Text alignSelf={"center"}>4 km/h</Text>
                </Flex>
              </HStack>
            </GridItem>
          </Grid>
        </Box>
        <Divider mt={12} mb={12} />
        <Box as={Container} maxW="7xl" mt={10} p={4}>
          <Forecast />
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
