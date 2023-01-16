import { GridItem, Text, VStack, useColorModeValue } from "@chakra-ui/react";

import { TbWind } from "react-icons/tb";

export default function Wind(props) {
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
        <TbWind size={50} color={"gray"} alignself={"center"} />
        <Text
          alignSelf={"center"}
          fontWeight="500"
          color={text}
          fontSize={"lg"}
        >
          Wind
        </Text>
        <Text
          alignSelf={"center"}
          fontWeight="500"
          color={data}
          fontSize={"lg"}
        >
          {Math.round(props.data)} km/h
        </Text>
      </VStack>
    </GridItem>
  );
}
