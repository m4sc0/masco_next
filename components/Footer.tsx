import { Github, Linkedin, Twitter } from 'react-bootstrap-icons';
import { Toggler } from './Toggler';

interface FooterProps {
    isInteractive: boolean;
    setIsInteractive: (value: boolean) => void;
}

export const Footer: React.FC<FooterProps> = ({
    isInteractive,
    setIsInteractive
}) => {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsInteractive(event.target.checked);
    };

    return (
        <footer className="bottom-0 left-0 w-full bg-neutral-900/10 text-neutral-300 p-8 backdrop-blur-md border-t border-t-neutral-100/20">
            <div className="max-w-4xl mx-auto text-center">
                <p>Made with ❤️ and Next.js</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://twitter.com/yourhandle" target='_blank' className="hover:text-white transition-colors duration-200">
                        <Twitter />
                    </a>
                    <a href="https://github.com/yourhandle" target='_blank' className="hover:text-white transition-colors duration-200">
                        <Github />
                    </a>
                    <a href="https://linkedin.com/in/yourhandle" target='_blank' className="hover:text-white transition-colors duration-200">
                        <Linkedin />
                    </a>
                </div>
                <Toggler onClick={handleCheckboxChange} value={isInteractive} text='Interactive Mode' />
                <div className="mt-8 text-sm text-neutral-500">
                    <p>© {new Date().getFullYear()} Philip Löbl. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
