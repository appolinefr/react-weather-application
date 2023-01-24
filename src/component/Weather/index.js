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

import Dark from "../../images/dark2.png";
import Light from "../../images/lightsun3.png";

export default function Weather(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [city, setCity] = useState(props.placeHolder);
  const [coordinates, setCoordinates] = useState({ display: false });
  const formStyle = useColorModeValue("white", "white");

  function handleSubmit(event) {
    event.preventDefault();
    getCoordinates();
  }

  function handleResponse(response) {
    console.log(response.data);
    setCoordinates({
      display: true,
      coordinates: response.data.coord,
      city: response.data.name,
    });
  }

  function getCoordinates() {
    let APIKey = "9915cf3d854b5f563abb5811b69f8cd9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (coordinates.display) {
    return (
      <Box
        as={Container}
        maxW="full"
        minH={"80px"}
        py={12}
        style={{
          backgroundImage:
            colorMode === "light" ? `url(${Light})` : `url(${Dark})`,
          // backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "1000px",
        }}
      >
        <Flex justifyContent={"center"} mb={8}>
          <form onSubmit={handleSubmit}>
            <Input
              color={"white"}
              type="search"
              placeholder=" 🔍  Search for a city..."
              _placeholder={{ color: "white" }}
              _hover={{color: formStyle}}
              borderColor={formStyle}
              border={"2px"}
              focusBorderColor={formStyle}
              m={4}
              minW={{ sm: "300px", md: "500px", lg: "700px" }}
              onChange={(e) => setCity(e.target.value)}
            />
          </form>
          <IconButton
            color={"white"}
            m={4}
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <BsMoon /> : <BsSun w={6} h={6} />}
            variant={"ghost"}
            alignSelf={"center"}
            _hover={{
              textDecoration: "none",
            }}
          />
        </Flex>
        <Forecast data={coordinates} />
      </Box>
    );
  } else {
    getCoordinates();
    return (
      <Box
        as={Center}
        style={{
          backgroundImage:
            colorMode === "light" ? `url(${Light})` : `url(${Dark})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        maxW="full"
        mt={6}
        p={4}
      >
        <ThreeDots
          align={"center"}
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
