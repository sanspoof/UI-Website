
const MainContainer = ({ children }) => {

  return (
    <div className="w-full max-w-[1920px] mx-auto md:px-4 bg-white dark:bg-neutral-900">
        {children}
      </div>
  );
};

export default MainContainer;

