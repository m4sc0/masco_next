"use client";

import { ChangeEvent, useState } from "react";
import FrostedBlock from "./FrostedBlock";
import InputItem from "./InputItem";
import { InputType } from "@/types/types";
import { notifyError, notifySuccess, notifyWarn } from "./FunctionComponent";

interface ContactSectionProps {
    className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
    className
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [buttonText, setButtonText] = useState('Send');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isButtonDisabled) {
            notifyWarn('Contact form is currently disabled for maintenance.');
            return;
        }

        if (name === '' || email === '' || message === '') {
            notifyError('Please enter your data.');
            return;
        }

        setIsButtonDisabled(true);
        const endpoint = 'https://api.philiploebl.online/send-email';

        const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
        
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
                notifyError("Message couldn't be sent!");
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Success:', data);
            notifySuccess('Message sent!');
    
            // Optionally reset form fields here
            setName('');
            setEmail('');
            setMessage('');

            for (let i = 30; i > 0; i--) {
                setButtonText(`Send (${i})`);
                await sleep(1000);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setButtonText('Send');
            setIsButtonDisabled(false);
        }
    }
   
    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    }

    return (
        <FrostedBlock className={"container mx-auto p-6 " + className}>
            <h2 className="text-4xl font-bold flex-start" id="contact">Contact me</h2>
            <hr className="my-5" />
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <InputItem type={InputType.Text} identifier="name" title="Name" onChange={handleInputChange(setName)} value={name} />
                <InputItem type={InputType.Email} identifier="email" title="E-Mail" onChange={handleInputChange(setEmail)} value={email} />
                <InputItem identifier="message" title="Message" >
                    <textarea name="message" id="message" cols={30} rows={10} className="p-2 rounded-lg frosted" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </InputItem>
                <button type="submit" className={`p-4 rounded-lg ${isButtonDisabled ? "bg-neutral-700" : "bg-purple-600 hover:bg-purple-800"}`}>{buttonText}</button>
            </form>
        </FrostedBlock>
    );
}

export default ContactSection;