import React, { useState } from 'react';
import "./projects.scss";
import { VideoModal } from '../components/VideoModal';

export function Projects() {
    const [selectedVideo, setSelectedVideo] = useState<{
        src: string;
        title: string;
    } | null>(null);

    const projects = [
        {
            id: 1,
            title: "MASA Studio Management Application",
            description: "A full-stack management application to manage the studio's daily operations, including class operations, student management, and studio configuration.",
            technologies: ["React", "JavaScript", ".NET Core", "SQL Server", "Firebase", "Material UI"],
            videoSrc: "/project/MASA-studio-project.mov"
        },
        {
            id: 2,
            title: "Trip Planner Application",
            description: "A comprehensive trip planning application with interactive features and user-friendly interface. ",
            technologies: ["React", "TypeScript", "Node.js", ".NET Core", "SQL Server"],
            videoSrc: "/project/trip-planner.mov"
        },
        {
            id: 3,
            title: "Coming Soon",
            description: "Coming Soon",
            technologies: ["Coming Soon"],
            videoSrc: null // No video for this project
        }
    ];

    const handleViewProject = (project: typeof projects[0]) => {
        if (project.videoSrc) {
            setSelectedVideo({
                src: project.videoSrc,
                title: project.title
            });
        }
    };

    const closeModal = () => {
        setSelectedVideo(null);
    };

    return (
        <>
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
                                <button 
                                    className="project-link"
                                    onClick={() => handleViewProject(project)}
                                    disabled={!project.videoSrc}
                                >
                                    {project.videoSrc ? 'View Project' : 'Coming Soon'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <VideoModal
                isOpen={!!selectedVideo}
                onClose={closeModal}
                videoSrc={selectedVideo?.src || ''}
                title={selectedVideo?.title || ''}
            />
        </>
    )
} 