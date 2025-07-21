import { useTheme } from '../../Context/ThemeContext';
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";


function ColorModeButton() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button title="Toggle Dark Mode" className="cursor-pointer" onClick={toggleTheme}>
      {isDark ? (
        <SunIcon className="size-5 fill-white text-white" />
      ) : (
        <MoonIcon className="size-5  text-black" />
      )}
    </button>
  );
}

export default ColorModeButton;