"use client";

import { ChangeEvent, useState } from "react";
import FrostedBlock from "./FrostedBlock";
import InputItem from "./InputItem";
import { InputType } from "@/types/types";

interface ContactSectionProps {
    className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
    className
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const endpoint = 'http://api.philiploebl.online/send-email';
    
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Success:', data);
    
            // Optionally reset form fields here
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error:', error);
        }
    }
   

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    }

    return (
        <FrostedBlock className={"container mx-auto p-6 " + className}>
            <h2 className="text-4xl font-bold text-start">Contact me</h2>
            <hr className="my-5" />
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <InputItem type={InputType.Text} identifier="name" title="Name" onChange={handleInputChange(setName)} />
                <InputItem type={InputType.Email} identifier="email" title="E-Mail" onChange={handleInputChange(setEmail)} />
                <InputItem identifier="message" title="Message" >
                    <textarea name="message" id="message" cols={30} rows={10} className="p-2 rounded-lg frosted" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </InputItem>
                <button type="submit" className="p-4 rounded-lg bg-purple-600 hover:bg-purple-800">Send</button>
            </form>
        </FrostedBlock>
    );
}

export default ContactSection;