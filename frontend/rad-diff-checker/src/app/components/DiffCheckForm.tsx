"use client";
import styles from "./DiffCheckForm.module.css";
import React, { useState, useCallback } from "react";
import { Input, Text, Textarea, Button } from "@geist-ui/core";
import { useAtomValue, useSetAtom } from "jotai";
import { getTemplateAtom, reportIdAtom, reportTextAtom } from "@/atoms/atoms";
import { useRouter } from "next/navigation";

const DiffCheckForm = () => {
  /*
   * Constants
   */
  const setReportIdAtom = useSetAtom(reportIdAtom);
  const setReportTextAtom = useSetAtom(reportTextAtom);
  const { isLoading, isSuccess, isError, data } = useAtomValue(getTemplateAtom);
  const [reportId, setReportId] = useState<string>("");
  const [reportText, setReportText] = useState<string>("");

  /*
   * Hooks
   */
  const router = useRouter();

  /*
   * Function definitions
   */
  const handleReportIdChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setReportId(e.target.value);
    },
    []
  );

  const handleReportTextChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setReportText(e.target.value);
    },
    []
  );

  const handleSubmitClick = useCallback(
    (reportId: string, reportText: string) => {
      setReportIdAtom(reportId);
      setReportTextAtom(reportText);
      router.push(`/diffcheck`);
    },
    [setReportIdAtom, setReportTextAtom, router]
  );

  return (
    <div className={styles.container}>
      <Text className={styles.formLabel}>Report Id</Text>
      <Input
        crossOrigin={null}
        placeholder="eg. 1234"
        value={reportId}
        onChange={handleReportIdChange}
        width={"100%"}
        clearable
      />
      <Text className={styles.formLabel}>Report description</Text>
      <Textarea
        placeholder="Enter the report text here..."
        width={"100%"}
        height={"60%"}
        value={reportText}
        onChange={handleReportTextChange}
      />
      <div className={styles.buttonContainer}>
        <Button
          auto
          className={styles.gradientButton}
          mt={"10px"}
          onClick={() => handleSubmitClick(reportId, reportText)}
          disabled={!reportId || !reportText}
        >
          Find Difference
        </Button>
      </div>
    </div>
  );
};

export default DiffCheckForm;