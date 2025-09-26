import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
function ProjectCard() {
  const navigate = useNavigate();

  const handleImageClick = (projectId) => {
    console.log('Image clicked! Project ID:', projectId);
    try {
      navigate(`/project/${projectId}`);
    } catch (error) {
      console.error('Navigation error:', error);
      alert(`Navigating to project: ${projectId}`);
    }
  };

  return (
    <>
      {ProjectList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img 
                src={list.img} 
                alt={list.name}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Image clicked!', list.id || index);
                  handleImageClick(list.id || index);
                }}
                style={{
                  cursor: "pointer",
                  userSelect: "none",
                  pointerEvents: "auto"
                }} 
              />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.github_url.length > 0 && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
                {list.demo_url.length > 0 && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ProjectCard;
