import React from 'react'

import { GridItem, Flex, Text } from "@chakra-ui/react";

import { WiStrongWind } from "react-icons/wi";

export default function Wind(props) {
  return (
    <GridItem backgroundColor={"white"} borderRadius={12} p={4}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <WiStrongWind size={32} color={"#FD56A6"} alignself={"center"} />
        <Text
          alignSelf={"center"}
          fontWeight="500"
          color={"gray.600"}
          fontSize={"lg"}
        >
          {"  "}
          {props.data} km/h
        </Text>
      </Flex>
    </GridItem>
  );
}
