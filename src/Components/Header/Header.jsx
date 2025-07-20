import { useRef, useEffect } from "react";
import gsap from "gsap";
import {
    GitLogo,
    LinkedIn
} from '../../assets';

function Header() {

const elNav = useRef(null);


useEffect(() => {
  const tl = gsap.timeline();

  tl.fromTo(
    elNav.current,
    { opacity: 0, y: -30, filter: "blur(8px)" },
    { 
      duration: 0.4, 
      opacity: 1, 
      delay: 1.9,
      y: 0, 
      filter: "blur(0px)",
      ease: "power3.out" 
    }
  );
}, []);

    return(
        <nav ref={elNav} className="h-[55px] flex justify-between items-center px-8 lg:px-16 border-b border-gray-900">
            <a className="text-sm font-black p-0.5 hover:bg-black hover:text-white" href="https://www.alexui.dev">Alex UI</a>
            <div className="flex gap-4 items-center">
                <a title="GitHub" className="" href="https://github.com/sanspoof/" target="_blank" rel="noopener noreferrer">
                    <img className="size-5" src={GitLogo} alt="GitHub Logo" />
                </a>
                <a title="LinkedIn" className="" href="https://www.linkedin.com/in/alex-spencer-7a298b46/" target="_blank" rel="noopener noreferrer">
                <img className="size-5" src={LinkedIn} alt="LinkedIn Logo" />
                </a>
            </div>

        </nav>
    )

}

export default Header;