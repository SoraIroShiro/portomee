import React, { useState, useEffect } from "react";
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
  Screenshots,
  ScreenshotSection,
  LightboxOverlay,
  LightboxContent,
  LightboxImage,
  LightboxClose,
  LightboxNavButton,
} from "./ProjectDetailElements";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const project = ProjectList.find(
    (p) => p.id === id || ProjectList.indexOf(p).toString() === id
  );

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };

    if (lightboxOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  const openLightbox = (imageIndex) => {
    setCurrentImage(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    if (project.screenshots && currentImage < project.screenshots.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  if (!project) {
    return (
      <DetailContainer>
        <BackButton onClick={() => navigate(-1)}>Back</BackButton>
        <h1>Project not found</h1>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <BackButton onClick={() => navigate(-1)}>Back to Projects</BackButton>

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
          <h2>Challenges and Solutions</h2>
          <p>{project.challenges}</p>
        </ProjectSection>
      )}

      {project.screenshots && (
        <ScreenshotSection>
          <h2>Screenshots</h2>
          <Screenshots>
            {project.screenshots.map((screenshot, index) => (
              <img 
                key={index} 
                src={screenshot} 
                alt={`Screenshot ${index + 1}`}
                onClick={() => openLightbox(index)}
              />
            ))}
          </Screenshots>
        </ScreenshotSection>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && project.screenshots && (
        <LightboxOverlay onClick={closeLightbox}>
          <LightboxContent onClick={(e) => e.stopPropagation()}>
            <LightboxClose onClick={closeLightbox}>×</LightboxClose>
            
            {project.screenshots.length > 1 && currentImage > 0 && (
              <LightboxNavButton 
                position="left" 
                onClick={prevImage}
              >
                ‹
              </LightboxNavButton>
            )}
            
            <LightboxImage 
              src={project.screenshots[currentImage]} 
              alt={`Screenshot ${currentImage + 1}`} 
            />
            
            {project.screenshots.length > 1 && currentImage < project.screenshots.length - 1 && (
              <LightboxNavButton 
                position="right" 
                onClick={nextImage}
              >
                ›
              </LightboxNavButton>
            )}
            
            <div style={{ 
              position: 'absolute', 
              bottom: '1rem', 
              left: '50%', 
              transform: 'translateX(-50%)',
              color: 'var(--muted)',
              fontSize: '0.9rem' 
            }}>
              {currentImage + 1} / {project.screenshots.length}
            </div>
          </LightboxContent>
        </LightboxOverlay>
      )}

      <ButtonGroup>
        {project.github_url.length > 0 && (
          <a
            className="btn SecondaryBtn"
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
            Live Demo
          </a>
        )}
      </ButtonGroup>
    </DetailContainer>
  );
}

export default ProjectDetail;
