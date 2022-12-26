import React from 'react';
import '../../App.css';

export default function AboutMe() {
  return (
  <div>
    <h2 id="about-me-heading">ABOUT ME</h2>
    <img id="profile" src={require("../images/Profile.jpg")} alt="profile"/>
    <div className='aboutMe'>
      <div className='welcomeMessage'>
        Welcome to my website built using React.
      </div>
      <div className='introduction'>
        My name is Suthan Sivekumaar and I am a 4th year Management Engineering student at the University of Waterloo. I am currently seeking full-time job
        opportunities for Summer or Fall 2023. I have a passion for programming and learning new technology. Please view my GitHub profile to see all my projects. 
        Feel free to contact me through LinkedIn or email.
      </div>
  </div>
    <div className='pictures'>
      <a href="https://github.com/suthansivekumaar"><img id="github" className="picture" src={require("../images/GitHub.png")} alt="GitHub" width="70" height="70"/></a>
      <a href="mailto:ssivekum@uwaterloo.ca"><img id="email" className="picture" src={require("../images/Email.png")} alt="Email" width="90" height="70"/></a>
      <a href="https://www.linkedin.com/in/suthan-sivekumaar"><img id="linkedin" className="picture" src={require("../images/LinkedIn.png")} alt="LinkedIn" width="70" height="70"/></a>
    </div>
  </div>
  );
}