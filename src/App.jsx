import './App.css';
import MainContainer from './Components/MainContainer/MainContainer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';

import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
import Project from './Components/Project/Project';
import ProjectData from './Data/ProjectData';

function App() {
  return (
    <MainContainer>
      <Header />
      <Hero />
      <ProjectContainer>
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
          />

        ))}
      </ProjectContainer>
    </MainContainer>
  );
}

export default App;


