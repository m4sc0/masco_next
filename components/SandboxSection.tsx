"use client";

import { useSandboxProjects } from "@/hooks/useSandboxProjects";
import ProjectItem from "./ProjectItem";
import FrostedBlock from "./FrostedBlock";
import { SandboxItem } from "./SandboxItem";
import { notifyError } from "./FunctionComponent";

export const SandboxSection = () => {
    const { data, isLoading, error } = useSandboxProjects();

    if (isLoading) {
        return (
            <div className="container mx-auto p-6">
                <h2 className="text-4xl font-bold text-start">Projects</h2>
                <hr className="my-5" />
                <div className="text-center">Loading data...</div>
            </div>
        );
    }

    if (error) {
        notifyError('Couldn\'t load the projects');
        return (
            <div className="container mx-auto p-6">
                <h2 className="text-4xl font-bold text-start">Projects</h2>
                <hr className="my-5" />
                <div className="text-center">Error fetching projects: {error}</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-4xl font-bold text-start">Projects</h2>
            <hr className="my-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {data && data.map((project) => {
                    return (
                        <SandboxItem key={project.id} title={project.title} endpoint={project.endpoint} description={project.description} image={project.image} />
                    )
                })}
            </div>
        </div>
    );
}