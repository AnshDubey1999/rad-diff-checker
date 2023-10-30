"use client";
import styles from "./DiffCheckForm.module.css";
import React, { useState, useCallback } from "react";
import { Input, Text, Textarea, Button } from "@geist-ui/core";
import { useSetAtom } from "jotai";
import { reportIdAtom } from "@/atoms/atoms";

const DiffCheckForm = () => {
  const setReportIdAtom = useSetAtom(reportIdAtom);
  const [reportId, setReportId] = useState<string>("");
  const [reportText, setReportText] = useState<string>("");

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
    },
    [setReportIdAtom]
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
          type="secondary"
          ghost
          mt={"10px"}
          onClick={() => handleSubmitClick(reportId, reportText)}
        >
          Check Difference
        </Button>
      </div>
    </div>
  );
};

export default DiffCheckForm;
