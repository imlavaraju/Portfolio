import React, { useState } from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript (ES6+)", icon: "fab fa-js" },
    { name: "Python", icon: "fab fa-python" },
  ],
  Frontend: [
    { name: "React.js", icon: "fab fa-react" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" },
    { name: "Tailwind CSS", icon: "" },
  ],
  Backend: [
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Express.js", icon: "" },
    { name: "RESTful APIs", icon: "" },
  ],
  Database: [
    { name: "SQL", icon: "" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "MongoDB", icon: "fas fa-leaf" },
  ],
  Others: [
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "Heroku", icon: "fas fa-cloud" },
    { name: "Netlify", icon: "" },
    { name: "Vercel", icon: "" },
    { name: "Firebase", icon: "fas fa-fire" },
    { name: "GitHub Pages", icon: "" },
    { name: "Firebase", icon: "fas fa-fire" },
    { name: "Postman", icon: "fas fa-paper-plane" },
    { name: "Sass", icon: "fab fa-sass" },
    { name: "Redux", icon: "fa-brands fa-react" },
  ],
};

const Skills = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="skills-container">
      <h4>
        {" "}
        <BsFillRocketTakeoffFill style={{ marginRight: "4px" }} />
        My Skills
      </h4>
      <button onClick={() => setShowIcons(!showIcons)}>
        {showIcons ? "Show Text" : "Show Icons"}
      </button>
      {Object.keys(skillsData).map((category) => (
        <div key={category} className="skills-category">
          <h3>{category}:</h3>
          <div className="skills-list">
            {skillsData[category].map((skill, index) => (
              <div key={index} className="skill-item">
                {showIcons && skill.icon ? (
                  <i
                    className={`skill-icon ${skill.icon}`}
                    title={skill.name}
                  ></i>
                ) : (
                  <span>{skill.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
