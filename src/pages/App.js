import { useState } from 'react';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import NavBar from '../components/NavBar/NavBar';
import Network from '../components/Network/Network';
import Portfolio from '../components/Portfolio/Portfolio';
import Presentation from '../components/Presentation/Presentation';
import Skills from '../components/Skills/Skills';
import './App.css'

const App = () => {
  const [openPresentation, setOpenPresentation] = useState(false)
  const [openPortfolio, setOpenPortfolio] = useState(false)
  const [openSkills, setOpenSkills] = useState(false)
  const [openExperience, setOpenExperience] = useState(false)

  return (
    <div className="App">
      <NavBar setOpenPresentation={setOpenPresentation} openPresentation={openPresentation} setOpenPortfolio={setOpenPortfolio} openPortfolio={openPortfolio} setOpenSkills={setOpenSkills} openSkills={openSkills} setOpenExperience={setOpenExperience} openExperience={openExperience} />
      <Network />

      {openPresentation ? <Presentation /> :  null}
      {openPortfolio ? <Portfolio /> :  null}
      {openSkills ? <Skills /> :  null}
      {openExperience ? <Experience /> :  null}

      <Home />

      <Footer />
    </div>
  );
}

export default App;
