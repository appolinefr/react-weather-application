import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import Weather from "./component/Weather";

function App() {
  return (
    <ChakraProvider >
        <Weather placeHolder="Paris"/>
    </ChakraProvider>
  );
}

export default App;
