import { useState } from 'react'
import './App.css'
import './header.css'
import AboutMe from './Pages/Home/AboutMe'
import Projects from './Pages/Home/Projects'
import ContactMe from './Pages/Home/ContactMe'
// import Navbar from './Pages/Home/Navbar'

function App() {
  const [activeSection, setActiveSection] = useState('aboutme') // Initialize the active section to the 'about' tab when page is opened

  return (
    <>
      <div className="header-bar">
        <div className="h3-container">
          <h3 
            onClick={() => setActiveSection('aboutme')}
            className={activeSection === 'aboutme' ? 'active' : ''}
          >
            About Me
          </h3>
          <h3 
            onClick={() => setActiveSection('projects')}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </h3>
          <h3 
            onClick={() => setActiveSection('contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </h3>
        </div>
      </div>
      {activeSection === 'aboutme' && <AboutMe />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'contact' && <ContactMe />}
      {/* {<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>} */}
    </>
  )
}

export default App
