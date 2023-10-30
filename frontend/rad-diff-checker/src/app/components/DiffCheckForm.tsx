"use client";
import styles from "./DiffCheckForm.module.css";
import React, { useState, useCallback, useEffect } from "react";
import { Input, Text, Textarea, Button, useToasts } from "@geist-ui/core";
import { useAtomValue, useSetAtom } from "jotai";
import { getTemplateAtom, reportIdAtom, reportTextAtom } from "@/atoms/atoms";
import { LoadingBarRef } from "react-top-loading-bar";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type DiffCheckFormProps = {
  loadingBarRef: React.MutableRefObject<LoadingBarRef | null>;
};

const DiffCheckForm = ({ loadingBarRef }: DiffCheckFormProps) => {
  /*
   * Constants
   */
  const setReportIdAtom = useSetAtom(reportIdAtom);
  const setReportTextAtom = useSetAtom(reportTextAtom);
  const [reportId, setReportId] = useState<string>("");
  const [reportText, setReportText] = useState<string>("");
  const templateAtomStatus = useAtomValue(getTemplateAtom);
  const { isLoading, isError, isSuccess, data } = templateAtomStatus;
  const router = useRouter();

  /*
   * Hooks
   */
  useEffect(() => {
    setReportIdAtom(undefined);
    setReportTextAtom(undefined);
  }, [setReportIdAtom, setReportTextAtom]);

  useEffect(() => {
    if (isLoading) {
      loadingBarRef.current?.continuousStart();
    } else {
      loadingBarRef.current?.complete();
    }
  }, [loadingBarRef, isLoading]);

  useEffect(() => {
    if (isError) {
      toast.error("Error finding template!");
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess && data?.templateText) {
      router.push("/diffcheck");
    }
  }, [isSuccess, router, data]);

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
    },
    [setReportIdAtom, setReportTextAtom]
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
