    /**
 * HOME PAGE COMPONENT
 * Hero section featuring name, title, typing animation, profile picture, and key facts
 * Also includes calls-to-action and aesthetic design panel
 */

import { Link } from "react-router-dom";

import TypingEffect from "./typing-effect";
import { CodeIcon, GridIcon, LocationIcon, UserIcon } from "./icons";
import { profileFacts, typingPhrases } from "../data/portfolio-data";

// Path to profile photo stored in public folder
const profilePhoto = "/profile.jpeg";

/**
 * FactIcon Component
 * Maps fact type string to appropriate icon component for visual representation
 * @param {string} type - Icon type from profileFacts (location, origin, code, etc.)
 * @returns {JSX.Element} Rendered icon component with styling
 */
function FactIcon({ iconType }) {
    const iconStyleClassName = "icon icon-small";

    switch (iconType) {
        case "location":
            return <LocationIcon className={iconStyleClassName} />;
        case "origin":
            return <UserIcon className={iconStyleClassName} />;
        case "code":
        default:
            return <CodeIcon className={iconStyleClassName} />;
    }
}

/**
 * Home Component
 * Renders the hero landing page with introduction, typing animation, profile picture, and key facts
 */
export default function Home() {
    return (
        <section className="page-section hero-layout">
            {/* Left side: Text content area */}
            <div className="hero-copy fade-in">
                <p className="hero-kicker">Junior Developer Portfolio</p>
                <h1 className="hero-name">Robert Jr.</h1>
                <p className="hero-role">Software Engineering Student</p>
                <p className="hero-location">Toronto, Canada · Philippines</p>

                {/* Animated typing effect displaying skills */}
                <TypingEffect className="typing-line" phrases={typingPhrases} />

                {/* Brief introduction paragraph */}
                <p className="hero-description">
                    Hi, I&apos;m Robert Jr., an international student currently studying Software Engineering in Toronto. I enjoy building web applications, solving problems through code, and continuously improving my development skills through academic and personal projects.
                </p>

                {/* Call-to-action buttons */}
                <div className="hero-actions">
                    <Link to="/projects" className="primary-button">
                        View My Projects
                    </Link>
                    <Link to="/contact" className="secondary-button">
                        Contact Me
                    </Link>
                </div>

                {/* Key profile facts with icons */}
                <ul className="hero-facts" aria-label="Key profile facts">
                    {profileFacts.map((profileFact) => (
                        <li key={profileFact.label} className="fact-card">
                            <span className="fact-card__icon">
                                <FactIcon iconType={profileFact.icon} />
                            </span>
                            <div>
                                <span className="fact-card__label">{profileFact.label}</span>
                                <strong className="fact-card__value">{profileFact.value}</strong>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right side: Visual section with profile photo and aesthetic panel */}
            <div className="hero-visual fade-in">
                {/* Profile photo in circular frame */}
                <div className="portrait-card">
                    <div className="portrait-ring" aria-hidden="true">
                        <img
                            src={profilePhoto}
                            alt="Robert Jr. profile"
                            className="portrait-image"
                        />
                    </div>
                    <div className="portrait-caption">
                        <strong>Profile photo</strong>
                    </div>
                </div>

                {/* Decorative panel highlighting design aesthetic */}
                <div className="decor-panel">
                    <div className="decor-panel__header">
                        <GridIcon className="icon" />
                        <span>Mission</span>
                    </div>
                    <p>
                        I want my portfolio to reflect a minimalist and modern aesthetic, using thin geometric shapes, light neutral tones, and a calm academic presentation that keeps the focus on my work and background.
                    </p>
                    <div className="code-samples">
                        <code>web apps</code>
                        <code>problem solving</code>
                        <code>continuous learning</code>
                    </div>
                </div>
            </div>
        </section>
    );
}