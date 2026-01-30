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
  CardTag,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";

function ProjectCard() {
  const navigate = useNavigate();

  const handleImageClick = (projectId) => {
    try {
      navigate(`/project/${projectId}`);
    } catch (error) {
      alert(`Navigating to project: ${projectId}`);
    }
  };

  return (
    <>
      {ProjectList.map((list, index) => (
        <ScrollAnimation animateIn="fadeIn" key={index}>
          <Card>
            <CardLeft>
              <img
                src={list.img}
                alt={list.title}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleImageClick(list.id || index);
                }}
                style={{ cursor: "pointer" }}
              />
            </CardLeft>
            <CardRight>
              <CardTag>Case Study</CardTag>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, techIndex) => (
                  <TechCard key={techIndex}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                <button
                  className="btn SecondaryBtn"
                  type="button"
                  onClick={() => handleImageClick(list.id || index)}
                >
                  Details
                </button>
                {list.github_url.length > 0 && (
                  <a
                    className="btn SecondaryBtn"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {list.demo_url.length > 0 && (
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
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
