import './App.css';
import MainContainer from './Components/MainContainer/MainContainer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';


function App() {
  return (
    <MainContainer>
      <Header />
      <Hero />
      <ProjectContainer/>
    </MainContainer>
  );
} 

export default App;


