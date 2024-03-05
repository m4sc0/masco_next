import FrostedBlock from "./FrostedBlock";
import React from 'react';
import Image from "next/legacy/image";
import { ArrowUpRight, Github } from "react-bootstrap-icons";

export enum ProjectStatus {
    COMPLETED = 'COMPLETED',
    IN_PROGRESS = 'IN_PROGRESS',
    PLANNED = 'PLANNED',
    ON_HOLD = 'ON_HOLD',
    CANCELLED = 'CANCELLED',
    ARCHIVED = 'ARCHIVED'
}

interface ProjectItemProps {
    title: string;
    description?: string;
    status: ProjectStatus;
    github?: string;
    showcase?: string;
    image?: string;
    children?: React.ReactNode;
    className?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
    title,
    description,
    status,
    github,
    showcase,
    image,
    children,
    className
}) => {
    if (image === null) image = undefined;

    const convertText = (text: string) => {
        return text.split('_').map(word => word[0] + word.slice(1).toLowerCase()).join(' ');
    }

    const statusToColorClass = {
        [ProjectStatus.COMPLETED]: 'bg-green-500',
        [ProjectStatus.IN_PROGRESS]: 'bg-yellow-500',
        [ProjectStatus.PLANNED]: 'bg-blue-500',
        [ProjectStatus.ON_HOLD]: 'bg-orange-500',
        [ProjectStatus.CANCELLED]: 'bg-red-500',
        [ProjectStatus.ARCHIVED]: 'bg-gray-500',
    };

    const colorClass = statusToColorClass[status] || 'bg-neutral-500';

    return (
        <FrostedBlock className={className + " p-4 rounded-lg flex flex-col justify-between"}>
            <div>
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <div className={colorClass + ' py-2 px-4 rounded-lg text-neutral-900 font-bold'}>{convertText(status)}</div>
                </div>
                <div className="flex justify-between gap-2 p-2">
                    <p className="text-justify">{description}</p>
                </div>
                <hr className="my-2 text-neutral-100/50" />
            </div>
            {image !== undefined ? (
                <div className="my-2 relative" style={{ width: '100%', height: '0', paddingBottom: '56.25%' }}>
                    <Image src={'/images/' + image} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
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
