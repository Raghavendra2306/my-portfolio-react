import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/home.css";

export const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Raghavendra</h2>
        <div className='prompt'>
          <p>A front-end developer and an aspiring full stack developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/raghavendra-somasundaram-711226222/" target="_blank" ><LinkedInIcon /></a>
          <a href="https://mail.google.com" target="_blank" ><EmailIcon /></a>
          <a href="https://github.com/Raghavendra2306" target="_blank" ><GitHubIcon /></a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, HTML, CSS, NPM,
              BootStrap, MaterialUI
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>Django, Django Rest Framework</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Python, TypeScript, Jquery</span>
          </li>
        </ol>
      </div>
    </div>
  )
}
