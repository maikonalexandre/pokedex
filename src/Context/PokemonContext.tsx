import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../api/api";

interface PokemonProviderProps {
  children: ReactNode;
}
type pokemonsTypes = {
  name: string;
  order: string;
  id: number;
};

interface PokemonContextProps {
  pokemons: pokemonsTypes[];
  alterStatePokemon(value: number | string): void;
  pokemon: string | number;
}

export const PokemonContext = createContext<PokemonContextProps>(
  {} as PokemonContextProps
);

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState<string | number>(1);

  function alterStatePokemon(value: number | string) {
    if (typeof value == "string") {
      setPokemon(value);
    } else if (value == -1 && pokemon == 1) {
      setPokemon(151);
    } else if (pokemon == 151 && value == 1) {
      setPokemon(1);
    } else if (typeof pokemon === "number") {
      setPokemon(Number(pokemon) + Number(value));
    } else {
      setPokemon(1);
    }
  }

  useEffect(() => {
    setPokemons([]);
    const response = api
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => setPokemons(response.data));
  }, [pokemon]);

  return (
    <PokemonContext.Provider value={{ pokemons, alterStatePokemon, pokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}
