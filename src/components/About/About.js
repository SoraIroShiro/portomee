import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/me/about.jpg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Mochammad Fiqi Fahrudillah</strong>. A
              proactive Informatics Engineering student with hands-on experience
              in Front-End Development, AWS Cloud, and Machine Learning. I have
              successfully migrated a system from Laravel to React, developed a
              web aggregation project using Next.js, and engineered a backend
              API with Flask for a machine learning model that detects pediatric
              dental cavities. I am currently deepening my expertise by
              independently building a WEB project based on NEXT JS for asset
              storage and dataset processing from API-based scraping.
            </ScrollAnimation>

            <br />
            <br />



            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
