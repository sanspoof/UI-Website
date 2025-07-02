import {
  estreamVideo,
  superScaleVideo,
  easyImageCompress,
  empireImg,
  ff,
  piano,
  wwtbam,
  js,css,sass,vercel,vite,tailwind,react,supabase,dotnet

} from '../assets';

const ProjectData = [
  {
    name: "eStream by Uniguest",
    subtitle: "My day job is working as the Lead UI/UX Developer for eStream",
    description: 
    [
      "eStream provides education and enterprise organizations with a sophisticated enterprise video, digital asset management and delivery solution, where media can easily be stored, created, managed, and delivered to employees, learners, and clients with ease. Used by over 2,000,000 people globally", 
      "Recently, I've finished a complete overhaul of the UI, this has been a huge project that has involved a lot of research, design and development.  The new UI is now live and I am very proud of the work that has gone into it.",
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
    description: ["All other solutions available were either too complicated or not fit for purpose, so I created SuperScale for myself and hopefully a resource for others.  Lots more content for this site is coming soon, this includes chords, a metronome, tuner and hopefully much more.  Right now it is in beta, so please feel free to try it out and let me know what you think."],
    imgUrl: "",
    videoURL:superScaleVideo,
    link: "https://superscale.site",
    linkText: "Go to SuperScale",
    githubLink:"https://github.com/sanspoof/SuperScale",
    beta:true,
    techstack:[
      js,
      sass,
      vercel,
      supabase,
      vite
    ]
  },
  {
    name: "Empire Online Redux",
    subtitle: "A passion of mine is film, so using React and a headless CMS I've started to build a new version from the ground up...",
    description: ["As a huge fan of cinema, I've felt a need to redo a once favourite site of mine, no advertisements, no bloat. A project for me to explore more advanced React concepts and to have some fun along the way."],
    imgUrl: empireImg,
    videoURL:"",
    githubLink:"https://github.com/sanspoof/EmpireOnline/",
    altGithubText: "View Progress on GitHub",
    comingSoon: false,
    InProgress: true,
    techstack:[
      js,
      sass,
      vercel,
      react,
      vite
    ]
  },
  {
    name: "Easy Image Compress",
    subtitle: "Simple Utility that runs in the command line, it can help compress a large number of images",
    description: ["We've all been there (kinda), you want to convert or compress a large number of images in a folder, but you dont have time? This easy little utility can help"],
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

export default ProjectData;