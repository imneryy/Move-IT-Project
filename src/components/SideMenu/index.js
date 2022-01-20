import { Box, Stack, Image, Flex, Button, Link } from "@chakra-ui/react";

import React, { useEffect } from "react";
import logoSideMenu from "../../assets/logo-sidemenu.svg";
import { HomeIcon, LeaderBoardIcon } from "../UI/icons";

export function SideMenu({
  ClickButton,
  ClickButtonL,
  setClickButton,
  setClickButtonL,
}) {
  return (
    <>
      <Stack
        position="sticky"
        top="0"
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
            height={ClickButton ? "100%" : "0"}
            transition="height 0.3s"
            left="0"
            borderRadius="0 15px 15px 0"
          ></Flex>
          <Link
            onClick={() => {
              setClickButton(true);
              setClickButtonL(false);
            }}
          >
            <HomeIcon isOpen={ClickButton} />
          </Link>
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
            height={ClickButtonL ? "100%" : "0"}
            transition="height 0.3s"
            left="0"
            borderRadius="0 15px 15px 0"
          ></Flex>
          <Link
            onClick={() => {
              setClickButtonL(true);
              setClickButton(false);
            }}
          >
            <LeaderBoardIcon isOpen={ClickButtonL} />
          </Link>
        </Flex>
      </Stack>
    </>
  );
}
