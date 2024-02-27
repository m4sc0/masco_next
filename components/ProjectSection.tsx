import ProjectItem from "./ProjectItem";

const ProjectSection = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-4xl font-bold text-start">Projects</h2>
            <hr className="my-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <ProjectItem title="Project 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, distinctio earum, quo alias ab autem molestiae consequatur neque ipsum ipsam quam modi reprehenderit officiis, illo assumenda? Quam vitae non reprehenderit! Dolorem dolore vel cupiditate doloribus distinctio esse inventore corrupti, tenetur enim architecto voluptas nihil quae consectetur recusandae voluptatum beatae saepe." />
                <ProjectItem title="Project 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, distinctio earum, quo alias ab autem molestiae consequatur neque ipsum ipsam quam modi reprehenderit officiis, illo assumenda? Quam vitae non reprehenderit! Dolorem dolore vel cupiditate doloribus distinctio esse inventore corrupti, tenetur enim architecto voluptas nihil quae consectetur recusandae voluptatum beatae saepe." />
                <ProjectItem title="Project 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, distinctio earum, quo alias ab autem molestiae consequatur neque ipsum ipsam quam modi reprehenderit officiis, illo assumenda? Quam vitae non reprehenderit! Dolorem dolore vel cupiditate doloribus distinctio esse inventore corrupti, tenetur enim architecto voluptas nihil quae consectetur recusandae voluptatum beatae saepe." />
            </div>
        </div>
    );
}

export default ProjectSection;