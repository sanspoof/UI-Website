import ColorModeButton from "../ColorMode/ColorMode";
import { useTheme } from '../../Context/ThemeContext';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import {
    GitLogo,
    GitLogoLight,
    LinkedIn,
    LinkedInLight,
    AlexUILogo,
    AlexUILogoDark
} from '../../assets';

function Header() {

    gsap.registerPlugin(useGSAP);

  const { isDark } = useTheme();

  const elNav = useRef(null);


useGSAP(() => {
  const tl = gsap.timeline();

  tl.fromTo(
    elNav.current,
    { opacity: 0, y: -30, filter: "blur(8px)" },
    { 
      duration: 0.4, 
      opacity: 1, 
      delay: 1.5,
      y: 0, 
      filter: "blur(0px)",
      ease: "power3.out" 
    }
  );
}, []);

    return(
        <nav ref={elNav} className="h-[55px] flex justify-between items-center px-4 lg:px-8  border-b dark:border-gray-400 border-gray-900">
            <a className="text-sm font-black p-0.5" href="https://www.alexui.dev">
                <img className="h-7 inline-block mr-2" src={isDark ? AlexUILogoDark : AlexUILogo} alt="AlexUI Logo" title="Alex UI"/>
            </a>
            <div className="flex gap-4 items-center">
                <ColorModeButton />
                <a title="GitHub" className="" href="https://github.com/sanspoof/" target="_blank" rel="noopener noreferrer">
                    <img className="size-5" src={isDark ? GitLogoLight : GitLogo} alt="GitHub Logo" />
                </a>
                <a title="LinkedIn" className="" href="https://www.linkedin.com/in/alex-spencer-7a298b46/" target="_blank" rel="noopener noreferrer">
                <img className="size-5" src={isDark ? LinkedInLight : LinkedIn} alt="LinkedIn Logo" />
                </a>
            </div>

        </nav>
    )

}

export default Header;