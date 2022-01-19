import { Box, Flex, Stack, Text } from "@chakra-ui/react";

export function Leaderboard() {
  return (
    <Flex
      flex="auto"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
    >
      <Stack w="960px" h="100%" color="red">
        <Text
          fontWeight="600px"
          fontSize="36px"
          textAlign="start"
          marginTop="40px"
        >
          Leaderboard
        </Text>
        <Flex w="100%">
          <Text
            fontSize="14px"
            fontWeight="bold"
            marginTop="40px"
            marginBottom="24px"
          >
            POSIÇÃO
          </Text>
          <Text
            fontSize="14px"
            fontWeight="bold"
            marginLeft="35px"
            marginTop="40px"
            marginBottom="24px"
          >
            USUÁRIO
          </Text>
          <Text
            fontSize="14px"
            fontWeight="bold"
            marginTop="40px"
            marginBottom="24px"
            marginLeft="467px"
          >
            DESAFIO
          </Text>
          <Text
            fontSize="14px"
            fontWeight="bold"
            marginTop="40px"
            marginBottom="24px"
            marginLeft="118px"
          >
            EXPERIÊNCIA
          </Text>
        </Flex>
        <Box
          w="100%"
          h="96px"
          bg="red"
          marginTop="24px"
          borderRadius="10px"
        ></Box>
      </Stack>
    </Flex>
  );
}
