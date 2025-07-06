import "./skills.scss";

export function Skills() {
    const data: { heroImage: string, category: string, skills: string[] }[] = [
        {
            heroImage: "/laptop.png",
            category: "Frontend",
            skills: ["React", "TypeScript", "JavaScript", "HTML", "SCSS"]
        },
        {
            heroImage: "/server.png",
            category: "Backend",
            skills: [".NET Core", "Node.js", "RESTful APIs", "SQL Server"]
        },
        {
            heroImage: "/tools.png",
            category: "Tools",
            skills: ["Git", "Docker", "Azure Tools", "CI/CD", "Google Analytics"]
        },
        {
            heroImage: "/cms.png",
            category: "CMS",
            skills: ["WordPress", "Own built CMS"]
        },
        {
            heroImage: "/responsive-design.png",
            category: "Responsive Design",
            skills: ["Desktop", "Tablet", "Mobile"]
        }
    ]



    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <h2>My Skills</h2>
                <hr />
                <div className="skills-content">
                    {data.map((item, index) => (
                        <div className="skills-content-item" key={index}>
                            <img src={item.heroImage} alt={item.category} />
                            <h3>{item.category}</h3>
                            <p>{item.skills.join(", ")}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
