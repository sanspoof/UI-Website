import { useTheme } from '../Context/ThemeContext';
import {
  estreamVideo,
  superScaleVideo,
  portfolioVideo,
  easyImageCompress,
  REELVideo,
  empireImg,
  ff,
  piano,
  wwtbam,
  js,css,sass,vercel, vercelLight,vite,tailwind,react,supabase,dotnet,gsap

} from '../assets';

export function useProjectData() {
  const { isDark } = useTheme();

  return [
  {
    name: "eStream by Uniguest",
    subtitle: "My day job was working as the Lead UI/UX Developer for eStream by Uniguest",
    description: 
    [
      "At eStream, I led UI design and front-end development for a video platform used by over two million users across 2,000+ global organisations. I helped modernise the platform’s interface to support diverse user needs, improving performance, scalability, and accessibility.", 
      "I led a complete UI redesign in collaboration with stakeholders and end users, turning feedback into clean, intuitive interfaces. I built a custom, accessible component framework focused on consistency and maintainability, with WCAG 2.0 AA compliance at its core.",
      "Working in an Agile Scrum team, I managed the full UI lifecycle—from prototypes to release using JavaScript, HTML, SCSS, and Visual Studio. I documented components in Storybook and helped establish front-end standards."
    ],
    imgUrl: "",
    videoURL:estreamVideo,
    link: "https://uniguest.com/estream/",
    linkText: "Read More About eStream",
    githubLink: "",
    techstack:[
      js,
      sass,
      dotnet
    ]
  }, 
  {
    name: "SuperScale",
    subtitle: "A passion of mine is playing guitar, I wanted the simplest way possible of referencing notes and scales on the guitar neck.",
    description: [
      "All other solutions available were either too complicated or not fit for purpose, so I created SuperScale for myself and hopefully a resource for others.  Lots more content for this site is coming soon, this includes chords, a metronome, tuner and hopefully much more.  Right now it is in beta, so please feel free to try it out and let me know what you think.",
      "Authentication is handled by Supabase and it is hosted on Vercel. The functionality is primarily implemented in JavaScript with ES6 modules"
    ],
    imgUrl: "",
    videoURL:superScaleVideo,
    link: "https://superscale.site",
    linkText: "Go to SuperScale",
    githubLink:"https://github.com/sanspoof/SuperScale",
    beta:true,
    techstack:[
      js,
      sass,
      gsap,
      supabase,
      vite,
      isDark ? vercelLight : vercel,
    ]
  },
  {
    name: "REEL",
    subtitle: "A passion of mine is film, so using React and a headless CMS I've started to build a new version from the ground up...",
    description: 
    [
      "As a huge fan of cinema, I've felt a need to redo a once favourite site of mine, no advertisements, no bloat. A project for me to explore more advanced React concepts and to have some fun along the way.",
      "For the headless CMS I am using contentful, allowing me to easily manage the content and media for the site, this will evolve over time with potentially a move to using the TMDB API for more dynamic content.",
    ],
    imgUrl: "",
    videoURL:REELVideo,
    link: "https://empire-online.vercel.app/",
    linkText: "Visit In-progress Site",
    githubLink:"https://github.com/sanspoof/EmpireOnline/",
    altGithubText: "View on GitHub",
    comingSoon: false,
    InProgress: true,
    techstack:[
      js,
      react,
      gsap,
      tailwind,
      vite,
      isDark ? vercelLight : vercel,
    ]
  },
  {
    name: "This Portfolio Site",
    subtitle: "Maybe this is cheating, but this site is a project in itself, built with React and Tailwind CSS",
    description: 
    [
      "Having worked for the same company for around 14 years, building a portfolio site for myself always felt like a luxury I didn't need, as I was always busy with work and projects.",
      "However, I felt it was time to showcase my work and skills, so here we are.  This site is built with React and Tailwind CSS, it is hosted on Vercel and uses GitHub for version control."
    ],
    imgUrl: "",
    videoURL:portfolioVideo,
    githubLink:"https://github.com/sanspoof/UI-Website/",
    altGithubText: "View on GitHub",
    comingSoon: false,
    techstack:[
      js,
      gsap,
      react,
      tailwind,
      vite,
      isDark ? vercelLight : vercel,
    ]
  },
  {
    name: "Easy Image Compress",
    subtitle: "Simple Utility that runs in the command line, it can help compress a large number of images",
    description: [
      "We've all been there (kinda), you want to convert or compress a large number of images in a folder, but you dont have time? This easy little utility can help.",
      "Simply run from a command line and specify the folder containing the images and your desired output folder of choice."
    ],
    imgUrl: easyImageCompress,
    videoURL:"",
    githubLink:"https://github.com/sanspoof/EasyImgCompress",
    techstack:[
      js
    ]
  },
  {
    name: "Fantasy Festival",
    subtitle: "Imagine fantasy football but for festivals?",
    description: ["I've probably said too much, this is an exciting project in the pipeline, a passion project between myself and some friends, coming when it is ready :-)"],
    imgUrl: ff,
    videoURL:"",
    link: "https://www.alexui.dev",
    linkText: "Go to Fantasy Festival",
    comingSoon: true,
  },
  // {
  //   name: "Online Piano",
  //   subtitle: "I want to learn the piano and have a midi keyboard...",
  //   description: "Currently Evolving, but hopefully similar to superscale but where you can actually play and get feedback from your playing...a little easier to do than with the guitar...",
  //   imgUrl: piano,
  //   videoURL:"",
  //   link: "https://www.alexui.dev",
  //   linkText: "Go to Online Piano",
  //   comingSoon: true,
  // },
  // {
  //   name: "WWTBAM",
  //   subtitle: "Erm guilty, love this game as a child, still love it now, fancied making a nice web version.",
  //   description: "Made from the groundup to be a faithful representation of the TV show from the early 2000's.  This is Who Wants to be a Millionaire btw :-) ",
  //   imgUrl: wwtbam,
  //   videoURL:"",
  //   link: "https://www.alexui.dev",
  //   linkText: "Go to WWTBAM",
  //   comingSoon: true,
  // },

];
}
export default useProjectData;