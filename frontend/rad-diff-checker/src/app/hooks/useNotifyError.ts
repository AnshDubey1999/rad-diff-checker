import { useEffect } from "react";
import { toast } from "react-toastify";

type UseNotifyErrorProps = {
    isError: boolean;
}

export const useNotifyError = ({ isError }: UseNotifyErrorProps) => {
    useEffect(() => {
        if (isError) {
          toast.error("Error finding template!");
        }
      }, [isError]);
};
