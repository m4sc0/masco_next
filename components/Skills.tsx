"use client";

import React from "react";
import { useSkills } from "../hooks/useSkills";

const Skills = () => {
    const { data, isLoading, error } = useSkills();

    if (isLoading) {
        return <div className="pt-5">Loading skills...</div>
    }

    if (error) {
        return <div>Error loading skills! {error}</div>
    }

    return (
        <div id="skills" className="flex flex-wrap justify-center mt-4 gap-2 mx-auto w-[50vw] text-sm">
            {data && data.map(skill => {
                return (
                    <div key={skill.id} className="inline-block p-[0.5rem_1rem] rounded-[15px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.2)] text-white whitespace-nowrap overflow-hidden relative cursor-default">
                        {skill.name}
                    </div>
                );
            })}
        </div>
    )
}

export default Skills;