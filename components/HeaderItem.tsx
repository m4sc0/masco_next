"use client";

import React from 'react';
import { notifyError } from "@/app/page";

interface HeaderItemProps {
    title: string;
    endpoint: string;
    className?: string;
    disabled?: boolean;
}

const HeaderItem: React.FC<HeaderItemProps> = ({
    title,
    endpoint,
    className,
    disabled = false
}) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (disabled) {
            e.preventDefault();
            notifyError('The Sandbox is still under construction!');
            return;
        }
    };

    const finalClassName = `text-white hover:text-zinc-300 px-4 ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:underline'} ${className || ''}`;

    return (
        <a href={disabled ? '#' : endpoint} className={finalClassName} onClick={handleClick}>
            {title}
        </a>
    );
}

export default HeaderItem;
