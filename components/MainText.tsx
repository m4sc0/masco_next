interface MainTextProps {
    children?: React.ReactNode;
    title: string;
}

const MainText: React.FC<MainTextProps> = ({
    children,
    title
}) => {
    return (
        <div className="text-center py-[15vh]">
            <h1 className="text-6xl font-bold">{title}</h1>
            {children}
        </div>
    );
}

export default MainText;