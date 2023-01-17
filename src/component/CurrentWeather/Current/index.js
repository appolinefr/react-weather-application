import {
  Box,
  VStack,
  IconButton,
  Container,
  Text,
  Image,
  Heading,
  Flex,
  useColorModeValue,
  Center,
  useColorMode,
} from "@chakra-ui/react";

import { HiLocationMarker } from "react-icons/hi";
import Temperature from "../Temperature";

export default function CurrentWeather(props) {
  const { colorMode } = useColorMode();
  const text = useColorModeValue("purple.800", "white");
  return (
    <Box maxW="full" mt={{ sm: 2, md: 6, lg: 4 }} p={4}>
      <Center
        as={Container}
        boxShadow={{
          sm: colorMode === "light" ? `xl` : `0px 0px 6px rgb(237, 238, 238)`,
          md: colorMode === "light" ? `xl` : `0px 0px 10px rgb(237, 238, 238)`,
          lg: colorMode === "light" ? `xl` : `0px 0px 13px rgb(237, 238, 238)`,
        }}
        mt={{ sm: 2, md: 6, lg: 4 }}
        p={4}
      >
        <VStack alignItems="center">
          <Flex align={"center"}>
            <Heading m={2} fontWeight={400} fontSize={"5xl"} color={text}>
              {props.data.city}
            </Heading>
            <IconButton
              color={text}
              icon={<HiLocationMarker />}
              fontSize={"3xl"}
              m={2}
              variant={"ghost"}
            />
          </Flex>
          <Temperature color={text} data={props.data.temp} />
          <Image
            src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt={props.data.description}
            width="36"
            alignself={"center"}
          />
          <Text
            textTransform={"capitalize"}
            fontSize="2xl"
            fontWeight="500"
            color={text}
          >
            {props.data.description}
          </Text>
        </VStack>
      </Center>
    </Box>
  );
}
