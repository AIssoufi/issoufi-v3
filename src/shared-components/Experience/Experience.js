// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Style
import './Experience.css';

const Experience = ({
  jobName, entityName, entityLogoUrl, contratType, city, startDate, endDate, duration, children
}) => {
  return (
    <article className="exp-comp">
      <header className="summary">
        <img
          className="entity-logo" src={entityLogoUrl}
          alt={entityName}
        />
        <div className="job-summary">
          <h2 className='job-name'>{jobName}</h2>
          <div className='job-details'>{`${entityName} · ${contratType} · ${city}`}</div>
          <div className='job-duration'>{`${startDate} – ${endDate} · ${duration}`}</div>
        </div>
      </header>
      <main className="details">{children}</main>
    </article>
  );
};

Experience.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  jobName: PropTypes.string,
  entityName: PropTypes.string,
  entityLogoUrl: PropTypes.string,
  contratType: PropTypes.string,
  city: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  duration: PropTypes.string
};

const Technologies = ({ technologies }) => (
  <footer className="exp-technologies">
    <div className='title'>Technologies que j’utilise</div>
    {technologies.slice(0, technologies.length - 1).join(', ')} et {technologies[technologies.length - 1]}
  </footer>
);

Technologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string)
};

Technologies.defaultProps = {
  technologies: []
};

Experience.Technologies = Technologies;

const Project = ({ title, state, technologies, children }) => (
  <div className="exp-project">
    <header>
      <h3 className="title">{title}&nbsp;{state ? <span className="state">· {state}</span> : null}</h3>
    </header>
    <main className="description">{children}</main>
    {technologies.length > 0 ? <Technologies technologies={technologies} /> : null}
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

Project.defaultProps = {
  technologies: [],
  state: ''
};

Experience.Project = Project;

export default Experience;
