import React from 'react';
import '../../App.css';

export default function AboutMe() {
  return (
  <div>
    <h2>ABOUT ME</h2>
    <div className='aboutMe'>
      Welcome to my website built using React.
      <br></br><br></br>
      My name is Suthan Sivekumaar and I am a 4th year Management Engineering student at the University of Waterloo. I am currently seeking internship 
  opportunities for Fall 2022. I have a passion for programming and learning new technology. Please view my GitHub profile to see all my projects. 
  <br></br><br></br>
  Feel free to contact me through LinkedIn or email.</div>
  <img id="profile" src={require("../images/Profile.jpg")} alt="Pofile" width="300" height="400"/>
    <div>
      <a href="https://github.com/suthansivekumaar"><img id="github" src={require("../images/GitHub.jpg")} alt="GitHub" width="100" height="100"/></a>
      <a href="mailto:ssivekum@uwaterloo.ca"><img id="email" src={require("../images/Email.jpg")} alt="Email" width="100" height="100"/></a>
      <a href="https://www.linkedin.com/in/suthan-sivekumaar"><img id="linkedin" src={require("../images/LinkedIn.png")} alt="LinkedIn" width="70" height="70"/></a>
    </div>
  </div>
  );
}