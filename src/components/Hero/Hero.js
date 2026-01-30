import React, { useState, useEffect } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Eyebrow,
  HeroTitle,
  HeroSubtitle,
  RoleText,
  HeroActions,
  HeroHighlights,
  HighlightCard,
  PortraitCard,
  PortraitImage,
  PortraitTag,
  PortraitMeta,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";
import { Link as LinkScroll } from "react-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Show scroll indicator after initial animations
    const timer = setTimeout(() => setShowScrollDown(true), 2500);
    
    // Scroll-triggered effects
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Show/hide scroll indicator based on position
      // Show when at top (hero section), hide when scrolled down
      if (currentScrollY < 50) {
        setShowScrollDown(true);
      } else if (currentScrollY > window.innerHeight * 0.2) {
        setShowScrollDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Parallax effect calculation
  const parallaxOffset = scrollY * 0.5;

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer id="home">
        <HeroWrapper style={{ transform: `translateY(-${parallaxOffset}px)` }}>
          <HeroLeft>
            <ScrollAnimation 
              animateIn="fadeIn" 
              animateOnce={true}
              delay={300}
              duration={0.8}
            >
              <Eyebrow>Portfolio</Eyebrow>
              <HeroTitle>
                Mochammad Fiqi Fahrudillah
              </HeroTitle>
              <HeroSubtitle>
                who builds reliable web products with clear UI, clean architecture, and thoughtful performance.
              </HeroSubtitle>
              <RoleText>
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    "",
                    1000,
                    "React, Next.js, and modern JS.",
                    2000,
                    "Cloud, APIs, and ML pipelines.",
                    2000,
                  ]}
                  speed={55}
                  deletionSpeed={40}
                  repeat={Infinity}
                />
              </RoleText>
              <ScrollAnimation 
                animateIn="fadeInUp" 
                animateOnce={true}
                delay={800}
                duration={0.6}
              >
                <HeroActions>
                  <LinkScroll
                    className="btn PrimaryBtn btn-shadow"
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-40}
                  >
                    View Projects
                  </LinkScroll>
                  <a
                    className="btn SecondaryBtn"
                    href="/resume/resume_fiqi.pdf"
                    download="resume_fiqi.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </HeroActions>
              </ScrollAnimation>
              <ScrollAnimation 
                animateIn="fadeInUp" 
                animateOnce={true}
                delay={1000}
                duration={0.6}
              >
                <HeroHighlights>
                  <HighlightCard>Full-stack</HighlightCard>
                  <HighlightCard>Cloud</HighlightCard>
                  <HighlightCard>ML</HighlightCard>
                </HeroHighlights>
              </ScrollAnimation>
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation 
              animateIn="fadeInRight" 
              animateOnce={true}
              delay={600}
              duration={0.8}
            >
              <PortraitCard>
                <PortraitImage src="/me/about_me.png" alt="Portrait" />
              </PortraitCard>
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        <ScrollDown 
          to="projects" 
          smooth={true} 
          duration={800} 
          offset={-40}
          isVisible={showScrollDown}
        >
          <ScrollLink>
            Scroll for more
            <img src="/scroll-down.svg" alt="scroll-down" />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
