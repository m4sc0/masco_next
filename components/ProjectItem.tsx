import FrostedBlock from "./FrostedBlock";
import React from 'react';
import Image from 'next/image';
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
    return (
        <FrostedBlock className={className + " p-4 rounded-lg "}>
            <h3 className="text-xl font-bold">{title}</h3>
            <hr className="my-2" />
            <div className="flex justify-between gap-2 p-2">
                <p className="text-justify">{description}</p>
                <div className="flex justify-end gap-2">
                    {github && <a href={github} target="_blank" className="text-blue-500 hover:text-blue-700">
                        <Github size={20} />
                    </a>}
                    {showcase && <a href={showcase} target="_blank" className="text-blue-500 hover:text-blue-700">
                        <ArrowUpRight size={20} />
                    </a>}
                </div>
            </div>
            {image !== undefined ? (
                <div className="my-2 relative" style={{ width: '100%', height: '0', paddingBottom: '56.25%' }}>
                    <Image src={'/images/' + image} alt={title} layout="fill" objectFit="cover" />
                </div>
            ) : (
                <div className="flex justify-center items-center h-40">
                    No Image available
                </div>
            )}
            {children}
        </FrostedBlock>
    );
}

export default ProjectItem;
