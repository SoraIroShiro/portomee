import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../../data/ProjectData";
import {
    DetailContainer,
    BackButton,
    ProjectHeader,
    ProjectImage,
    ProjectSection,
    TechStack,
    TechBadge,
    ButtonGroup,
    Screenshots
} from "./ProjectDetailElements"


function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = ProjectList.find(p => p.id === id || ProjectList.indexOf(p).toString() === id);
  
  if (!project) {
    return (
      <DetailContainer>
        <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
        <h1>Project not found</h1>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <BackButton onClick={() => navigate(-1)}>← Back to Projects</BackButton>
      
      <ProjectHeader>
        <h1>{project.title}</h1>
        <p>{project.fullDescription || project.description}</p>
      </ProjectHeader>

      <ProjectImage src={project.img} alt={project.title} />

      <ProjectSection>
        <h2>Technologies Used</h2>
        <TechStack>
          {project.tech_stack.map((tech, index) => (
            <TechBadge key={index}>{tech}</TechBadge>
          ))}
        </TechStack>
      </ProjectSection>

      {project.features && (
        <ProjectSection>
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </ProjectSection>
      )}

      {project.challenges && (
        <ProjectSection>
          <h2>Challenges & Solutions</h2>
          <p>{project.challenges}</p>
        </ProjectSection>
      )}

      {project.screenshots && (
        <ProjectSection>
          <h2>Screenshots</h2>
          <Screenshots>
            {project.screenshots.map((screenshot, index) => (
              <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
            ))}
          </Screenshots>
        </ProjectSection>
      )}

      <ButtonGroup>
        {project.github_url.length > 0 && (
          <a
            className="btn SecondaryBtn btn-shadow"
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        )}
        {project.demo_url.length > 0 && (
          <a
            className="btn PrimaryBtn btn-shadow"
            href={project.demo_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo ➜
          </a>
        )}
      </ButtonGroup>
    </DetailContainer>
  );
}

export default ProjectDetail;