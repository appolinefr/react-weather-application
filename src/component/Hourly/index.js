import React from "react";

import { VStack, Text, Image, useColorModeValue } from "@chakra-ui/react";

export default function Hourly({ data, timezone }) {
  const text = useColorModeValue("gray.800", "white");
  const dark = useColorModeValue("gray.600", "gray.400");
  function temperature() {
    let temp = Math.round(data.temp);
    return `${temp}`;
  }

  function time() {
    let time = new Date(data.dt * 1000);
    let hour = time.getHours();
    return hour;
  }

  return (
    <VStack alignItems="center" spacing="20px">
      <Text color={text} fontSize={"lg"} fontWeight={"500"}>
        {time()}:00
      </Text>
      <Image
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        width="26"
      ></Image>
      <Text fontWeight="500" color={dark} fontSize={"lg"}>
        {temperature()} °
      </Text>
    </VStack>
  );
}
