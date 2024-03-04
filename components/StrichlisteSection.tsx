"use client";

import { useStrichlisten } from "@/hooks/useStrichlisten";
import { StrichlisteItem } from "./StrichlisteItem";

export const StrichlisteSection = () => {
    const { data, isLoading, error } = useStrichlisten();

    if (isLoading) {
        return (
            <div className="container mx-auto p-6">
                <h2 className="text-4xl font-bold text-start">Strichlisten</h2>
                <hr className="my-5" />
                <p className="text-center">Loading...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container mx-auto p-6">
                <h2 className="text-4xl font-bold text-start">Strichlisten</h2>
                <hr className="my-5" />
                <p className="text-center">Error fetching: {error}</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-4xl font-bold text-start">Strichlisten</h2>
            <hr className="my-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {data && data.map(liste => {
                    return (
                        <StrichlisteItem key={liste.id} name={liste.name} initValue={liste.value} />
                    )
                })}
            </div>
        </div>
    );
}