import React from "react";

import { GridItem, Flex, Text } from "@chakra-ui/react";

// import { WiThermometer } from "react-icons/wi";

export default function Temperature(props) {
  return (
    <GridItem borderRadius={12} p={4}>
      <Flex align={"center"} justifyContent={"center"}>
        {/* <WiThermometer color={"orange"} alignSelf={"center"} size={32} alignself={"center"} /> */}
        <Text
          fontSize={"4xl"}
          alignself={"center"}
          fontWeight="500"
          color={props.text}
        >
          {props.data} °
        </Text>
      </Flex>
    </GridItem>
  );
}
