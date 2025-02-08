import {useEffect, useState} from "react";


export const useResize = (callback?: any) => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [height, setHeight] = useState<number>(window.innerHeight);
    let RESIZE_TO: any = null;
    useEffect(() => {
        const onResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
            callback?.();
        };
        const onResizeDebounced = () => {
            if (RESIZE_TO) {
                clearTimeout(RESIZE_TO);
            }
            RESIZE_TO = setTimeout(() => {
                onResize();
            }, 200);
        }
        window.addEventListener("resize", onResizeDebounced);
        return () => {
            window.removeEventListener("resize", onResizeDebounced);
        };
    }, []);
    return [width, height];
}
