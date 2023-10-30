"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { useAtomValue } from "jotai";
import { getTemplateAtom } from "@/atoms/atoms";
import DiffCheckForm from "./components/DiffCheckForm";

const Home = () => {
  /* This gets the jotai atom value
   * In this case, the status of the template response from the server
   * (loading, success, error, data - if it loaded successfully, etc.)
   * This also enables caching of the results till unmounts/report id changes */
  const templateStatus = useAtomValue(getTemplateAtom);

  return (
    <main className={styles.main}>
      <DiffCheckForm />
    </main>
  );
};

export default Home;
