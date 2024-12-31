/*
'use client';
import { useState } from "react";
import useEventListener from "./useEventListener";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ width: window?.innerWidth, height: window?.innerHeight })

    useEventListener("resize", () => {
        setWindowSize({ width: window?.innerWidth, height: window?.innerHeight })
    })

    return windowSize
}
*/

'use client';
import { useState, useEffect } from "react";
import useEventListener from "./useEventListener";

export default function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures this only runs on mount

    return windowSize;
}
