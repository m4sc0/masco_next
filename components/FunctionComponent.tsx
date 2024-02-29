import { toast } from "react-toastify";

export default function FunctionComponent() {
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