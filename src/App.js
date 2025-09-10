// App.jsx
import React, { useRef, useState, useMemo } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeroPage from './Components/Hero/HeroCard';
import EducationPage from './Components/Education/Education';
import ExperiencePage from './Components/Experience/Experience';
import ProjectsPage from './Components/Projects/Projects';
import SkillBar from './Components/SkillBar/SkillBar';
import transcriptData from './tempData/transcriptData.json'; // Will eventually be merged with experience/projects tags
import { groupTagsByType } from './Utils/SkillTagUtils';

function App() {
  const headerRef = useRef(null);
  const [activeTag, setActiveTag] = useState('');

  const allTags = useMemo(() => {
    return transcriptData.flatMap(course => course.tags || []);
  }, []);

  const groupedTags = useMemo(() => groupTagsByType(allTags), [allTags]);

  return (
    <header className="App-header">
      <div className="container row-gap-3">
        <div className='body-item'></div>
        <Header ref={headerRef} />
        <div className='body-item'></div>
        <HeroPage />
        <div className='body-item'></div>

        {/* Global Tag Filter */}
        <SkillBar groupedTags={groupedTags} activeTag={activeTag} setActiveTag={setActiveTag} />

        <div className='body-item'></div>
        <ExperiencePage activeTag={activeTag} />
        <div className='body-item'></div>
        <EducationPage activeTag={activeTag} />
        <div className='body-item'></div>
        <ProjectsPage activeTag={activeTag} />
        <div className='body-item'></div>
        <Footer />
      </div>
    </header>
  );
}

export default App;
