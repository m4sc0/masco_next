import { useEffect, useState } from "react";

interface SandboxProject {
    id: number;
    title: string;
    endpoint: string;
    description: string | undefined;
    image: string | undefined;
}

export const useSandboxProjects = () => {
    const [data, setData] = useState<SandboxProject[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch('https://api.philiploebl.online/sandbox/projekte');
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