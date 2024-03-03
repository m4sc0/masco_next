

export const StrichlisteSection = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-4xl font-bold text-start">Strichlisten</h2>
            <hr className="my-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <StrichlisteItem />
            </div>
        </div>
    );
}