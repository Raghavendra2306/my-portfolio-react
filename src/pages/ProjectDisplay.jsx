import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/projectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/projectDisplay.css"

export const ProjectDisplay = () => {
    const { id } = useParams()
    const project = ProjectList[id]
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} />
        <p><b>Skills:</b>{project.skills}</p>
        <a href={project.link} target="_blank" ><GitHubIcon /></a>
    </div>
  )
}
