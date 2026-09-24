import { useState } from "react";
import '../styles/projects.css'
import projects from "../data/project_list"


export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState("All");
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = 
        activeFilter === "All" ? projects : projects.filter((projects) => projects.category === activeFilter)

    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

    return (
        <div>
            <h3 className="projects_title">PROJECTS</h3>
            <div className="project_filters">
                <button
                    onClick={() => setActiveFilter("All")}
                    className={activeFilter === "All" ? "active" : ""}
                >
                    All
                </button>

                <button
                    onClick={() => setActiveFilter("Software")}
                    className={activeFilter === "Software" ? "active" : ""}
                >
                    Software
                </button>

                <button
                    onClick={() => setActiveFilter("AI / ML")}
                    className={activeFilter === "AI / ML" ? "active" : ""}
                >
                    AI / ML
                </button>

                <button
                    onClick={() => setActiveFilter("IoT")}
                    className={activeFilter === "IoT" ? "active" : ""}
                >
                    IoT
                </button>
            </div>

            <div className="projects_section_container">
                {visibleProjects.map(project => {
                    return (
                        <div key={project.id} className='project_card'>
                            
                            <div style={{ paddingLeft: '1rem', textAlign: 'left' }}>
                                <p style={{ color: 'white', marginBottom: '20px' }}>{project.title}</p>
                                <p className='category'>
                                    {project.category}
                                </p>
                                <p className='summary'>
                                    {project.summary}
                                </p>
                            </div>

                            <button onClick={() => setSelectedProject(project)}>
                                More
                            </button>
                        </div>  


                    );
                })}
            </div>

            {selectedProject && (
                <div
                className="project_modal_overlay"
                onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="project_modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                        className="modal_close"
                        onClick={() => setSelectedProject(null)}
                        >
                        ×
                        </button>

                        <h2>{selectedProject.title}</h2>
                        
                        <img src={selectedProject.image} alt={selectedProject.title} className="modal_image"/>

                        <div className="modal_tags">
                            {selectedProject.tags?.map((tag) => (
                                <span key={tag}>
                                {tag}
                                </span>
                            ))}
                            </div>
                        <p className="modal_description">
                            {selectedProject.description}
                        </p>
                    </div>
                </div>
            )}
            {filteredProjects.length > 6 && (
                <button
                className="show_more_projects"
                onClick={() => setShowAll(!showAll)}
                >
                {showAll
                    ? "Show Less"
                    : "Show More Projects"}
                </button>
            )}
        </div>
    );
}