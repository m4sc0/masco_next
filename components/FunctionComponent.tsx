"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

export default function FunctionComponent() {
    useEffect(() => {
        notifyInfo('This site is still under development. Please be patient. Thank you <3');
    }, []);

    return (
        <></>
    );
}

export const notifyInfo = (text: string) => {
    toast.info(text, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}

export const notifyError = (text: string) => {
    toast.error(text, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    });
}

export const notifyWarn = (text: string) => {
    toast.warn(text, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
    })
}