"use client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import styles from "./page.module.css";
import React, { useEffect, useRef } from "react";
import DiffCheckForm from "./components/DiffCheckForm";
import LandingAnimation from "./components/MainLandingSection";
import { Text, useToasts } from "@geist-ui/core";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

const Home = () => {
  const ref = useRef<LoadingBarRef | null>(null);

  return (
    <main className={styles.main}>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
      <LoadingBar color="#FF4D4D" ref={ref} />
      <LandingAnimation />
      <Text h2 className={styles.subtitle} type="secondary">
        Welcome to RadDiffChecker!
      </Text>
      <DiffCheckForm loadingBarRef={ref} />
    </main>
  );
};

export default Home;
