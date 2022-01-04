import { Text, Image, Flex } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import seta from "../src/assets/seta.svg";
import { SideMenu } from "../src/components/SideMenu";
import { Homepage } from "../src/components/Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nery Lindo</title>
        <meta name="description" content="Neriolando Dantas da Costa Junior" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex bgColor="#E5E5E5" width="100%">
        <SideMenu />
        <Homepage />
      </Flex>
    </>
  );
}
