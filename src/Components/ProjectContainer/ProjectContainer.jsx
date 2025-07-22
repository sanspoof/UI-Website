import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Project from '../../Components/Project/Project';
import useProjectData from '../../Data/ProjectData'; 

gsap.registerPlugin(ScrollTrigger);

function ProjectContainer() {
  const projectData = useProjectData(); 
  const containerRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projectData.length);
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
            delay: index === 0 ? 0.4 : 0,
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
    <div className="grid gap-32 px-4 lg:px-8 py-8 lg:py-20" ref={containerRef}>
      {projectData.map((projectitem, id) => (
        <div
          key={id}
          ref={(el) => (projectRefs.current[id] = el)}
        >
          <Project
            {...projectitem} // spread as the name corrolates with the projectdata data, fyi to self
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectContainer;