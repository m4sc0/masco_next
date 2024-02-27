import HeaderItem from "./HeaderItem";

export default function Header() {
    return (
        <div className="bg-zinc-800 bg-opacity-0 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-xl font-light">P. L.</a>
                <div>
                    <HeaderItem title="Home" endpoint="/" />
                    <HeaderItem title="Projects" endpoint="/#projects" />
                    <HeaderItem title="SandBox" endpoint="/sandbox" />
                    <HeaderItem title="Contact" endpoint="/#contact" />
                </div>
            </div>
        </div>
    );
};