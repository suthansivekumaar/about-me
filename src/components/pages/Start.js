import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Start.css";

const Start = () => {
  const [nameText, setNameText] = useState("");
  const [showSubHeadingAndButtons, setShowSubHeadingAndButtons] = useState(false);
  const name = "Suthan Sivekumaar";
  const subHeading = "Welcome to my website built using React.";

  useEffect(() => {
    const typingNameInterval = setInterval(() => {
      if (nameText.length < name.length) {
        setNameText(name.substring(0, nameText.length + 1));
      } else {
        clearInterval(typingNameInterval);
        setShowSubHeadingAndButtons(true);
      }
    }, 100);

    return () => {
      clearInterval(typingNameInterval);
    };
  }, [nameText]);

  return (
    <div className="typing-animation">
      <div className="name">{nameText}</div>
      <div className={`sub-heading ${showSubHeadingAndButtons ? "fade-in" : ""}`}>
        {showSubHeadingAndButtons && subHeading}
      </div>
      <div className={`buttons ${showSubHeadingAndButtons ? "fade-in" : ""}`}>
        <button id="about-me-button" className="start-button">
          <Link to="/about-me">About Me</Link>
        </button>
        <button id="experience-button" className="start-button">
          <Link to="/experience">Experience</Link>
        </button>
      </div>
    </div>
  );
};

export default Start;
