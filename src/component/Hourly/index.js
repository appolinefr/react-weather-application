import React from "react";

import { VStack, Text, Image } from "@chakra-ui/react";

export default function ForecastDay(props) {
  function temperature() {
    let temp = Math.round(props.data.temp);
    return `${temp}`;
  }

  function time() {
    let time = new Date(props.data.dt * 1000);
    let hour = time.getHours();
    return hour;
  }

  return (
    <VStack alignItems="center" spacing="20px">
      <Text color={"#FD56A6"} fontSize={"lg"} fontWeight={"500"}>
        {`${time()}:00`}
      </Text>
      <Image
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt={props.data.weather[0].description}
        width="26"
      ></Image>
      <Text fontWeight="500" color={"gray.500"} fontSize={"lg"}>
        {temperature()} °
      </Text>
    </VStack>
  );
}
