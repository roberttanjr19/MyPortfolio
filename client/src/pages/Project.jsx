/**
 * PROJECTS PAGE COMPONENT
 * Displays portfolio projects in a grid layout
 * Each project card shows image, title, description, technologies, and GitHub link
 */

import { projects } from "../data/portfolio-data";
import { BugIcon, GalleryIcon, ProjectIcon } from "../components/icons";

/**
 * ProjectCardIcon Component
 * Renders the appropriate icon based on project type
 * @param {string} projectIconType - Icon type from project data (bug, gallery, or default project)
 * @returns {JSX.Element} Icon component
 */
function ProjectCardIcon({ projectIconType }) {
    if (projectIconType === "bug") {
        return <BugIcon className="icon icon-small" />;
    }

    if (projectIconType === "gallery") {
        return <GalleryIcon className="icon icon-small" />;
    }

    return <ProjectIcon className="icon icon-small" />;
}

/**
 * Project Component
 * Renders grid of project cards with images, details, and links
 */
export default function Project() {
    return (
        <section className="page-section">
            <header className="section-block fade-in">
                <p className="section-kicker">Projects</p>
                <h1>Course projects</h1>
            </header>

            <div className="project-grid">
                {/* Map projects array and render a card for each */}
                {/* Using project.id as stable React key instead of array index */}
                {projects.map((portfolioProject) => (
                    <article key={portfolioProject.id} className="project-card fade-in">
                        {/* Project image and media section */}
                        <div className="project-media" aria-label={portfolioProject.mediaLabel}>
                            <img src={portfolioProject.image} alt={`${portfolioProject.title} screenshot`} className="project-media__image" />
                            <div className="project-media__label">
                                <ProjectCardIcon projectIconType={portfolioProject.icon} />
                                <span>{portfolioProject.mediaLabel}</span>
                            </div>
                        </div>

                        {/* Project details: title, description, technologies, link */}
                        <div className="project-card__body">
                            <h2>{portfolioProject.title}</h2>
                            <p>{portfolioProject.description}</p>

                            {/* Technology tags */}
                            <div className="tech-list" aria-label={`${portfolioProject.title} technologies`}>
                                {portfolioProject.technologies.map((technologyName) => (
                                    <span key={`${portfolioProject.id}-${technologyName}`} className="tech-pill">
                                        {technologyName}
                                    </span>
                                ))}
                            </div>

                            {/* GitHub button */}
                            <div className="project-actions">
                                <a className="secondary-button secondary-button--small" href="#" onClick={(event) => event.preventDefault()}>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}