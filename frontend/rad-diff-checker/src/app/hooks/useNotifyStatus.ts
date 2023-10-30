import { Template } from "@/api/api";
import { ToastInput } from "@geist-ui/core";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useEffect } from "react";
import { LoadingBarRef } from "react-top-loading-bar";

type UseNotifyStatusProps = {
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
    router: AppRouterInstance;
    setToast: (toast: ToastInput) => void;
    loadingBarRef: React.MutableRefObject<LoadingBarRef | null>;
    data: Template | undefined;
};

const useNotifyStatus = ({ isSuccess, isError, isLoading, router, setToast, loadingBarRef, data }: UseNotifyStatusProps) => {
    useEffect(() => {
        if (isLoading && loadingBarRef.current) {
            loadingBarRef.current.continuousStart();
        }
        else if (isSuccess && data?.templateText) {
            loadingBarRef.current?.complete();
            router.push(`/diffcheck`);
        } 
        else if (isSuccess && !data?.templateText) {
            // Just the initial data state, complete loading bar
            loadingBarRef.current?.complete();
        }
        else if (isError) {
            loadingBarRef.current?.complete();
            setToast({ text: 'Error finding report id.', delay: 2000 })
        }
    }, [isSuccess, isError, isLoading, router, setToast, loadingBarRef, data]);
};

export default useNotifyStatus;