import { useRef, useEffect } from 'react';
import { useTheme } from '../../Context/ThemeContext';
import gsapanim from "gsap";
import {
  js,css,sass,vercel,vercelLight,vite,tailwind,react,supabase,dotnet,gsap,figma,adobe

} from '../../assets';

function TechStack({ techstack, delay = 0 }) {

  const { isDark } = useTheme();
  const techStackRef = useRef(null);


const tech = [
  js,
  css,
  sass,
  isDark ? vercelLight : vercel,
  vite,
  tailwind,
  react,
  supabase,
  dotnet,
  gsap,
  figma,
  adobe,  
];  

  useEffect(() => {
    if (techStackRef.current && techStackRef.current.children.length > 0) {
      gsapanim.fromTo(
        techStackRef.current.children,
        { opacity: 0, y: 4 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.18, 
          stagger: 0.06, 
          ease: "back.out(1.4)",
          clearProps: "transform",
          delay: delay
        }
      );
    }
  }, [delay]);

  return (
    <div 
      className="flex flex-wrap justify-center gap-2.5 group max-w-3xs mt-2 lg:mt-0 lg:max-w-fit" 
      ref={techStackRef}
    >
      {tech.map((tech, index) => (
        <img 
          title={tech.name} 
          key={index} 
          src={tech.icon} 
          alt={tech.name} 
          className="w-5 h-5 hover:translate-y-[2px]" 
        />
      ))}
    </div>
  );
}

export default TechStack;