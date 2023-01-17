import { VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { BsSunFill } from "react-icons/bs";

export default function Wind(props) {
  const text = useColorModeValue("gray.800", "white");
  const data = useColorModeValue("gray.600", "gray.400");
  
  return (
    <VStack alignItems="center" pt={4} spacing="20px">
      <BsSunFill color={"orange"} size={50} alignself={"center"} />
      <Text alignSelf={"center"} fontWeight="500" color={text} fontSize={"lg"}>
        Uv index
      </Text>
      <Text alignSelf={"center"} fontWeight="500" color={data} fontSize={"lg"}>
        {Math.round(props.data)}
      </Text>
    </VStack>
  );
}
