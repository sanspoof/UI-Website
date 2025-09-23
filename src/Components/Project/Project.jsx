import { useTheme } from '../../Context/ThemeContext';
import { Square3Stack3DIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Project({ 
    name, 
    brandColors = [],
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

    const { isDark } = useTheme();

    
    return (
        <section className="grid xl:grid-cols-[1fr_1fr] items-center relative xl:pl-0 md:border border-neutral-800 dark:border-gray-400 xl:pt-6 xl:pb-6">
            {comingSoon && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 text-black text-2xl font-bold dark:text-white">Coming Soon</div>}
            <div className={`grid grid-cols-[var(--projectSidebarWidth)_1fr] pt-10 pb-10 pr-6 xl:pr-10 xl:py-20 ${comingSoon ? "opacity-15 pointer-events-none select-none" : ""}`}>
                
                <div className="w-full flex flex-col relative items-center">
                    <div className="size-5 rounded-4xl border-4 border-white dark:border-neutral-900 z-1 mt-2.5 shrink-0 flex items-center justify-center"><div className="size-2 bg-neutral-900 dark:bg-neutral-50 rounded-3xl "></div></div>
                    <div className="w-px h-full bg-neutral-300 dark:bg-neutral-700 mb-10"></div>
                </div>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <h2 className="flex gap-2 items-start text-2xl md:text-3xl xl:text-4xl font-black w-fit dark:text-white text-black relative">{name}
                            {beta && <span className="text-sm px-2 py-1 bg-neutral-600 text-white">Beta</span>}
                            {InProgress && <span className="text-sm px-2 py-1 bg-neutral-600 text-white">In&nbsp;Progress</span>} 
                        </h2>
                        <div className="h-0.5 flex gap-1">
                            {brandColors.length > 0 && brandColors.map((color, idx) => (
                                <span key={idx}
                                    className={`inline-block rounded-2xl ${idx === 2 ? 'w-5' : idx === 1 ? 'w-8' : 'w-3'}`}
                                    style={{ backgroundColor: color }}
                                ></span>
                            ))}
                        </div>
                        <h3 className="md:text-lg xl:text-xl font-bold dark:text-white text-black">{subtitle}</h3>
                    </div>

                    {/* <ArrowRightIcon className="size-6 text-gray-500" /> */}
                    <div className="flex flex-col gap-2">
                        {description.map((paragraph, index) => (
                            <ProjectParagraph key={index} paragraph={paragraph} />
                        ))} 
                    </div>

                    {techstack.length > 0 && (
                        
                            <div className="flex flex-wrap gap-2 relative">
                                <div className='absolute left-[var(--projectSidebarIconOffset)] bg-white w-[var(--projectSidebarIconContainerWidth)] h-8.5 flex items-center justify-center dark:bg-neutral-900'>
                                    <Square3Stack3DIcon className="size-5 text-neutral-900 dark:text-white inline-block" />
                                </div>
                                {techstack.map((tech, index) => ( 
                                    <TechStack key={index} index={index} tech={tech} />
                                ))}
                            </div>
                        
                    )}   

   
                        <div className="flex flex-wrap xl:flex-row xl:flex-nowrap gap-2 items-center xl:justify-start relative">
                                <div className='absolute left-[var(--projectSidebarIconOffset)] bg-white w-[var(--projectSidebarIconContainerWidth)] h-8.5 flex items-center justify-center dark:bg-neutral-900'>
                                    <ArrowTopRightOnSquareIcon className="size-5 text-neutral-900 dark:text-white inline-block" />
                                </div>
                            {link && (
                                    <a href={link} 
                                        className="flex w-fit items-center shrink-0 px-6 h-(--btnheight) rounded-sm text-sm active:translate-y-px text-white font-bold"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ backgroundColor: brandColors[1] }}
                                        >{linkText}</a>
                            )}
                            {githubLink && (
                                    <a href={githubLink} 
                                        className="flex w-fit items-center shrink-0 px-6 h-(--btnheight) border border-gray-900 rounded-sm font-bold text-sm active:translate-y-px dark:border-neutral-200 dark:text-white hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-700"
                                        target="_blank" rel="noopener noreferrer">
                                        {altGithubText ? altGithubText : "View on GitHub"}
                                    </a>
                            )}
                            </div>          

                    
                </div>



            </div>
            
            <figure className={`flex -order-1 xl:order-2 justify-center border border-neutral-400 xl:pt-16 xl:pb-16 p-4 bg-neutral-950  xl:h-full m-6 ${comingSoon ? "opacity-15 pointer-events-none select-none" : ""}` }>
                {imgUrl && <img className="rounded-xl  max-w-(--projectmediamaxwidth) w-full" src={imgUrl} alt={name} loading="lazy"  />}
                {videoURL && (
                    <video height="auto" className=" w-full" autoPlay muted playsInline loop >
                        <source src={videoURL} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </figure>

        </section>

    );

}

function TechStack({ index, tech }) {
    return (
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm font-bold border-1 border-dashed rounded-xs border-neutral-300 dark:border-neutral-200 dark:text-white" key={index}> 
                <img src={tech.icon} alt={tech.name} data-tippy-content={tech.name} className="w-5 h-5 transition-opacity duration-200" />
                <span className="">{tech.name}</span>
            </div>
    );
}

function ProjectParagraph({ paragraph }) { 
    return (
        <p className="text-base/7 md:text-base/8 tracking-normal dark:text-gray-200 text-neutral-600">
            {paragraph}
        </p>
    );
}