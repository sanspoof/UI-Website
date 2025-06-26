import './App.css';
import MainContainer from './Components/MainContainer/MainContainer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
import Project from './Components/Project/Project';
import estreamVideo from './assets/estreamoverview.mp4'; 
import superScaleVideo from './assets/superscale.mp4';
import easyImageCompress from './assets/easyimagecompress.gif';
import empireImg from './assets/empire.webp';
import ff from './assets/ff.webp';
import piano from './assets/piano.webp';
import wwtbam from './assets/wwtbam.webp';

function App() {
  return (
    <MainContainer>
      <Header />
      <Hero />
      <ProjectContainer>
        {projects.map((project, id) => (
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
            comingSoon={project.comingSoon}
            beta={project.beta}
          />

        ))}
      </ProjectContainer>
    </MainContainer>
  );
}

export default App;


let projects = [
  {
    name: "eStream",
    subtitle: "My day job is working as the Lead UI/UX Developer for eStream",
    description: "eStream provides education and enterprise organizations with a sophisticated enterprise video, digital asset management and delivery solution, where media can easily be stored, created, managed, and delivered to employees, learners, and clients with ease. Used by over 2,000,000 people globally",
    imgUrl: "",
    videoURL:estreamVideo,
    link: "https://uniguest.com/estream/",
    linkText: "Read More About eStream",
    githubLink: "",
  }, 
  {
    name: "SuperScale",
    subtitle: "A passion of mine is playing guitar, I wanted the simplest way possible of referencing notes and scales on the guitar neck.",
    description: "All other solutions available were either too complicated or not fit for purpose, so I created SuperScale for myself and hopefully a resource for others...",
    imgUrl: "",
    videoURL:superScaleVideo,
    link: "https://superscale.site",
    linkText: "Go to SuperScale",
    githubLink:"https://github.com/sanspoof/SuperScale",
    beta:true,

  },
  {
    name: "Easy Image Compress",
    subtitle: "Simple Utility that runs in the command line, it can help compress a large number of images",
    description: "We've all been there (kinda), you want to convert or compress a large number of images in a folder, but you dont have time? This easy little utility can help",
    imgUrl: easyImageCompress,
    videoURL:"",
    githubLink:"https://github.com/sanspoof/EasyImgCompress",
  },
  {
    name: "Empire Online Redux",
    subtitle: "A passion of mine is film, so using React and a headless CMS I've built a new version from the ground up...",
    description: "As a huge fan of cinema, I've felt a need to redo a once favourite site of mine, no adds, just film...maybe TV too...",
    imgUrl: empireImg,
    videoURL:"",
    link: "https://www.alexui.dev",
    linkText: "Go to Empire Online Redux",
    comingSoon: true,
  },
  {
    name: "Fantasy Festival",
    subtitle: "Imagine fantasy football but for festivals?",
    description: "I've probably said too much, this is an exciting project in the pipeline, a passion project between myself and some friends, coming when it is ready :-)",
    imgUrl: ff,
    videoURL:"",
    link: "https://www.alexui.dev",
    linkText: "Go to Fantasy Festival",
    comingSoon: true,
  },
  {
    name: "Online Piano",
    subtitle: "I want to learn the piano and have a midi keyboard...",
    description: "Currently Evolving, but hopefully similar to superscale but where you can actually play and get feedback from your playing...a little easier to do than with the guitar...",
    imgUrl: piano,
    videoURL:"",
    link: "https://www.alexui.dev",
    linkText: "Go to Online Piano",
    comingSoon: true,
  },
  {
    name: "WWTBAM",
    subtitle: "Erm guilty, love this game as a child, still love it now, fancied making a nice web version.",
    description: "Made from the groundup to be a faithful representation of the TV show from the early 2000's.  This is Who Wants to be a Millionaire btw :-) ",
    imgUrl: wwtbam,
    videoURL:"",
    link: "https://www.alexui.dev",
    linkText: "Go to WWTBAM",
    comingSoon: true,
  },

];