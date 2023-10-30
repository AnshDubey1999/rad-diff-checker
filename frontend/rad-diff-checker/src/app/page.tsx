"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import DiffCheckForm from "./components/DiffCheckForm";
import LandingAnimation from "./components/MainLandingSection";
import { useAtomValue } from "jotai";

const Home = () => {
  return (
    <main className={styles.main}>
      <LandingAnimation />
      <DiffCheckForm />
    </main>
  );
};

export default Home;
