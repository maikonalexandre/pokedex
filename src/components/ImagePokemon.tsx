import { Box, Image, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { PokemonContext } from "../Context/PokemonContext";

export function ImagePokemon() {
  const { pokemons} = useContext(PokemonContext);  

  return (
    <Stack
      border="2px"
      h="50%"
      w="100%"
      bg="white"
      borderRadius="8"
      align="center"
      justify="center"
    >
      <Image
        h='90%'
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons.id}.png`}
        alt="Este pokemon ainda não foi catalogado"
      />
    </Stack>
  );
}
