import React from "react";
import Moment from "moment";

import {
  Box,
  VStack,
  IconButton,
  Grid,
  GridItem,
  Container,
  Text,
  Image,
  Heading,
  Flex,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import FeelsLikeTemperature from "./FeelsLikeTemperature";
import Temperature from "./Temperature";
import Wind from "./Wind";
import Humidity from "./Humidity";

export default function CurrentWeather(props) {
  const text = useColorModeValue("purple.800", "white");

  function date() {
    const formatDate = Moment().format("dddd, hh:mm a");
    return `${formatDate}`;
  }
  return (
    <Box maxW="full" mt={{ sm: 2, md: 6, lg: 8 }} p={4}>
      <Center
        as={Container}
        boxShadow={"xl"}
        mt={{ sm: 2, md: 6, lg: 4 }}
        p={4}
      >
        <VStack alignItems="center">
          <Flex align={"center"}>
            <Heading m={2} fontWeight={400} fontSize={"5xl"} color={text}>
              {props.data.city}
            </Heading>
            <IconButton
              color={text}
              icon={<HiLocationMarker />}
              fontSize={"3xl"}
              m={2}
              variant={"ghost"}
            />
          </Flex>
          <Temperature color={text} data={props.data.temperature} />
          <Image
            src={props.data.icon}
            alt={props.data.description}
            width="36"
          />
          <Text
            textTransform={"capitalize"}
            fontSize="2xl"
            fontWeight="500"
            color={text}
          >
            {props.data.description}
          </Text>
        </VStack>
      </Center>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={36}
      >
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
            <FeelsLikeTemperature data={props.data.feels} />
            <Humidity data={props.data.humidity} />
            <Wind data={props.data.wind} />
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
