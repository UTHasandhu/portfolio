import React, { useRef } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Components/Home/Home';
import EducationPage from './Components/Education/Education';
import ExperiencePage from './Components/Experience/Experience';
import ProjectsPage from './Components/Projects/Projects';

function App() {
  const headerRef = useRef(null);

  // Later feature set
  const scrollToTop = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }



  return (
    <header className="App-header">
      <div className="App" class = "container row-gap-3">
        <div className='body-item'></div>
        <Header ref={headerRef} />
        <div className='body-item'></div>
        <HomePage />
        <div className='body-item'></div>
        <ExperiencePage />
        <div className='body-item'></div>
        <EducationPage />
        <div className='body-item'></div>
        <ProjectsPage />
        <div className='body-item'> are you even there? </div>
        <Footer />
        
      </div>
    </header>
  );
}

export default App;
