// import logo from './logo.png'; // Tell webpack this JS file uses this image

// console.log(logo); // /logo.84287d09.png

import './AboutMe.css'

export default function AboutMe() {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="skills-section">
                    {/* <h2>Skills</h2>
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>Node.js</li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}
