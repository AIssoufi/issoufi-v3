// Dependencies
import React from 'react';

// Shared components
import Project from 'shared-components/Project'

// Style
import './Projects.css';

const Projects = () => {

  const personnalProjects = [
    {
      id: 1,
      name: 'Project Name 1',
      type: 'Site Web',
      imageUrl: 'https://images.unsplash.com/photo-1611820972303-a852ce20c2f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      tools: [ 'HTML 5', 'CSS 3', 'React.js', 'Redux.js' ],
      likeCount: 0,
      isLikedByOwnUser: true
    },
    {
      id: 2,
      name: 'Project Name 2',
      type: 'UI Design',
      imageUrl: 'https://images.unsplash.com/photo-1611820972303-a852ce20c2f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      tools: [ 'Figma' ],
      likeCount: 100,
      isLikedByOwnUser: true
    },
    {
      id: 3,
      name: 'Project Name 3',
      type: 'App Web',
      imageUrl: 'https://images.unsplash.com/photo-1611820972303-a852ce20c2f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      tools: [ 'HTML 5', 'CSS 3', 'React.js', 'Redux.js' ],
      likeCount: 200,
      isLikedByOwnUser: false
    },
    {
      id: 6,
      name: 'Project Name 1',
      type: 'Site Web',
      imageUrl: 'https://images.unsplash.com/photo-1611820972303-a852ce20c2f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      tools: [ 'HTML 5', 'CSS 3', 'React.js', 'Redux.js' ],
      likeCount: 300,
      isLikedByOwnUser: false
    },
    {
      id: 4,
      name: 'Project Name 2',
      type: 'UI Design',
      imageUrl: 'https://images.unsplash.com/photo-1611820972303-a852ce20c2f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      tools: [ 'Figma' ],
      likeCount: 400,
      isLikedByOwnUser: true
    },
    {
      id: 5,
      name: 'Project Name 3',
      type: 'App Web',
      imageUrl: 'https://images.unsplash.com/photo-1611820972303-a852ce20c2f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      tools: [ 'HTML 5', 'CSS 3', 'React.js', 'Redux.js' ],
      likeCount: 500,
      isLikedByOwnUser: false
    }
  ];

  return (
    <section id="projects-page" className="page">
      <Project
        title="Projets personnels"
        projects={personnalProjects}
      />
      <Project
        title="Projets freelance"
        projects={personnalProjects}
      />
    </section>
  )
};

export default Projects;
