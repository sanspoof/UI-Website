import Project from '../../Components/Project/Project';
import ProjectData from '../../Data/ProjectData';

function ProjectContainer() {
  return (

        <div className="grid gap-32 px-8 lg:px-16 py-20">
        {ProjectData.map((project, id) => (
          <Project
            key={id}
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

        ))}        
        </div>

  );
}

export default ProjectContainer;