import { Flex, Stack } from "@chakra-ui/react";
import { GetServerSideProps } from "next/types";
import { api } from "../api/api";
import { InfoBox } from "../components/InfoBox";
import { PokemonBox } from "../components/PokemonBox";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Stack
        direction="row"
        w="55vw"
        minH="60vh"
        bg="red.500"
        borderRadius="8"
        borderRight="8px"
        borderBottom="8px"
        borderColor="blackAlpha.300"
      >
        <PokemonBox/>
        <InfoBox />
      </Stack>
    </Flex>
  );
};
