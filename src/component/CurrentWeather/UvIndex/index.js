import React from "react";
import { VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { BsSunFill } from "react-icons/bs";

export default function Wind(props) {
  const text = useColorModeValue("#155264", "white");
  // const data = useColorModeValue("#FD6F3B", "gray.300");

  const colorChange = (value) => {
    let color;
    if (value >= 0 && value <= 3) {
      color = "green";
    } else if (value >= 4 && value <= 9) {
      color = "yellow";
    } else {
      color = "red";
    }
    return color;
  };

  return (
    <VStack alignItems="center" pt={4} spacing="20px">
      <BsSunFill color={"orange"} size={50} alignself={"center"} />
      <Text alignSelf={"center"} fontWeight="600" color={text} fontSize={"xl"}>
        Uv index
      </Text>
      <Text
        alignSelf={"center"}
        fontWeight="600"
        color={colorChange(props.data)}
        fontSize={"lg"}
      >
        {Math.round(props.data)}
      </Text>
    </VStack>
  );
}
