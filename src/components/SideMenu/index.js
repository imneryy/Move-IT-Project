import { Box, Stack, Image, Flex, Button } from "@chakra-ui/react";
import logoSideMenu from "../../assets/logo-sidemenu.svg";
import { HomeIcon, LeaderBoardIcon } from "../UI/icons";

export function SideMenu() {
  return (
    <>
      <Stack
        position="relative"
        justifyContent="center"
        bg="linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
        height="100vh"
        width="110px"
      >
        <Flex
          position="absolute"
          width="100%"
          top="32px"
          left="0"
          justifyContent="center"
        >
          <Image src={logoSideMenu.src} width="48px" />
        </Flex>
        <Flex
          position="relative"
          width="100%"
          height="60px"
          alignItems="center"
          justifyContent="center"
          marginBottom="20px !important"
        >
          <Flex
            position="absolute"
            bgColor="#5965E0"
            width="5px"
            height="100%"
            left="0"
            borderRadius="0 15px 15px 0"
          ></Flex>
          <HomeIcon />
        </Flex>
        <Flex
          position="relative"
          width="100%"
          height="60px"
          alignItems="center"
          justifyContent="center"
          marginBottom="40px !important"
        >
          <Flex
            position="absolute"
            bgColor="#5965E0"
            width="5px"
            height="100%"
            left="0"
            borderRadius="0 15px 15px 0"
          ></Flex>
          <LeaderBoardIcon />
        </Flex>
      </Stack>
    </>
  );
}
