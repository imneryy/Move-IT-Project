import {
  Flex,
  Stack,
  Text,
  Box,
  GridItem,
  Grid,
  Button,
  Image,
} from "@chakra-ui/react";
import { arrowButtonRight, arrowRightCiclo, ArrowUpName } from "../UI/icons";

export function Homepage() {
  return (
    <Flex
      width="100%"
      height="100vh"
      bgColor="#E5E5E5"
      justifyContent="space-evenly"
    >
      <Stack width="390px" marginTop="200px" marginLeft="184px">
        <Box>
          <Text fontSize="24px">Neriolando Junior</Text>
          <Flex marginTop="9px" alignItems="center">
            <ArrowUpName />
            <Text fontSize="16px" marginLeft="9px">
              Level 1
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex
            justifyContent="space-between"
            marginTop="72px"
            height="44px"
            borderBottom="1px"
          >
            <Text fontSize="18px">Desafios completados</Text>
            <Text fontSize="18px">00</Text>
          </Flex>
        </Box>
        <Box>
          <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop="56px">
            <GridItem w="100%" h="144" bg="white" />
            <GridItem w="100%" h="144" bg="white" />
            <GridItem w="100%" h="144" bg="white" />
            <GridItem w="100%" h="144" bg="white" />
          </Grid>
        </Box>

        <Box>
          <Button
            rightIcon={<Image src={arrowRightCiclo.src} />}
            marginTop="32px"
            textColor="white"
            w="100%"
            h="80px"
            _hover={{ bg: "#5965E0" }}
            bg="#5965E0"
            borderRadius="5px"
          >
            Iniciar um ciclo
          </Button>
        </Box>
      </Stack>
      <Stack
        w="468px"
        h="500px"
        marginTop="200px"
        bg="white"
        marginRight="184px"
        marginLeft="100px"
        borderRadius="5px"
      >
        <Box></Box>
      </Stack>
    </Flex>
  );
}
