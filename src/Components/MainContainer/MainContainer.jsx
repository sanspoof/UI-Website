import { useTheme } from '../../Context/ThemeContext';

const MainContainer = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div className={`w-full max-w-[1920px] mx-auto md:px-4 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        {children}
      </div>
  );
};

export default MainContainer;

