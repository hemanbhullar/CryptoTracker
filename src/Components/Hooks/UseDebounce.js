import { useEffect } from "react";
import UseTimeout from "./UseTimeout"

export const useDebounce = (callback, delay, deps) => {
    const {reset, clear} = UseTimeout(callback, delay);

    useEffect(reset, [...deps, reset]);
    useEffect(clear, []);
}