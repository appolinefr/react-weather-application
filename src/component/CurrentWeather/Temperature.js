import React from "react";

import { GridItem, Flex, Text } from "@chakra-ui/react";

import { WiThermometer } from "react-icons/wi";

export default function Temperature(props) {
  return (
    <GridItem backgroundColor={"white"} borderRadius={12} p={4}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Text
          fontSize={"lg"}
          alignself={"center"}
          fontWeight="500"
          color={"gray.600"}
        >
          Temp
        </Text>
        <WiThermometer color={"#FD56A6"} size={32} alignself={"center"} />
        <Text
          fontSize={"lg"}
          alignself={"center"}
          fontWeight="500"
          color={"gray.600"}
        >
          {props.data} °
        </Text>
      </Flex>
    </GridItem>
  );
}
