import React from "react";

import {
  FormControl,
  Input,
  Box,
  VStack,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Flex,
} from "@chakra-ui/react";

import Forecast from "./Forecast";

export default function Weather() {
  return (
    <Box as={Container} maxW="7xl" mt={6} p={4}>
      <Box as={Container} maxW="7xl" mt={10} p={4} backgroundColor="grey">
        <FormControl>
          <Flex justifyContent={"center"}>
            <Input
              type="search"
              placeholder="Search for a city..."
              margin={2}
              maxWidth={"500px"}
            />
            <Input type="submit" margin={2} maxWidth={"120px"} />
          </Flex>
        </FormControl>
      </Box>
      <Box as={Container} maxW="7xl" mt={10} p={4} backgroundColor="red">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="center" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Melbourne
              </chakra.h2>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack alignItems="flex-end" spacing="20px"></VStack>
          </GridItem>
        </Grid>
      </Box>
      <Divider mt={12} mb={12} />
      <Box as={Container} maxW="7xl" mt={10} p={4} backgroundColor="blue">
        <Forecast />
      </Box>
    </Box>
  );
}
