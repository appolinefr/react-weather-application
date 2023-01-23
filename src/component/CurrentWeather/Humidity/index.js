import React from "react";

import { Text, VStack, useColorModeValue } from "@chakra-ui/react";

import { GiWaterDrop } from "react-icons/gi";

export default function Humidity(props) {
  const text = useColorModeValue("gray.800", "white");
  const data = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack alignItems="center" spacing="20px" pt={4}>
      <GiWaterDrop size={50} color={"#4299E1"} alignself={"center"} />
      <Text alignSelf={"center"} fontWeight="600" color={text} fontSize={"xl"}>
        Humidity
      </Text>
      <Text alignSelf={"center"} fontWeight="600" color={data} fontSize={"lg"}>
        {Math.round(props.data)} %
      </Text>
    </VStack>
  );
}
