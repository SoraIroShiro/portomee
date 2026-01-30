import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

function Projects() {
  return (
    <section className="Section Section--projects" id="projects">
      <div className="Container">
        <div className="SectionTitle">Featured Work</div>
        <div className="SectionSubtitle">
          Selected projects with clean UI, reliable systems, and measurable
          outcomes.
        </div>
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;
