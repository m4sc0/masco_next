"use client";

import { useProjects } from "@/hooks/useProjects";
import ProjectItem from "./ProjectItem";
import { notifyError } from "./FunctionComponent";

const ProjectSection = () => {
    const { data, isLoading, error } = useProjects();

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
        notifyError('Loading projects failed');
        return (
            <div className="container mx-auto p-6">
                <h2 className="text-4xl font-bold text-start">Projects</h2>
                <hr className="my-5" />
                <div className="text-center">Error fetching projects: {error}</div>
            </div>
        )
    }

    return (
        <div className="container mx-auto p-6" id="projects">
            <h2 className="text-4xl font-bold text-start">Projects</h2>
            <hr className="my-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {data && data.map((project) => {
                    return (
                        <ProjectItem key={project.id} status={project.status} title={project.title} description={project.description} github={project.github} showcase={project.showcase} image={project.image} />
                    )
                })}
            </div>
        </div>
    );
}

export default ProjectSection;