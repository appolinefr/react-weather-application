import { VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { BsSunFill } from "react-icons/bs";

export default function Wind(props) {
  const text = useColorModeValue("blue.800", "white");
  const data = useColorModeValue("blue.400", "gray.300");
  return (
    <VStack alignItems="center" pt={4} spacing="20px">
      <BsSunFill color={"orange"} size={50} alignself={"center"} />
      <Text alignSelf={"center"} fontWeight="600" color={text} fontSize={"xl"}>
        Uv index
      </Text>
      <Text alignSelf={"center"} fontWeight="600" color={data} fontSize={"lg"}>
        {Math.round(props.data)}
      </Text>
    </VStack>
  );
}
