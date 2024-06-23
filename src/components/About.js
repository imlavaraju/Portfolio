import React, { useEffect, useRef } from "react";
import mypic from "../utilis/mypic.png";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { RiDownloadCloud2Line } from "@react-icons/all-files/ri/RiDownloadCloud2Line";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { GoMail } from "@react-icons/all-files/go/GoMail";

const About = () => {
  const subtextRef = useRef(null);
  const textArray = ["Full Stack Developer"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 200;
  let timeoutId;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[textIndex];
      const displayText = isDeleting
        ? currentText.substring(0, charIndex - 1)
        : currentText.substring(0, charIndex + 1);
      if (subtextRef.current) {
        subtextRef.current.innerHTML = displayText;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 200; // Pause before starting to delete
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingSpeed = 200; // Pause before starting to type
      }

      charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

      timeoutId = setTimeout(handleTyping, typingSpeed);
    };

    handleTyping();

    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="about">
      <div className="about_img">
        <div className="outer">
          <img src={mypic} alt="Lavaraju" className="img" />
        </div>
      </div>
      <div className="aboutme">
        <div>
          <h4>About Me</h4>
          <h1 className="animated-text">
            I'm a <span className="animated-subtext" ref={subtextRef}></span>
          </h1>
          <p>
            Good knowledge of Full Stack Development with a passion for creating
            user-friendly websites.
          </p>
          <div>
            <a href="https://wa.me/8499854798" target="_blank">
              <button className="hire">Hire Me</button>
            </a>
            <a href="./resume" download>
              <button className="resume">
                Resume <RiDownloadCloud2Line />
              </button>
            </a>
          </div>
          <div className="button-group">
            <a
              href="https://github.com/imlavaraju"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <FaGithub />
              </button>
            </a>
            <a href="mailto:lavaraju.gorli41449@gmail.com">
              <button>
                <GoMail />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/lavaraju-gorli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <FaLinkedin />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
