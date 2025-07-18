import { useRef, useEffect } from "react";
import Tag from "./tag";
import gsap from "gsap";

function Hero() {
  const headerText = useRef(null);
  const headerSubText = useRef(null);
  const headerButtons = useRef(null);
const titles = [
  "UI/UX Design",
  "Prototyping",
  "Frontend Development",
  "Agile",
  "Accessibility",
  "Component Libraries",
];
const tagRefs = useRef([]);
tagRefs.current = [];


useEffect(() => {
  const tl = gsap.timeline();

  tl.fromTo(
    headerText.current,
    { opacity: 0, y: 30 },
    { duration: 0.8, opacity: 1, y: 0, ease: "power3.out" }
  )
  .fromTo(
    headerSubText.current,
    { opacity: 0, y: 20 },
    { duration: 0.6, opacity: 1, y: 0, ease: "power3.out" },
    "-=0.5"
  )
  .fromTo(
    tagRefs.current,
    { opacity: 0, y: 15 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.4, 
      stagger: 0.08, 
      ease: "back.out(1.7)" 
    },
    "-=0.4"
  );
}, []);

  return (
    <header
      className="py-25 lg:py-40 px-8 flex flex-col items-center gap-4 bg-blue-50 border-b border-b-gray-200"
      aria-label="Header"
    >
      <h1 ref={headerText} className="text-5xl/15 lg:text-7xl/20 font-black max-w-3xl text-center">
        A collection of projects from me, <span className="gradientcolorfortext">Alex</span>
      </h1>
      <h2 ref={headerSubText} className="text-2xl text-center font-bold text-gray-800">
        Experienced Frontend &amp; UI/UX Developer
      </h2>
      <div ref={headerButtons} className="flex flex-wrap gap-2 max-w-md align-center justify-center ">
        {titles.map((title, index) => (
          <Tag
            key={title}
            title={title}
            ref={(el) => (tagRefs.current[index] = el)}
          />
        ))}
      </div>
    </header>
  );
}

export default Hero;