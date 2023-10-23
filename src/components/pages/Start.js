import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Start.css";

const Start = () => {
  const [nameText, setNameText] = useState("");
  const [showSubHeading, setShowSubHeading] = useState(false);
  const subHeading = "Welcome to my website built using React.";
  const name = "Suthan Sivekumaar";

  useEffect(() => {
    const typingNameInterval = setInterval(() => {
      if (nameText.length < name.length) {
        setNameText(name.substring(0, nameText.length + 1));
      } else {
        clearInterval(typingNameInterval);
        setShowSubHeading(true); // Trigger subheading animation after name is fully typed
      }
    }, 100);

    return () => {
      clearInterval(typingNameInterval);
    };
  }, [nameText]);

  return (
    <div className="typing-animation">
      <div className="name">{nameText}</div>
      <div className={`sub-heading ${showSubHeading ? "fade-in" : ""}`}>
        {showSubHeading && subHeading}
      </div>
      {showSubHeading && (
        <div className={`buttons`}>
          <button className="about-me-button">
            <Link to="/about-me">About Me</Link>
          </button>
          <button className="experience-button">
            <Link to="/experience">Experience</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Start;
