import FrostedBlock from "./FrostedBlock";
import Image from "next/legacy/image";

interface SandboxItemProps {
    title: string;
    endpoint: string;
    description?: string;
    image?: string;
    className?: string;
    children?: React.ReactNode;
}

export const SandboxItem: React.FC<SandboxItemProps> = ({
    title,
    endpoint,
    description,
    image,
    className,
    children
}) => {
    

    return (
        <FrostedBlock className={className + " p-4"}>
            <a href={endpoint} className="text-2xl font-mono hover:text-blue-500 cursor-pointer transition-colors">/{title}</a>
            <p className="text-justify my-2">{description}</p>
            <hr className="my-4" />
            {image !== undefined ? (
                <div className="my-2 relative" style={{ width: '100%', height: '0', paddingBottom: '56.25%' }}>
                    <Image src={'/images/' + image} alt={title} layout="fill" objectFit="cover" />
                </div>
            ) : (
                <div className="flex justify-center items-center h-40">
                    No Image available
                </div>
            )}
        </FrostedBlock>
    );
}