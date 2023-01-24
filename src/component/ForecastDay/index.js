import React from "react";

import { VStack, Text, Image, useColorModeValue } from "@chakra-ui/react";

export default function ForecastDay(props) {
  const text = useColorModeValue("#155264", "white");
  const data = useColorModeValue("#FD9A3C", "gray.400");
  const dataLight = useColorModeValue("#FD6F3B", "gray.300");

  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  return (
    <VStack alignItems="center" spacing="20px">
      <Text color={text} fontSize={"xl"} fontWeight={"700"}>
        {day()}
      </Text>
      <Image
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt={props.data.weather[0].description}
        width="26"
      />
      <Text fontWeight="600" color={data} fontSize={"xl"}>
        {minTemperature()} ° |{" "}
        <Text as="span" color={dataLight}>
          {maxTemperature()} °
        </Text>
      </Text>
    </VStack>
  );
}
