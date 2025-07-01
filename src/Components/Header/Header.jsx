import {
    GitLogo,
    LinkedIn
} from '../../assets';

function Header() {

    return(
        <nav className="h-[55px] flex justify-between items-center px-8 lg:px-16">
            <a className="text-sm font-black" href="https://www.alexui.dev">Alex UI</a>
            <div className="flex gap-4 items-center">
                <a title="GitHub" className="" href="https://github.com/sanspoof/" target="_blank" rel="noopener noreferrer">
                    <img className="size-6" src={GitLogo} alt="GitHub Logo" />
                </a>
                <a title="LinkedIn" className="" href="https://www.linkedin.com/in/alex-spencer-7a298b46/" target="_blank" rel="noopener noreferrer">
                <img className="size-6" src={LinkedIn} alt="LinkedIn Logo" />
                </a>
            </div>

        </nav>
    )

}

export default Header;