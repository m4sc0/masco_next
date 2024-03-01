interface TogglerProps {
    onClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: boolean;
    text: string;
}

export const Toggler: React.FC<TogglerProps> = ({
    onClick,
    value,
    text
}) => {
    return (
        <div className="flex justify-center mt-6">
            <label htmlFor="interactiveToggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input id="interactiveToggle" type="checkbox" className="sr-only" checked={value} onChange={onClick} />
                    <div className={`block bg-neutral-700 w-14 h-8 rounded-full transition-all duration-300 ${value ? 'bg-purple-600' : ''}`}></div>
                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-all duration-300 ${value ? 'transform translate-x-6' : ''}`}></div>
                </div>
                <div className="ml-3 text-sm text-neutral-300">{text}</div>
            </label>
        </div>
    )
}