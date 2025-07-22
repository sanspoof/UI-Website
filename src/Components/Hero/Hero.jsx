import { useTheme } from '../../Context/ThemeContext';
import { useRef, useEffect } from "react";
import gsapanim from "gsap";
import Tag from "./tag";

import TechStack from './TechStack';

//todo move tech stack to a separate component

function Hero() {

  const headerText = useRef(null);
  const headerSubText = useRef(null);
  const headerButtons = useRef(null);
  const headerTechStack = useRef(null);
  const headerBorderBottom = useRef(null);

const titles = [
  "UI/UX Design",
  "Frontend Development",
  "Agile",
  "Accessibility",
];



const tagRefs = useRef([]);
tagRefs.current = [];


useEffect(() => {
  const tl = gsapanim.timeline();

  tl.fromTo(
    headerText.current,
    { opacity: 0, y: 30, filter: "blur(8px)" },
    { 
      duration: 0.4, 
      opacity: 1, 
      delay: 0.3,
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
    "-=0.4"
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
  )
   .fromTo(
    headerBorderBottom.current,
    { opacity: 0, y: 15, },
    { 
      opacity: 1, 
      y: 0, 
      ease: "power2.out"
    },
    "-=0"
  );
}, []);

  return (
    <>
    <header 
      className={`py-35 lg:pt-70 lg:pb-80 px-8 flex flex-col items-center gap-2 lg:gap-6 `}
      aria-label="Header"
    >
      <h1 ref={headerText} className="text-4xl/10 lg:text-6xl/18 font-bold text-center dark:text-white text-black">
        A collection of projects from me, Alex
      </h1>
      <h2 ref={headerSubText} className="text-xl lg:text-4xl text-center dark:text-gray-300 text-gray-800">
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
          <TechStack delay={0.8} />
      </div>
    </header>
    <div ref={headerBorderBottom} className="w-full border-b dark:border-gray-400 border-black"></div>
    </>
  );
}

export default Hero;