import FrostedBlock from "./FrostedBlock";

interface ProjectItemProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
    title,
    description,
    children,
    className
}) => {
    return (
        <FrostedBlock className={className + " p-4 rounded-lg"}>
            <h3 className="text-xl font-bold">{title}</h3>
            <hr className="my-2" />
            <p>{description}</p>
            {children}
        </FrostedBlock>
    );
}

export default ProjectItem;