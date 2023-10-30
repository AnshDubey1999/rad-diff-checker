"use client";
import { Text } from "@geist-ui/core";
import styles from "./page.module.css";
import { getTemplateAtom, reportTextAtom } from "@/atoms/atoms";
import { useAtomValue } from "jotai";
import React from "react";
import DiffViewer, {
  DiffMethod,
  ReactDiffViewerStylesOverride,
} from "react-diff-viewer-continued";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const diffViewerStyles: ReactDiffViewerStylesOverride = {
  variables: {
    dark: {
      diffViewerBackground: "#242526",
      emptyLineBackground: "#242526",
    },
  },
};

const DiffCheckPage = () => {
  const reportText = useAtomValue(reportTextAtom);
  const templateStatus = useAtomValue(getTemplateAtom);
  const router = useRouter();

  if (templateStatus.isLoading || templateStatus.isError) return null;

  const template = templateStatus.data;

  return (
    <div className={styles.container}>
      <Text h1 mb={1}>
        RadDiffChecker
      </Text>
      <div className={styles.diffContainer}>
        <DiffViewer
          oldValue={reportText}
          newValue={template?.templateText}
          splitView={true}
          useDarkTheme
          compareMethod={DiffMethod.WORDS}
          styles={diffViewerStyles}
        />
      </div>
    </div>
  );
};

export default DiffCheckPage;
