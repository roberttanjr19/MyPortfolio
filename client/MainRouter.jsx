import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./src/components/layout";
import Home from "./src/components/home";
import About from "./src/pages/About";
import Education from "./src/pages/Education";
import Project from "./src/pages/Project";
import Contact from "./src/pages/Contact";

export default function MainRouter() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="education" element={<Education />} />
                <Route path="projects" element={<Project />} />
                <Route path="project" element={<Navigate to="/projects" replace />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}