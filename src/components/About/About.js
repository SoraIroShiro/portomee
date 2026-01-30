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
    <ContactWrapper id="about" className="Section">
      <div className="Container">
        <div className="SectionTitle">About</div>
        <div className="SectionSubtitle">
          I care about simple, reliable systems and clean product design.
        </div>
        <div className="BigCard">
          <div className="AboutGrid">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <Image src="/me/about.jpg" alt="Fiqi" />
            </ScrollAnimation>
            <div className="AboutContent">
              <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div className="AboutBio">
                  Hello! My name is <strong>Mochammad Fiqi Fahrudillah</strong>.
                  I am an Informatics Engineering student with experience in
                  front-end development, AWS cloud, and machine learning. I have
                  migrated a Laravel system to React, built a web aggregation
                  platform with Next.js, and engineered a Flask API for a
                  pediatric dental cavity detection model.
                </div>
              </ScrollAnimation>
              <div className="AboutStats">
                <div className="StatCard">Product-minded engineering</div>
                <div className="StatCard">Cloud and API integrations</div>
                <div className="StatCard">Applied machine learning</div>
              </div>
            </div>
          </div>
          <div className="TechStackTitle">Toolbox</div>
          <Technologies>
            {stackList.map((stack, index) => (
              <ScrollAnimation animateIn="fadeIn" key={index} animateOnce={true}>
                <Tech key={index} className="tech">
                  <TechImg src={stack.img} alt={stack.name} />
                  <TechName>{stack.name}</TechName>
                </Tech>
              </ScrollAnimation>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
