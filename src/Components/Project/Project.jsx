import { useRef, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { gsap } from 'gsap';
import tippy from 'tippy.js';
function Project({ 
    name, 
    subtitle, 
    description, 
    link, 
    imgUrl, 
    videoURL, 
    linkText,
    githubLink = null,
    altGithubText = false,
    comingSoon = false,
    beta = false,
    InProgress = false,
    techstack = [],
}) {

    const techStackRef = useRef(null);

    useEffect(() => {
        if (techStackRef.current && techstack.length > 0) {

            const techIcons = techStackRef.current.querySelectorAll('[data-tippy-content]');
            
            techIcons.forEach((icon) => {
                tippy(icon, {
                    content: icon.getAttribute('data-tippy-content'),
                    placement: 'bottom',
                    duration:0
                });
            });

        }

    }, [techstack]);

    return (
        <section className="grid lg:grid-cols-2 items-center gap-8 relative">
            {comingSoon && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 text-black text-2xl font-bold">Coming Soon</div>}
            <div className={`flex text-center items-center lg:items-baseline lg:text-left gap-4 lg:gap-3 flex-col justify-items-start ${comingSoon ? "opacity-15 pointer-events-none select-none" : ""}`}>
                <h2 className="flex flex-col items-center lg:items-baseline lg:block  relative text-3xl lg:text-4xl font-black w-fit">{name}
                    {beta && <span className="w-fit lg:absolute lg:-top-2 lg:ml-2 text-lg lg:rotate-6 bg-orange-600 text-white px px-2">Beta</span>}
                    {InProgress && <span className="w-fit lg:absolute lg:-top-2 lg:ml-2 text-lg lg:rotate-6 bg-blue-600 text-white px px-2">In&nbsp;Progress</span>}
                </h2>
                <h3 className="text-lg lg:text-xl font-bold ">{subtitle}</h3>
                {/* <ArrowRightIcon className="size-6 text-gray-500" /> */}
                {description.map((paragraph, index) => (
                    <p key={index} className="text-base text-gray-600">
                    {paragraph}
                    </p>
                ))}

                <div className="flex flex-col lg:flex-row justify-between w-full items-center lg:items-end gap-6 lg:gap-2">

                        {techstack.length > 0 && (
                            <div className="flex flex-col gap-2">
                                <h4 className="text-sm font-bold text-gray-600 ">Tech Stack</h4>
                                <div className="flex flex-wrap gap-x-2.5 group" ref={techStackRef}>
                                    {techstack.map((tech, index) => ( 
                                        <img title={tech.name} key={index} src={tech.icon} alt={tech.name} data-tippy-content={tech.name} className="w-5 h-5 cursor-help transition-opacity duration-200 group-hover:opacity-25 hover:!opacity-100" />
                                    ))}
                                </div>
                            </div>
                        )}      
                    <div className="flex flex-wrap lg:flex-row gap-2 items-center justify-center lg:justify-start">
                        {link && (
                                <a href={link} className="flex w-fit items-center shrink-0 px-6 h-(--btnheight) border-2 border-gray-900 bg-white text-black text-sm font-medium rounded-3xl hover:bg-black hover:text-white active:translate-y-px" target="_blank" rel="noopener noreferrer">{linkText}</a>
                        )}
                        {githubLink && (
                                <a href={githubLink} className="w-fit flex items-center shrink-0 px-6 h-(--btnheight) bg-transparent border-2 text-gray-950 text-sm font-medium rounded-3xl hover:bg-gray-900 hover:text-white active:translate-y-px" target="_blank" rel="noopener noreferrer">
                                    {altGithubText ? altGithubText : "View on GitHub"}
                                </a>
                        )}
                        </div>          

                </div>


            </div>
            
            <figure className={`flex -order-1 lg:order-2 justify-center lg:justify-end ${comingSoon ? "opacity-15 pointer-events-none select-none" : ""}` }>
                {imgUrl && <img className="rounded-xl shadow-(--customShadow) max-w-(--projectmediamaxwidth) w-full" src={imgUrl} alt={name} loading="lazy"  />}
                {videoURL && (
                    <video height="auto" className="rounded-xl shadow-(--customShadow) max-w-(--projectmediamaxwidth) w-full" autoPlay muted playsInline loop >
                        <source src={videoURL} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </figure>

        </section>

    );

}

export default Project;