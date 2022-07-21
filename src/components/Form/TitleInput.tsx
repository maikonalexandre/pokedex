import { Box, Flex, ResponsiveValue, Text, TextProps } from "@chakra-ui/react";

interface TitleInputProps extends TextProps{
  text: string;
}

export function TitleInput({text, ...rest}: TitleInputProps) {
  return(
    <Flex w='100%'>
    <Box w='100%' >
      <Text w='100%'  border="2px" bg={rest.color} align={rest.align} p='1' borderRadius='8'>{text}</Text>
    </Box>
  </Flex>
  )
}