import {
  background,
  Box,
  Flex,
  Text,
  Image,
  InputGroup,
  Button,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import logologin from "../../src/assets/logo-login.svg";
import gradientlogin from "../../src/assets/gradient-login.svg";
import arrowright from "../../src/assets/arrow-right.svg";
import React from "react";

export default function Page() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box width="100%" h="100vh" bgColor="#5965E0">
      <Flex height="100%">
        <Box height="100%">
          <Image src={gradientlogin.src} height="80%" marginTop="15%" />
        </Box>
        <Flex direction="column" marginLeft="120px" justifyContent="center">
          <Box>
            <Image src={logologin.src} width="360px" marginBottom="100px" />
          </Box>
          <Text
            width="191px"
            height="46px"
            fontSize="36px"
            color="white"
            marginBottom="50px"
          >
            Bem-vindo
          </Text>
          <Box>
            <InputGroup
              bg="linear-gradient(90deg, #4953B8 0%, rgba(73, 83, 184, 0.2) 100%)"
              borderRadius="5px 0 0 5px"
            >
              <Input
                border="0"
                w="340px"
                h="80px"
                pr="4.5rem"
                type="text"
                color="white"
                placeholder="Digite seu username"
              />
              <InputRightElement width="80px" h="80px" p="0">
                <Button
                  rightIcon={<Image src={arrowright.src} w="24px" />}
                  h="100%"
                  w="100%"
                  bgColor="#4953B8"
                  borderRadius="0 5px 5px 0"
                  onClick={handleClick}
                  _hover={{ bg: "#4CD62B" }}
                  as="a"
                  href="/"
                ></Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
