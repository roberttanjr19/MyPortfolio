/**
 * PORTFOLIO DATA FILE
 * Central data repository for all portfolio content including navigation, facts, projects, and contact info.
 * Modify values here to update portfolio content across all pages.
 */

// Navigation links for the site - used in header/navbar
// Each link has a route path (to) and display label
export const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/education", label: "Education" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
];

// Phrases displayed in typing animation effect on home hero section
// Cycles through these skills/technologies during the typing animation
export const typingPhrases = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Accessibility",
];

// Project screenshot imports - bundled by Vite as static assets
import bmiCalculatorScreenshot from "../../photos/bmi-calculator.jpeg";
import bugGameScreenshot from "../../photos/bug-game.jpeg";
import slideshowProjectScreenshot from "../../photos/slideshow.jpeg";

// Key profile facts displayed on home hero section
// Each fact has a label, display value, and icon type for visual representation
export const profileFacts = [
    { label: "Location", value: "Toronto, Canada", icon: "location" },
    { label: "Origin", value: "Philippines", icon: "origin" },
    { label: "Focus", value: "Software Engineering", icon: "code" },
];

// Detailed personal information shown on About page
// Used to populate the Personal Information card with user details
export const aboutFacts = [
    { label: "Name", value: "Robert Jr.", icon: "user" },
    { label: "Nickname", value: "RJ", icon: "tag" },
    { label: "Age", value: "21", icon: "calendar" },
    { label: "Country", value: "Philippines", icon: "location" },
    { label: "Current City", value: "Toronto, Canada", icon: "city" },
    { label: "Program", value: "Software Engineering", icon: "code" },
    { label: "Status", value: "International Student", icon: "student" },
];

// Education timeline entries displayed on Education page
// Contains school/program information with details and icons
export const educationTimeline = [
    {
        title: "Benigno V. Aldana National High School",
        meta: "Graduated in 2023",
        details: ["With High Honors"],
        icon: "school",
    },
    {
        title: "Current Education",
        meta: "Studying in Toronto, Canada",
        details: [
            "International Student in Canada",
            "Software Engineering Program",
            "Currently studying in Toronto",
        ],
        icon: "education",
    },
];

// Portfolio projects array
// Each project contains: id (for React keys), title, description, technologies, image, mediaLabel (accessibility), icon
export const projects = [
    {
        id: "bmi-calculator",
        title: "BMI Calculator",
        description:
            "A web application that calculates Body Mass Index using a user's height and weight. The application provides instant results and health category feedback.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: bmiCalculatorScreenshot,
        mediaLabel: "BMI Calculator Preview",
        icon: "project",
    },
    {
        id: "mini-bug-game",
        title: "Mini Bug Game",
        description:
            "A simple browser game where users interact with moving bugs while practicing game logic, event handling, and user interaction concepts.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: bugGameScreenshot,
        mediaLabel: "Mini Bug Game Preview",
        icon: "bug",
    },
    {
        id: "image-slideshow",
        title: "Image Slideshow",
        description:
            "A slideshow application that allows users to navigate through images using interactive controls and smooth transitions.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: slideshowProjectScreenshot,
        mediaLabel: "Image Slideshow Preview",
        icon: "gallery",
    },
];

// Contact methods with copy-to-clipboard support
// Each method has label, display value, copyable value, href link, and icon type
export const contactMethods = [
    {
        label: "Phone",
        value: "(+1) 416-949-1227",
        copyValue: "(+1) 416-949-1227",
        href: "tel:+14169491227",
        icon: "phone",
    },
    {
        label: "Instagram",
        value: "@jayyjnr_",
        copyValue: "@jayyjnr_",
        href: "https://instagram.com/jayyjnr_",
        icon: "instagram",
    },
    {
        label: "Email",
        value: "roberttanjr15@gmail.com",
        copyValue: "roberttanjr15@gmail.com",
        href: "mailto:roberttanjr15@gmail.com",
        icon: "email",
    },
];
