import { useEffect, useState } from "react";

interface Liste {
    id: number;
    name: string;
    value: number;
}

export const useStrichlisten = () => {
    const [data, setData] = useState<Liste[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                // const res = await fetch('https://api.philiploebl.online/strichliste/info');
                const res = await fetch('http://localhost:8080/strichliste/info');
                if (!res.ok) {
                    throw new Error('HTTP Error! status: ' + res.status);
                }
                const data = await res.json();
                setData(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, isLoading, error };
}