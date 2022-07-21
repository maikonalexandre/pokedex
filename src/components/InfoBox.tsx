import { Box, Button, theme, Stack, Text } from "@chakra-ui/react";
import { AndroidLogo } from "phosphor-react";
import { useContext } from "react";
import { PokemonContext } from "../Context/PokemonContext";

export function InfoBox() {
  const { pokemons } = useContext(PokemonContext);
  console.log(pokemons);


  let habilidades;
  let tipos;
  let cor; 

  if(pokemons.length == 0){
    console.log('yes');
  }else{
  habilidades = pokemons.abilities; 
  tipos = pokemons.types;
  }

  return (
    <Box w="100%" bg="" p="4">
      <Stack bg="blue.50" w="100%" h="100%" borderRadius="8" p="4" border="2px">
        <Text
          align="center"
          fontWeight="semibold"
          fontSize="md"
          borderBottom="4px"
          borderBottomColor="white"
        >
          Info
        </Text>
        <Box bg="white" borderRadius="8">
          <Text align="center" fontSize="xs">
            Type
          </Text>
          <Stack direction="row" justifyContent="center" p="4">

           
          {tipos && tipos.map(elemento =>  <Button w="25%" bg={`${elemento.type.name}`} _hover='none' color={`${elemento.type.name}bg`}   borderRadius="16">
              {elemento.type.name}
            </Button>)}

          </Stack>
        </Box>

        <Stack bg="white" borderRadius="8" paddingBlock="4">
          <Text align="center" fontSize="xs">
            Abilities
          </Text>
          {habilidades && habilidades.map(elemento => <Text align="center" fontWeight="semibold">
            {elemento.ability.name}
            </Text>)}
        </Stack>

        <Stack align="center" pt="4">
          <AndroidLogo size={48} />
        </Stack>
      </Stack>
    </Box>
  );
}
