import { useEffect } from "react";

const useTestHook = () => {
    useEffect(() => {
        console.log("useTest");
    }, []);
};
export default useTestHook;
