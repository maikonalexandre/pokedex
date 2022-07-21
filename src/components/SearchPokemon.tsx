import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { PokemonContext } from "../Context/PokemonContext";

export function SearchPokemon() {
  const { alterStatePokemon } = useContext(PokemonContext);

  const [searchedPokemon, setSearchedPokemon] = useState("1");

  let time: NodeJS.Timeout;

  function inputChangevalue(event: ChangeEvent<HTMLInputElement>) {
    clearTimeout(time);

    time = setTimeout(() => {
      setSearchedPokemon(event.target.value.toLowerCase());
    }, 1000);
  }

  useEffect(() => {
    //mover o timer pra cá
    if (searchedPokemon === "") {
      alterStatePokemon("1");
    } else {
      alterStatePokemon(searchedPokemon);
    }
  }, [searchedPokemon]);

  return (
    <InputGroup w="100%" bg="white" borderRadius="8" border="2px">
      <InputLeftElement>
        <Icon as={MagnifyingGlass} />
      </InputLeftElement>
      <Input
        border="none"
        outline="none"
        placeholder="Search by name"
        onChange={(event) => inputChangevalue(event)}
      />
    </InputGroup>
  );
}
