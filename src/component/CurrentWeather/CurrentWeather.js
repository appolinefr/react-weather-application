import React from "react";
import Moment from "moment";

import {
  Box,
  VStack,
  chakra,
  Grid,
  GridItem,
  Container,
  Text,
  Image,
} from "@chakra-ui/react";

import FeelsLikeTemperature from "./FeelsLikeTemperature";
import Temperature from "./Temperature";
import Wind from "./Wind";
import Humidity from "./Humidity";

export default function CurrentWeather(props) {
  function date() {
    const formatDate = Moment().format("dddd, hh:mm a");
    return `${formatDate}`;
  }
  return (
    <Box as={Container} maxW="7xl" mt={10} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={8}
      >
        <GridItem p={4} backgroundColor={"white"} borderRadius={8}>
          <VStack alignItems="center" spacing="10px">
            <chakra.h1 fontSize="5xl" fontWeight="400" color={"#FD56A6"}>
              {props.data.city}
            </chakra.h1>
            <Image
              src={props.data.icon}
              alt={props.data.description}
              width="36"
              color={"#FD56A6"}
            />
            <Text
              textTransform={"capitalize"}
              fontSize="2xl"
              fontWeight="500"
              color={"gray.600"}
            >
              {props.data.description}
            </Text>
          </VStack>
        </GridItem>
        <GridItem p={4} backgroundColor={"#FD56A6"} borderRadius={8}>
          <VStack
            justifyContent={"center"}
            alignItems={"center"}
            spacing="40px"
            my={4}
          >
            <Text
              alignself={"center"}
              mb={2}
              fontSize="3xl"
              fontWeight="600"
              color={"white"}
            >
              {date()}
            </Text>
          </VStack>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap={5}
            alignItems={"center"}
            mt={8}
          >
            <Temperature data={props.data.temperature} />
            <FeelsLikeTemperature data={props.data.feels} />
            <Humidity data={props.data.humidity} />
            <Wind data={props.data.wind} />
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
