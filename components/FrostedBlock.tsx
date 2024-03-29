interface FrostedBlockProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

const FrostedBlock: React.FC<FrostedBlockProps> = ({
    id,
    className,
    children
}) => {
    return (
        <div id={id} className={className + " shadow-[0_0_1rem_0_rgba(0,0,0,0.2)] rounded-[15px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.2)]"}>
            {children}
        </div>
    );
}

export default FrostedBlock;