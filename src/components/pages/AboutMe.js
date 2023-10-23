import React from "react";
import "./AboutMe.css";
import Navbar from "../Navbar";

export default function AboutMe() {
  let programmingLanguages = [
    "Java",
    "Python",
    "R",
    "SQL",
    "PHP",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Ruby",
    "Kotlin",
    "VBA",
  ];
  let frameworksAndLibraries = ["React", "Angular", "Ruby on Rails"];
  return (
    <div>
      <Navbar />
      <h2 className="about-me-heading">ABOUT ME</h2>
      <div className="aboutMeContainer">
        <div className="introduction-side">
          <p className="welcomeMessage">
            My name is Suthan Sivekumaar and I am currently working as a
            Software Developer at Bank of Montreal. I graduated (with
            distinction) with a Bachelor of Applied Science in <a target="_blank" rel="noreferrer" id="management-engineering-link" href="https://uwaterloo.ca/future-students/programs/management-engineering">Management
            Engineering</a> at University of Waterloo in April 2023. I have a
            passion for programming and learning new technology.
          </p>
          <p className="welcomeMessage">
            These are the programming languages I can code in:
            {programmingLanguages.map((programmingLanguage, index) => (
              <li key={index}>{programmingLanguage}</li>
            ))}
          </p>
          <p className="welcomeMessage">
            These are the frameworks/libraries I am familiar with:
            {frameworksAndLibraries.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </p>
          <p className="welcomeMessage">
            Please view my GitHub profile to see all my projects. Feel free to
            contact me through LinkedIn.
          </p>
        </div>
        <div className="profile-icons-side">
          <img
            id="profile"
            src={require("../images/Profile.jpg")}
            alt="profile"
          />
          <div className="pictures">
            <a target="_blank" rel="noreferrer" href="https://github.com/suthansivekumaar">
              <img
                id="github"
                className="picture"
                src={require("../images/GitHub.jpg")}
                alt="GitHub"
                width="60"
                height="60"
              />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/suthan-sivekumaar">
              <img
                id="linkedin"
                className="picture"
                src={require("../images/LinkedIn.jpg")}
                alt="LinkedIn"
                width="60"
                height="60"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
