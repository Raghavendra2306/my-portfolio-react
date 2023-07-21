import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href="https://www.instagram.com/raghavendra1999cr/" target="_blank" ><InstagramIcon /></a>
        <a href="https://www.facebook.com/raghavendra.somasundaram.75/" target="_blank" ><FacebookIcon /></a>
        <a href="https://www.linkedin.com/in/raghavendra-somasundaram-711226222/" target="_blank" ><LinkedInIcon /></a>
        </div>
        <p> &copy; 2023 Trademark of Raghavendra</p>
    </div>
  )
}
