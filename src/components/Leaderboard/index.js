import { Box, Flex, Grid, grid, Stack, Text } from "@chakra-ui/react";
import { ArrowUpName, FotoDiegoFernandes } from "../UI/icons";
import { LbItemsArray } from "./lb-items-array";

export function Leaderboard() {
  return (
    <Flex
      flex="auto"
      alignItems="center"
      flexDirection="column"
      fontFamily="Inter, sans-serif"
    >
      <Stack w="960px" h="100%">
        <Text
          color="#2E384D"
          fontWeight="600px"
          fontSize="36px"
          textAlign="start"
          marginTop="40px"
          fontWeight="600"
        >
          Leaderboard
        </Text>
        <Flex w="100%">
          <Text
            color="#666666"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            fontSize="14px"
            marginTop="40px"
            marginBottom="24px"
          >
            POSIÇÃO
          </Text>
          <Text
            fontSize="14px"
            color="#666666"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            marginLeft="35px"
            marginTop="40px"
            marginBottom="24px"
          >
            USUÁRIO
          </Text>
          <Text
            fontSize="14px"
            color="#666666"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            marginTop="40px"
            marginBottom="24px"
            marginLeft="467px"
          >
            DESAFIO
          </Text>
          <Text
            fontSize="14px"
            color="#666666"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
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
                <Text
                  fontSize="24px"
                  fontFamily="Inter, sans-serif"
                  fontWeight="500"
                >
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
                    <Text fontFamily="Inter, sans-serif" fontWeight="600">
                      {item.name}
                    </Text>
                    <Flex alignItems="center">
                      <ArrowUpName />
                      <Text
                        marginLeft="9px"
                        fontFamily="Inter, sans-serif"
                        fontWeight="400"
                      >
                        Level {item.level}
                      </Text>
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
                    <Text fontFamily="Inter, sans-serif" fontWeight="400">
                      <Text
                        color="#5965E0"
                        as="spam"
                        fontFamily="Inter, sans-serif"
                        fontWeight="500"
                      >
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
                    <Text fontFamily="Inter, sans-serif" fontWeight="400">
                      <Text
                        alignItems="start"
                        color="#5965E0"
                        as="spam"
                        fontFamily="Inter, sans-serif"
                        fontWeight="400"
                      >
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
