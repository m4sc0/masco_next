import FrostedBlock from "./FrostedBlock";
import React from 'react';
import Image from "next/legacy/image";
import { ArrowUpRight, Github } from "react-bootstrap-icons";

interface ProjectItemProps {
    title: string;
    description?: string;
    github?: string;
    showcase?: string;
    image?: string;
    children?: React.ReactNode;
    className?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
    title,
    description,
    github,
    showcase,
    image,
    children,
    className
}) => {
    if (image === null) image = undefined;

    return (
        <FrostedBlock className={className + " p-4 rounded-lg flex flex-col justify-between"}>
            <div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <div className="flex justify-between gap-2 p-2">
                    <p className="text-justify">{description}</p>
                </div>
                <hr className="my-2 text-neutral-100/50" />
            </div>
            {image !== undefined ? (
                <div className="my-2 relative" style={{ width: '100%', height: '0', paddingBottom: '56.25%' }}>
                    <Image src={'/images/' + image} alt={title} layout="fill" objectFit="cover" className="rounded-lg"/>
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    No Image available
                </div>
            )}
            {children}
            <div className="mt-2 w-full flex gap-2">
                {github && (
                    <a href={github} target="_blank" className="w-full bg-neutral-800 hover:bg-neutral-700 text-white py-2 px-4 rounded-md flex justify-center items-center">
                        <Github className="mr-2" /> Github
                    </a>
                )}
                {showcase && (
                    <a href={showcase} target="_blank" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex justify-center items-center">
                        <ArrowUpRight className="mr-2" /> Showcase
                    </a>
                )}
            </div>
        </FrostedBlock>
    );
}

export default ProjectItem;
