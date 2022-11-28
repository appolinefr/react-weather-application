import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import Weather from "./component/Weather";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Weather placeHolder="Melbourne"/>
      </div>
    </ChakraProvider>
  );
}

export default App;
