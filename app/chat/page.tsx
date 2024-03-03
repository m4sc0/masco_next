"use client";

import React, { useEffect, useState } from 'react';
import FunctionComponent from "@/components/FunctionComponent";

export default function Chat() {
    const [aToken, setAToken] = useState('');
    const [rToken, setRToken] = useState('');

    useEffect(() => {
        if (window) {
            setAToken(window.sessionStorage.getItem('accessToken') || 'nothin');
            setRToken(window.sessionStorage.getItem('refreshToken') || 'nothin');
        }
    }, []);

    return (
        <>
            <div>
                {aToken}
                <br />
                {rToken}
            </div>
        </>
    );
}