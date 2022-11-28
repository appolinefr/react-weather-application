import React from "react";

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
  HStack,
} from "@chakra-ui/react"

import { WiStrongWind, WiThermometer, WiHumidity } from "react-icons/wi";

export default function CurrentWeather(props) {
  return (
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
              {props.city}
            </chakra.h1>
            <Image
              src={props.icon}
              alt={props.description}
              boxSize="100px"
            />
            <Text>{props.description}</Text>
          </VStack>
        </GridItem>
        <GridItem colSpan={8} mt={6}>
          <HStack justifyContent={"center"} spacing="60px">
            <Flex>
              <Text fontSize={"lg"} alignSelf={"center"}>
                {props.temperature} °
              </Text>
              <WiThermometer size={32} alignSelf={"center"} />
            </Flex>
            <Flex>
              <WiHumidity size={32} alignSelf={"center"} />
              <Text alignSelf={"center"}>{props.humidity} %</Text>
            </Flex>
            <Flex>
              <WiStrongWind size={32} alignSelf={"center"} />
              <Text alignSelf={"center"}>{props.wind} km/h</Text>
            </Flex>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

