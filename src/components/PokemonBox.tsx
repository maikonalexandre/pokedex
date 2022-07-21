import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { PokemonContext } from "../Context/PokemonContext";
import { TitleInput } from "./Form/TitleInput";
import { ImagePokemon } from "./ImagePokemon";
import { SearchPokemon } from "./SearchPokemon";

export function PokemonBox() {
  const { pokemons, alterStatePokemon } = useContext(PokemonContext);


  return (
    <Stack direction="column" w="100%" spacing="4" p="4">
      <TitleInput text={pokemons.name ?? 'Pokemon'} align="center" color={"blue.50"} />

      <ImagePokemon />

      <TitleInput
        text={`#${pokemons.order ?? '000'} Seed Pokemon`}
        align="end"
        color={"white"}
      />

      <SearchPokemon />

      <Stack direction="row" w="100%">
        <Button
          w="50%"
          colorScheme="teal"
          borderRadius="16"
          onClick={() => {
            alterStatePokemon(-1);
          }}
        >
          Previous
        </Button>
        <Button
          w="50%"
          colorScheme="whatsapp"
          borderRadius="16"
          onClick={() => {
            alterStatePokemon(1);
          }}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
}

// order: 1
// types
