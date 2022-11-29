import React from "react";

import { VStack, Text, Image } from "@chakra-ui/react";

export default function ForecastDay(props) {
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
      <Text color={"#FD56A6"}>{day()}</Text>
      <Image
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt={props.data.description}
        width="26"
      ></Image>
      <Text>
        {minTemperature()} ° | {maxTemperature()} °
      </Text>
    </VStack>
  );
}
