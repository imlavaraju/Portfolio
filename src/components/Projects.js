import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../utilis/projectsData.json";
import { GiNetworkBars } from "react-icons/gi";
const Projects = ({ num }) => {
  return (
    <div className="projects">
      <div className="projtop">
        <h1>
          <GiNetworkBars style={{ marginRight: "4px" }} />
          PROJECTS
        </h1>
      </div>

      <div className="all">
        {projectsData.slice(0, num).map((each, index) => (
          <div className="eachProject" key={index}>
            <div className="image-container">
              <img
                src={
                  each && each.image
                    ? each.image
                    : "ProjectImages/defaultimage.jpeg"
                }
                alt={each.name}
              />
              <div className="overlay">
                <p>{each.name}</p>
                <a href={each.githubUrl} rel="noreferrer" target="_blank">
                  <button>Github</button>
                </a>
                <a href={each.liveUrl} rel="noreferrer" target="_blank">
                  <button>Live</button>
                </a>
              </div>
            </div>
          </div>
        ))}
        <div className="eachProject">
          <div className="image-container">
            <img src={`/ProjectImages/more.jpeg`} alt="pics  not mine" />
            <div className="overlay">
              <Link to="/projects">
                <button
                  style={{
                    height: "40px",
                    width: "80px",
                    borderRadius: "10px",
                    marginTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
