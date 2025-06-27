function Header() {

    return(
        <nav className="h-[55px] flex justify-between items-center px-8 lg:px-16">
            <a className="text-sm font-black" href="https://www.alexui.dev">Alex UI</a>
            <a title="LinkedIn" className="text-sm font-black w-[20px] h-[20px] rounded-2xl bg-(--linkedin)" href="https://www.linkedin.com/in/alex-spencer-7a298b46/" target="_blank" rel="noopener noreferrer"></a>
        </nav>
    )

}

export default Header;