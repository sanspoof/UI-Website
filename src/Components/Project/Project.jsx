import { ArrowRightIcon } from "@heroicons/react/24/outline";

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
    InProgress = false
}) {



    return (
        <section className="grid lg:grid-cols-2 items-center gap-8 relative">
            {comingSoon && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 text-black text-2xl font-bold">Coming Soon</div>}
            <div className={`flex text-center items-center lg:items-baseline lg:text-left gap-4 lg:gap-3 flex-col justify-items-start ${comingSoon ? "opacity-15 pointer-events-none select-none" : ""}`}>
                <h2 className="flex flex-col items-center lg:items-baseline lg:block  relative text-4xl font-black w-fit">{name}
                    {beta && <span className="w-fit lg:absolute lg:-top-2 lg:ml-2 text-lg lg:rotate-6 bg-orange-600 text-white px px-2">Beta</span>}
                    {InProgress && <span className="w-fit lg:absolute lg:-top-2 lg:ml-2 text-lg lg:rotate-6 bg-blue-600 text-white px px-2">In&nbsp;Progress</span>}
                </h2>
                <h3 className="text-xl font-bold ">{subtitle}</h3>
                {/* <ArrowRightIcon className="size-6 text-gray-500" /> */}
                <p className="text-base text-gray-500 font-medium text-md lg:text-(length:--font-1125)">{description}</p>
                <div className="flex flex-col lg:flex-row gap-1 items-center justify-center lg:justify-start">
                {link && (
                        <a href={link} className="flex w-fit  items-center px-6 h-(--btnheight) bg-fuchsia-700 text-amber-50 text-sm rounded-3xl hover:bg-fuchsia-900 active:translate-y-px" target="_blank" rel="noopener noreferrer">{linkText}</a>
                )}
                {githubLink && (
                        <a href={githubLink} className="w-fit flex items-center px-6 h-(--btnheight) bg-transparent border-2 text-gray-950 text-sm rounded-3xl hover:bg-gray-900 hover:text-white active:translate-y-px" target="_blank" rel="noopener noreferrer">
                            {altGithubText ? altGithubText : "View on GitHub"}
                        </a>
                )}
                </div>

            </div>
            
            <figure className={`flex justify-center lg:justify-end ${comingSoon ? "opacity-15 pointer-events-none select-none" : ""}` }>
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