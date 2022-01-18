import { Text, Image, Flex } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import seta from "../src/assets/seta.svg";
import { SideMenu } from "../src/components/SideMenu";
import { Homepage } from "../src/components/Homepage";
import React from "react";
import { Leaderboard } from "../src/components/Leaderboard";

export default function Home() {
  const [ClickButton, setClickButton] = React.useState(true);
  const [ClickButtonL, setClickButtonL] = React.useState(false);

  return (
    <>
      <Flex bgColor="#E5E5E5" width="100%" fontFamily="Inter">
        <SideMenu
          ClickButton={ClickButton}
          ClickButtonL={ClickButtonL}
          setClickButton={setClickButton}
          setClickButtonL={setClickButtonL}
        />

        {ClickButton ? <Homepage /> : <Leaderboard />}
      </Flex>
    </>
  );
}
