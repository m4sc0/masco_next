import { useState, useEffect } from "react";

interface Skill {
    id: number;
    name: string;
}

export const useSkills = () => {
    const [data, setData] = useState<Skill[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch('http://api.philiploebl.online/portfolio/skills');
                // const res = await fetch('http://localhost:8080/portfolio/skills');
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