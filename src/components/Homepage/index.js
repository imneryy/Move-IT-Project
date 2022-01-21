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
import { useState } from "react";
import {
  ArrowButtonRight,
  ArrowRightCiclo,
  ArrowUpName,
  arrowBoxRight,
  ArrowBoxRight,
} from "../UI/icons";

export function Homepage() {
  // const [unitSecond, setUnitSecond] = useState(0);
  // const [tenSecond, setTenSecond] = useState(0);
  // const [unitMinute, setUnitMinute] = useState(0);
  // const [tenMinute, setTenMinute] = useState(0);

  // setTimeout(() => {
  //   if (unitSecond === 9) {
  //     setUnitSecond(0);
  //   } else {
  //     setUnitSecond(unitSecond + 1);
  //   }
  // }, 1000);

  // setTimeout(() => {
  //   if (tenSecond === 5) {
  //     setTenSecond(0);
  //   } else {
  //     setTenSecond(tenSecond + 1);
  //   }
  // }, 10050);

  // setTimeout(() => {
  //   if (unitMinute === 9) {
  //     setUnitMinute(0);
  //   } else {
  //     setUnitMinute(unitMinute + 1);
  //   }
  // }, 60050);

  // setTimeout(() => {
  //   if (tenMinute === 6) {
  //     setTenMinute(0);
  //   } else {
  //     setTenMinute(tenMinute + 1);
  //   }
  // }, 600050);

  return (
    <>
      <Flex
        flex="auto"
        height="100vh"
        bgColor="#E5E5E5"
        justifyContent="space-evenly"
      >
        <Stack width="390px" marginTop="200px" marginLeft="184px">
          <Box>
            <Text
              fontSize="24px"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
            >
              Neriolando Junior
            </Text>
            <Flex marginTop="9px" alignItems="center">
              <ArrowUpName />
              <Text
                fontSize="16px"
                marginLeft="9px"
                fontFamily="Inter, sans-serif"
                fontWeight="normal"
              >
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
              <Text
                fontSize="18px"
                fontFamily="Inter, sans-serif"
                fontWeight="500"
              >
                Desafios completados
              </Text>
              <Text
                fontSize="18px"
                fontFamily="Inter, sans-serif"
                fontWeight="500"
              >
                00
              </Text>
            </Flex>
          </Box>
          <Flex w="100%">
            <Box
              w="88px"
              h="144px"
              bg="white"
              marginTop="56px"
              borderRadius="5px 0 0 5px"
              position="relative"
            >
              <Text
                color="#2E384D"
                fontSize="120px"
                fontFamily="
                Rajdhani, sans-serif"
                fontStyle="normal"
                fontWeight="600"
                textAlign="center"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -52%)"
              >
                2
              </Text>
            </Box>
            <Box
              w="88px"
              h="144px"
              bg="white"
              marginTop="56px"
              marginLeft="2px"
              borderRadius="0 5px 5px 0"
              position="relative"
            >
              <Text
                color="#2E384D"
                fontSize="120px"
                fontFamily="
                Rajdhani, sans-serif"
                fontWeight="600"
                textAlign="center"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -52%)"
              >
                5
              </Text>
            </Box>
            <Box w="37px" h="144px" marginTop="56px" marginLeft="0">
              <Stack alignItems="center">
                <Box
                  w="13px"
                  h="20px"
                  bg="#2E384D"
                  borderRadius="3px"
                  marginTop="35px"
                ></Box>
                <Box
                  w="18px"
                  h="18px"
                  marginTop="0"
                  marginBottom="0"
                  borderRadius="5px"
                ></Box>
                <Box w="13px" h="20px" bg="#2E384D" borderRadius="3px"></Box>
              </Stack>
            </Box>
            <Box
              w="88px"
              h="144px"
              bg="white"
              marginTop="56px"
              marginLeft="0"
              borderRadius="5px 0 0 5px"
              position="relative"
            >
              <Text
                color="#2E384D"
                fontSize="120px"
                fontFamily="
                Rajdhani, sans-serif"
                fontWeight="600"
                textAlign="center"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -52%)"
              >
                0
              </Text>
            </Box>
            <Box
              w="88px"
              h="144px"
              bg="white"
              marginTop="56px"
              marginLeft="2px"
              borderRadius="0 5px 5px 0"
              position="relative"
            >
              <Text
                color="#2E384D"
                fontSize="120px"
                fontFamily="
                Rajdhani, sans-serif"
                fontWeight="600"
                textAlign="center"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -52%)"
              >
                0
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Button
              fontFamily="Inter, sans-serif"
              fontWeight="600"
              rightIcon={<ArrowRightCiclo />}
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
          </Flex>
        </Stack>
        <Stack
          w="468px"
          h="522px"
          marginTop="200px"
          bg="white"
          marginRight="184px"
          marginLeft="100px"
          borderRadius="5px"
          color="#666666"
        >
          <Box width="100%" fontFamily="Inter, sans-serif" fontWeight="500">
            <Text textAlign="center" marginTop="110px" fontSize="24px">
              Inicie um ciclo
            </Text>
            <Text textAlign="center" fontSize="24px">
              para receber um desafio
            </Text>
          </Box>
          <Flex w="100%" justifyContent="center" marginTop="64px !important">
            <ArrowBoxRight />
          </Flex>
          <Box width="100%" fontFamily="Inter, sans-serif" fontWeight="400">
            <Text textAlign="center" marginTop="30px" fontSize="16px">
              Avance de level completando
            </Text>
            <Text textAlign="center" fontSize="16px">
              os desafios.
            </Text>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
