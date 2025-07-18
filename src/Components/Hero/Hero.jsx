import { useRef, useEffect } from "react";
import Tag from "./tag";
import gsapanim from "gsap";
import {
  js,css,sass,vercel,vite,tailwind,react,supabase,dotnet,gsap,figma,adobe

} from '../../assets';

function Hero() {
  const headerText = useRef(null);
  const headerSubText = useRef(null);
  const headerButtons = useRef(null);
  const headerTechStack = useRef(null);
const titles = [
  "UI/UX Design",
  "Frontend Development",
  "Agile",
  "Accessibility",
];

const techstack = [
  js,
  css,
  sass,
  vercel,
  vite,
  tailwind,
  react,
  supabase,
  dotnet,
  gsap,
  figma,
  adobe,  

];

const tagRefs = useRef([]);
tagRefs.current = [];


useEffect(() => {
  const tl = gsapanim.timeline();

  tl.fromTo(
    headerText.current,
    { opacity: 0, y: 30, filter: "blur(8px)" },
    { 
      duration: 0.8, 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      ease: "power3.out" 
    }
  )
  .fromTo(
    headerSubText.current,
    { opacity: 0, y: 20, filter: "blur(6px)" },
    { 
      duration: 0.6, 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      ease: "power3.out" 
    },
    "-=0.5"
  )
  .fromTo(
    tagRefs.current,
    { opacity: 0, y: 15, filter: "blur(4px)" },
    { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      duration: 0.4, 
      stagger: 0.08, 
      ease: "back.out(1.7)" 
    },
    "-=0.4"
  ).fromTo(
    headerTechStack.current.children,
    { opacity: 0, y: 15, filter: "blur(10px)" },
    { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      duration: 0.4, 
      stagger: 0.08, 
      ease: "back.out(1.4)",
      clearProps: "transform",
    },
    "-=0.2"
  );
}, []);

  return (
    <header
      className="py-35 lg:py-80 px-8 flex flex-col items-center gap-2 lg:gap-6 bg-white border-b border-gray-900"
      aria-label="Header"
    >
      <h1 ref={headerText} className="text-4xl/10 lg:text-6xl/18 font-black text-center">
        A collection of projects from me, Alex
      </h1>
      <h2 ref={headerSubText} className="text-xl lg:text-4xl text-center text-gray-800">
        Experienced Front-end &amp; UI/UX Developer
      </h2>
      <div ref={headerButtons} className="flex flex-wrap gap-2 align-center justify-center ">
        {titles.map((title, index) => (
          <Tag
            key={title}
            title={title}
            ref={(el) => (tagRefs.current[index] = el)}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2.5 group max-w-3xs mt-2 lg:mt-0 lg:max-w-fit" ref={headerTechStack}>
          {techstack.map((tech, index) => (
              <img title={tech.name} key={index} src={tech.icon} alt={tech.name} className="w-5 h-5 transition-opacity duration-200 hover:translate-y-[2px]" />
          ))}
      </div>

    </header>
  );
}

export default Hero;