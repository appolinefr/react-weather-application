import {
  Box,
  VStack,
  IconButton,
  Text,
  Image,
  Heading,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { HiLocationMarker } from "react-icons/hi";

export default function CurrentWeather({ data, city }) {
  const { colorMode } = useColorMode();
  const color = useColorModeValue("#155264", "white");

  return (
    <Box
      backgroundColor={colorMode === "light" ? "whiteAlpha.500" : ""}
      borderRadius={12}
      p={4}
      boxShadow={{
        sm: colorMode === "light" ? `xl` : `0px 0px 6px rgb(237, 238, 238)`,
        md: colorMode === "light" ? `xl` : `0px 0px 10px rgb(237, 238, 238)`,
        lg: colorMode === "light" ? `xl` : `0px 0px 13px rgb(237, 238, 238)`,
      }}
    >
      <VStack alignItems="center" mt={2}>
        <Flex align={"center"} mt={4}>
          <Heading m={2} fontWeight={400} fontSize={"5xl"} color={color}>
            {city}
          </Heading>
          <IconButton
            icon={<HiLocationMarker />}
            fontSize={"3xl"}
            m={2}
            variant={"ghost"}
            color={color}
          />
        </Flex>
        <Image
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          width="48"
          alignself={"center"}
        />
        <Text
          pb={{ sm: 5, md: 7, lg: 8 }}
          textTransform={"capitalize"}
          fontSize="3xl"
          fontWeight="600"
          color={color}
        >
          {data.weather[0].description}
        </Text>
      </VStack>
    </Box>
  );
}
