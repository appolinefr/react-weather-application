import {
  Box,
  VStack,
  IconButton,
  Text,
  Image,
  Heading,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

import { HiLocationMarker } from "react-icons/hi";
import Temperature from "../Temperature";

export default function CurrentWeather({ data, city }) {
  const { colorMode } = useColorMode();
  return (
    <Box
      backgroundColor={colorMode === "light" ?  "whiteAlpha.500" : ""}
      borderRadius={12}
      p={4}
      boxShadow={{
        sm: colorMode === "light" ? `xl` : `0px 0px 6px rgb(237, 238, 238)`,
        md: colorMode === "light" ? `xl` : `0px 0px 10px rgb(237, 238, 238)`,
        lg: colorMode === "light" ? `xl` : `0px 0px 13px rgb(237, 238, 238)`,
      }}
    >
      <VStack alignItems="center" mt={2}>
        <Flex align={"center"}>
          <Heading m={2} fontWeight={400} fontSize={"5xl"}>
            {city}
          </Heading>
          <IconButton
            icon={<HiLocationMarker />}
            fontSize={"3xl"}
            m={2}
            variant={"ghost"}
          />
        </Flex>
        <Temperature data={data.temp} />
        <Image
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          width="36"
          alignself={"center"}
        />
        <Text
          pb={{ sm: 1, md: 1, lg: 3 }}
          textTransform={"capitalize"}
          fontSize="2xl"
          fontWeight="500"
        >
          {data.weather[0].description}
        </Text>
      </VStack>
    </Box>
  );
}
