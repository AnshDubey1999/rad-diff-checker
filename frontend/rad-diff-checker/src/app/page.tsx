"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import DiffCheckForm from "./components/DiffCheckForm";
import LandingAnimation from "./components/MainLandingSection";
import { useAtomValue } from "jotai";
import { Text } from "@geist-ui/core";

const Home = () => {
  return (
    <main className={styles.main}>
      <LandingAnimation />
      <Text h2 className={styles.subtitle} type="secondary">
        Welcome to RadDiffChecker!
      </Text>
      <DiffCheckForm />
    </main>
  );
};

export default Home;
