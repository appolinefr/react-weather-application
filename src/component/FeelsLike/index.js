import React from "react";

import { GridItem, Text, VStack, useColorModeValue } from "@chakra-ui/react";

import { WiThermometer } from "react-icons/wi";

export default function FeelsLike(props) {
  const text = useColorModeValue("gray.800", "white");
  const data = useColorModeValue("gray.600", "gray.400");
  return (
    <GridItem
      borderRadius={12}
      p={4}
      boxShadow={"xl"}
      maxW={"350px"}
      h={"200px"}
    >
      <VStack alignItems="center" spacing="20px" pt={4}>
        <WiThermometer size={50} alignself={"center"} />
        <Text
          alignSelf={"center"}
          fontWeight="500"
          color={text}
          fontSize={"lg"}
        >
          Feels like
        </Text>
        <Text
          alignSelf={"center"}
          fontWeight="500"
          color={data}
          fontSize={"md"}
        >
          {Math.round(props.data)} °
        </Text>
      </VStack>
    </GridItem>
  );
}