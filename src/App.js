import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import Weather from "./component/Weather";

function App() {
  return (
    <ChakraProvider >
        <Weather placeHolder="Melbourne"/>
    </ChakraProvider>
  );
}

export default App;
