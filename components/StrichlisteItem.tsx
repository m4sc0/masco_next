import React, { useState } from 'react';
import FrostedBlock from './FrostedBlock';

interface StrichlisteItemProps {
    name: string;
    initValue: number;
}

export const StrichlisteItem: React.FC<StrichlisteItemProps> = ({
    name,
    initValue
}) => {
    const [value, setValue] = useState(initValue);
    const [isLoading, setIsLoading] = useState(false);

    const ip = 'https://api.philiploebl.online';

    const updateCounter = async (change: number) => {
        setIsLoading(true);
        try {
            const action = change === 1 ? 'add' : 'remove';
            const response = await fetch(`${ip}/strichliste/${action}/${name}`);
            if (!response.ok) {
                throw new Error('Failed to update counter');
            }
            const updatedValue = await response.json();
            setValue(updatedValue.value);
        } catch (error) {
            console.error('Error updating counter:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const setCounter = async (newValue: number) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${ip}/strichliste/set/${name}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ value: newValue }),
            });
            if (!response.ok) {
                throw new Error('Failed to set counter');
            }
            setValue(newValue);
        } catch (error) {
            console.error('Error setting counter:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const increment = () => updateCounter(1);
    const decrement = () => updateCounter(-1);

    return (
        <FrostedBlock className='p-4 rounded-lg flex flex-col justify-between'>
            <div className='flex flex-row justify-between text-3xl'>
                <div>{name}</div>
                <div>{value}</div>
            </div>
            <div className='flex justify-evenly gap-2 my-2'>
                <button onClick={decrement} disabled={isLoading} className='text-3xl w-full bg-red-500 text-white py-2 px-4 rounded-md flex justify-center items-center'>-</button>
                <button onClick={increment} disabled={isLoading} className='text-3xl w-full bg-green-500 text-white py-2 px-4 rounded-md flex justify-center items-center'>+</button>
            </div>
            <div className="flex justify-evenly gap-2 my-2">
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    disabled={isLoading}
                    className='w-full rounded-lg p-2 bg-neutral-700'
                />
                <button onClick={() => setCounter(Number(value))} disabled={isLoading} className='text-xl p-2 px-4 bg-neutral-700 rounded-lg'>Set</button>
            </div>
        </FrostedBlock>
    );
};