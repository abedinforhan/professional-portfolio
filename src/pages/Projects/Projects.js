//timeline 
import { Events, Timeline } from '@merc/react-timeline';
//bootstrap
import React, { useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import { projectsData } from './ProjectData';
import './Projects.css';


export default function Projects() {

    const [projects, setProjects]= useState(projectsData);
    console.log(projects)
  
  return (
       <div id='projects'  className='project'>
             <Timeline>
              <Events>
                 {
                     projects.map(project =>
                       <ProjectCard
                       name={project.name}
                       description={project.description}
                       imgSrc={project.imgSrc}
                       technologies={project.technologies}
                       features={project.features}
                       liveUrl={project.liveUrl}
                       clientUrl={project.clientUrl}
                       serverUrl={project.serverUrl}
                       />
                        )
                 }
             </Events>
          </Timeline>
     </div>
  );
}
