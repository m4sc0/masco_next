interface HeaderItemProps {
    title: string;
    endpoint: string;
    className?: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({
    title,
    endpoint,
    className
}) => {
    return (
        <a href={endpoint} className={"text-white hover:text-zinc-300 px-4 " + className}>{title}</a>
    )
}

export default HeaderItem;