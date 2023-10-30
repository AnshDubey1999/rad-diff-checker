import { Template } from "@/api/api";
import { useEffect } from "react";

type UseNotifySuccessProps = {
    isSuccess: boolean;
    data: Template | undefined;
    router: any;
}

export const useNotifySuccess = ({ isSuccess, data, router }: UseNotifySuccessProps) => {
    useEffect(() => {
        if (isSuccess && data?.templateText) {
          router.push("/diffcheck");
        }
      }, [isSuccess, router, data]);
};