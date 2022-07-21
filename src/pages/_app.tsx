import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { PokemonContext, PokemonProvider } from "../Context/PokemonContext";
import { theme } from "../style/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PokemonProvider>
        <Component {...pageProps} />
        </PokemonProvider>
    </ChakraProvider>
  );
}

export default MyApp;
