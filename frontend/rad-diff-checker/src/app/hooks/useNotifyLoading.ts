import { useEffect } from "react";
import { LoadingBarRef } from "react-top-loading-bar";

type UseNotifyLoadingProps = {
    isLoading: boolean;
    loadingBarRef: React.MutableRefObject<LoadingBarRef | null>;
};

export const useNotifyLoading = ({isLoading, loadingBarRef}: UseNotifyLoadingProps) => {
    useEffect(() => {
        if (isLoading) {
          loadingBarRef.current?.continuousStart();
        } else {
          loadingBarRef.current?.complete();
        }
      }, [loadingBarRef, isLoading]);
}