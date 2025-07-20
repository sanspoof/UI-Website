import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Project from '../../Components/Project/Project';
import ProjectData from '../../Data/ProjectData';

gsap.registerPlugin(ScrollTrigger);

function ProjectContainer() {
  const containerRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, ProjectData.length);
  }, []);

  useEffect(() => {
    const projects = projectRefs.current;

    projects.forEach((project, index) => {
      if (project) {
        gsap.fromTo(
          project,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            // delay: index === 0 ? 1 : 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 95%",
              end: "bottom 15%",
              toggleActions: "play none none none",
              once:true
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="grid gap-32 px-8 lg:px-16 py-8 lg:py-20" ref={containerRef}>
      {ProjectData.map((project, id) => (
        <div
          key={id}
          ref={(el) => (projectRefs.current[id] = el)}
          className="project-item"
        >
          <Project
            name={project.name}
            subtitle={project.subtitle}
            description={project.description}
            imgUrl={project.imgUrl}
            link={project.link}
            videoURL={project.videoURL}
            linkText={project.linkText}
            githubLink={project.githubLink}
            altGithubText={project.altGithubText}
            comingSoon={project.comingSoon}
            beta={project.beta}
            InProgress={project.InProgress}
            techstack={project.techstack}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectContainer;