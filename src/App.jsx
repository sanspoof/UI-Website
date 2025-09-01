import './App.css';
import MainContainer from './Components/MainContainer/MainContainer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
import { ThemeProvider } from './Context/ThemeContext';
import { inject } from "@vercel/analytics"

inject();

function App() {
  return (
    <ThemeProvider>
      <MainContainer>
        <Header />
        <Hero />
        <ProjectContainer />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;


