import { useEffect, useState } from "react"

interface Project {
    id: number;
    title: string;
    description: string;
    github: string | undefined;
    showcase: string | undefined;
    image: string | undefined;
}

export const useProjects = () => {
    const [data, setData] = useState<Project[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch('http://api.philiploebl.online/portfolio/projekte');
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