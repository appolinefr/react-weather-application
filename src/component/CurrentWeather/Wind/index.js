import { Text, VStack, useColorModeValue } from "@chakra-ui/react";

import { TbWind } from "react-icons/tb";

export default function Wind(props) {
  const text = useColorModeValue("gray.800", "white");
  const data = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack alignItems="center" spacing="20px" pt={4}>
      <TbWind size={50} color={"gray"} alignself={"center"} />
      <Text alignSelf={"center"} fontWeight="600" color={text} fontSize={"xl"}>
        Wind
      </Text>
      <Text alignSelf={"center"} fontWeight="600" color={data} fontSize={"lg"}>
        {Math.round(props.data)} km/h
      </Text>
    </VStack>
  );
}
