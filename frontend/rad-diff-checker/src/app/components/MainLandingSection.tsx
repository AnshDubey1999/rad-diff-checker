import React from "react";
import styles from "./MainLandingSection.module.css";
import { Text } from "@geist-ui/core";

const LandingAnimation = () => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.firstWordDiv}>
        <div className={styles.commonWordDiv}>
          <Text h1 className={styles.mainWord}>
            Upload.
          </Text>
          <Text h1 className={styles.wordOverlay}>
            Upload.
          </Text>
        </div>
      </div>
      <div className={styles.secondWordDiv}>
        <div className={styles.commonWordDiv}>
          <Text h1 className={styles.mainWord}>
            Diff.
          </Text>
          <Text h1 className={styles.wordOverlay}>
            Diff.
          </Text>
        </div>
      </div>
      <div className={styles.thirdWordDiv}>
        <div className={styles.commonWordDiv}>
          <Text h1 className={styles.mainWord}>
            Act.
          </Text>
          <Text h1 className={styles.wordOverlay}>
            Act.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default LandingAnimation;
