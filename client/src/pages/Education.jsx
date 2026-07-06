/**
 * EDUCATION PAGE COMPONENT
 * Displays educational background in a timeline format
 * Shows high school and current university/program information
 */

import { educationTimeline } from "../data/portfolio-data";
import { EducationIcon, SchoolIcon } from "../components/icons";

/**
 * Education Component
 * Renders timeline of educational experiences with icons and details
 */
export default function Education() {
    return (
        <section className="page-section">
            <header className="section-block fade-in">
                <p className="section-kicker">Education</p>
                <h1>Academic timeline</h1>
            </header>

            <div className="timeline fade-in">
                {/* Map education timeline and render each entry */}
                {educationTimeline.map((timelineEntry, entryIndex) => (
                    <article key={timelineEntry.title} className="timeline-item">
                        {/* Timeline marker icon - shows different icon for first vs other entries */}
                        <div className="timeline-marker" aria-hidden="true">
                            {entryIndex === 0 ? <SchoolIcon className="icon icon-small" /> : <EducationIcon className="icon icon-small" />}
                        </div>
                        {/* Timeline card with education details */}
                        <div className="timeline-card">
                            <p className="timeline-meta">{timelineEntry.meta}</p>
                            <h2>{timelineEntry.title}</h2>
                            {/* List of detail items for this education entry */}
                            <ul className="timeline-list">
                                {timelineEntry.details.map((detailItem) => (
                                    <li key={detailItem}>{detailItem}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}