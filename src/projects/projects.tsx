import "./projects.scss";

export function Projects() {
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A full-stack e-commerce solution built with React and .NET Core",
            technologies: ["React", "TypeScript", ".NET Core", "PostgreSQL"],
            link: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates",
            technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
            link: "#"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "A responsive weather dashboard with interactive charts",
            technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
            link: "#"
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2>My Projects</h2>
                <hr />
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-item">{tech}</span>
                                ))}
                            </div>
                            <a href={project.link} className="project-link">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 