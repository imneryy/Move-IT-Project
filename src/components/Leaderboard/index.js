import { Box, Flex, Grid, grid, Stack, Text } from "@chakra-ui/react";
import { ArrowUpName, FotoDiegoFernandes } from "../UI/icons";
import { LbItemsArray } from "./lb-items-array";

export function Leaderboard() {
  return (
    <Flex flex="auto" alignItems="center" flexDirection="column">
      <Stack w="960px" h="100%">
        <Text
          color="black"
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

        {LbItemsArray.map((item) => {
          return (
            <Grid w="100%" h="96px" gridTemplateColumns="72px auto" gap="4px">
              <Flex
                bgColor="white"
                borderRadius="5px 0px 0px 5px"
                alignItems="center"
                justifyContent="space-around"
              >
                <Text fontSize="24px" fontWeight="500">
                  {item.position}
                </Text>
              </Flex>
              <Flex
                bgColor="white"
                borderRadius="0 5px 5px 0"
                justifyContent="space-between"
                alignItems="center"
              >
                <Flex alignItems="center">
                  {item.image}
                  <Box marginLeft="17px">
                    <Text>{item.name}</Text>
                    <Flex alignItems="center">
                      <ArrowUpName />
                      <Text marginLeft="9px">Level {item.level}</Text>
                    </Flex>
                  </Box>
                </Flex>
                <Flex>
                  <Grid
                    w="100%"
                    h="96px"
                    gridTemplateColumns="182px"
                    alignItems="center"
                  >
                    <Text>
                      <Text color="#5965E0" as="spam">
                        {item.desafios}
                      </Text>{" "}
                      completados
                    </Text>
                  </Grid>
                  <Grid
                    w="100%"
                    h="96px"
                    gridTemplateColumns="149px"
                    alignItems="center"
                  >
                    <Text>
                      <Text alignItems="start" color="#5965E0" as="spam">
                        {item.experiência}
                      </Text>{" "}
                      xp
                    </Text>
                  </Grid>
                </Flex>
              </Flex>
            </Grid>
          );
        })}
      </Stack>
    </Flex>
  );
}
