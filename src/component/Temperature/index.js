import React from "react";

import { GridItem, Flex, Text } from "@chakra-ui/react";



export default function Temperature(props) {
  return (
    <GridItem borderRadius={12} p={4}>
      <Flex align={"center"} justifyContent={"center"}>
    
        <Text
          fontSize={"4xl"}
          alignself={"center"}
          fontWeight="500"
        >
          {Math.round(props.data)} °
        </Text>
      </Flex>
    </GridItem>
  );
}
