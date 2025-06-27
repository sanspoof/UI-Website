import { useRef, useEffect } from "react";
import Tag from "./tag";
import gsap from "gsap";

function Hero() {
  const headerText = useRef(null);
  const headerSubText = useRef(null);
  const headerButtons = useRef(null);

useEffect(() => {
  const tl = gsap.timeline();
  tl.fromTo(
    headerText.current,
    { opacity: 0, bottom: -10, position: "relative" },
    { duration: 0.8, opacity: 1, bottom: 0, ease: "power4.out" }
  )
  .fromTo(
    headerSubText.current,
    { opacity: 0, bottom: -10, position: "relative" },
    { duration: 0.8, opacity: 1, bottom: 0, ease: "power4.out" },
    "-=0.6" 
  ).fromTo(
    headerButtons.current,
    { opacity: 0, bottom: -10, position: "relative" },
    { duration: 0.8, opacity: 1, bottom: 0, ease: "power4.out" },
    "-=0.6"  
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
        An Experienced UI Designer &amp; Frontend Developer
      </h2>
      <div ref={headerButtons} className="flex flex-wrap gap-2 max-w-md align-center justify-center ">
        <Tag title="UI/UX Design" />
        <Tag title="Prototyping" />
        <Tag title="Frontend Development" />
        <Tag title="Agile" />
        <Tag title="Accessibility" />
        <Tag title="Component Libraries" />
      </div>
    </header>
  );
}

export default Hero;