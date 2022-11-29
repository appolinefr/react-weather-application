import React from "react";
import Moment from "moment";

import {
  Box,
  VStack,
  chakra,
  Grid,
  GridItem,
  Container,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";

import { WiStrongWind, WiThermometer, WiHumidity } from "react-icons/wi";

export default function CurrentWeather(props) {
    function date() {
      const formatDate = Moment().format("dddd, hh:mm a")
      return( `${formatDate}`) ;
    }
  return (
    <Box as={Container} maxW="7xl" mt={10} p={4}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
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
              fontSize="xl"
              fontWeight="400"
              color={"gray.600"}
            >
              {props.data.description}
            </Text>
          </VStack>
        </GridItem>
        <GridItem p={4} backgroundColor={"white"} borderRadius={8}>
          <VStack
            justifyContent={"center"}
            alignItems={"center"}
            spacing="40px"
            my={4}
          >
            <Text
              alignself={"center"}
              mb={2}
              fontSize="xl"
              fontWeight="400"
              color={"gray.600"}
            >
              {date()}
            </Text>
            <Flex>
              <WiThermometer color={"#FD56A6"} size={32} alignself={"center"} />
              <Text
                fontSize={"lg"}
                alignself={"center"}
                fontWeight="500"
                color={"gray.600"}
              >
                {props.data.temperature} °
              </Text>
            </Flex>
            <Flex>
              <WiHumidity size={32} color={"#FD56A6"} alignself={"center"} />
              <Text
                alignSelf={"center"}
                fontWeight="500"
                color={"gray.600"}
                fontSize={"lg"}
              >
                {props.data.humidity} %
              </Text>
            </Flex>
            <Flex>
              <WiStrongWind size={32} color={"#FD56A6"} alignself={"center"} />
              <Text
                alignSelf={"center"}
                fontWeight="500"
                color={"gray.600"}
                fontSize={"lg"}
              >
                {" "}
                {props.data.wind} km/h
              </Text>
            </Flex>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}
