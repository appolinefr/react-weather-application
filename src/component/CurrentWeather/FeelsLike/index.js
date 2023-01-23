import React from "react";

import { Text, VStack, useColorModeValue } from "@chakra-ui/react";

import { WiThermometer } from "react-icons/wi";

export default function FeelsLike(props) {
  const text = useColorModeValue("gray.800", "white");
  const data = useColorModeValue("gray.600", "gray.400");
  
  return (
    <VStack alignItems="center" spacing="20px" pt={4}>
      <WiThermometer size={50} alignself={"center"} />
      <Text alignSelf={"center"} fontWeight="600" color={text} fontSize={"xl"}>
        Feels like
      </Text>
      <Text alignSelf={"center"} fontWeight="600" color={data} fontSize={"lg"}>
        {Math.round(props.data)} °
      </Text>
    </VStack>
  );
}
